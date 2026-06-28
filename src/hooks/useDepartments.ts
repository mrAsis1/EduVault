import { useCallback, useEffect, useState } from 'react'
import { supabase, DEPT_TABLE, DEPT_SUBJECT_TABLE } from '../lib/supabase'
import type { Department, DepartmentSubject } from '../types'

export interface DepartmentWithSubjects extends Department {
  subjects: string[]
}

export function useDepartments() {
  const [departments, setDepartments] = useState<DepartmentWithSubjects[]>([])
  const [loading, setLoading] = useState(true)

  const fetchDepartments = useCallback(async () => {
    setLoading(true)
    const [{ data: depts }, { data: mappings }] = await Promise.all([
      supabase.from(DEPT_TABLE).select('*').order('name'),
      supabase.from(DEPT_SUBJECT_TABLE).select('*'),
    ])

    if (depts && mappings) {
      const result: DepartmentWithSubjects[] = depts.map((dept: Department) => ({
        ...dept,
        subjects: (mappings as DepartmentSubject[])
          .filter(m => m.department_id === dept.id)
          .map(m => m.subject)
          .sort(),
      }))
      setDepartments(result)
    }
    setLoading(false)
  }, [])

  useEffect(() => { fetchDepartments() }, [fetchDepartments])

  const addDepartment = useCallback(async (name: string) => {
    const { data, error } = await supabase
      .from(DEPT_TABLE)
      .insert({ name: name.trim() })
      .select()
      .single()
    if (error) throw error
    await fetchDepartments()
    return data as Department
  }, [fetchDepartments])

  const renameDepartment = useCallback(async (id: number, name: string) => {
    const { error } = await supabase
      .from(DEPT_TABLE)
      .update({ name: name.trim() })
      .eq('id', id)
    if (error) throw error
    await fetchDepartments()
  }, [fetchDepartments])

  const deleteDepartment = useCallback(async (id: number) => {
    const { error } = await supabase
      .from(DEPT_TABLE)
      .delete()
      .eq('id', id)
    if (error) throw error
    await fetchDepartments()
  }, [fetchDepartments])

  const addSubjectToDept = useCallback(async (department_id: number, subject: string) => {
    const { error } = await supabase
      .from(DEPT_SUBJECT_TABLE)
      .insert({ department_id, subject: subject.trim() })
    if (error) throw error
    await fetchDepartments()
  }, [fetchDepartments])

  const removeSubjectFromDept = useCallback(async (department_id: number, subject: string) => {
    const { error } = await supabase
      .from(DEPT_SUBJECT_TABLE)
      .delete()
      .eq('department_id', department_id)
      .eq('subject', subject)
    if (error) throw error
    await fetchDepartments()
  }, [fetchDepartments])

  return {
    departments, loading,
    addDepartment, renameDepartment, deleteDepartment,
    addSubjectToDept, removeSubjectFromDept,
    refetch: fetchDepartments,
  }
}