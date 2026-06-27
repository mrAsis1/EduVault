import { useCallback, useEffect, useState } from 'react'
import { supabase, BUCKET, TABLE } from '../lib/supabase'
import type { Resource } from '../types'

interface SaveInput {
  id?: number
  title: string
  subject: string
  type: Resource['type']
  format: string
  size: string
  status?: Resource['status']
  file?: File | null
}

export function useResources() {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchResources = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .order('created_at', { ascending: false })
    if (error) { setError(error.message) }
    else { setResources(data as Resource[]); setError(null) }
    setLoading(false)
  }, [])

  useEffect(() => { fetchResources() }, [fetchResources])

  const saveResource = useCallback(async (input: SaveInput) => {
    let file_path: string | undefined

    if (input.file) {
      const path = `${input.subject || 'unsorted'}/${Date.now()}-${input.file.name}`
      const { error: uploadError } = await supabase.storage
        .from(BUCKET).upload(path, input.file, { upsert: false })
      if (uploadError) throw uploadError
      file_path = path
    }

    if (input.id) {
      const updatePayload: Partial<Resource> = {
        title: input.title, subject: input.subject,
        type: input.type, format: input.format, size: input.size,
      }
      if (input.status) updatePayload.status = input.status
      if (file_path) updatePayload.file_path = file_path
      const { error } = await supabase.from(TABLE).update(updatePayload).eq('id', input.id)
      if (error) throw error
    } else {
      const { error } = await supabase.from(TABLE).insert({
        title: input.title, subject: input.subject,
        type: input.type, format: input.format, size: input.size,
        downloads: 0, status: input.status ?? 'draft',
        file_path: file_path ?? null,
      })
      if (error) throw error
    }
    await fetchResources()
  }, [fetchResources])

  const bulkUpdate = useCallback(async (
    ids: number[],
    patch: { subject?: string; type?: Resource['type']; status?: Resource['status'] }
  ) => {
    const { error } = await supabase.from(TABLE).update(patch).in('id', ids)
    if (error) throw error
    setResources(prev =>
      prev.map(r => ids.includes(r.id) ? { ...r, ...patch } : r)
    )
  }, [])

  const bulkDelete = useCallback(async (ids: number[], allResources: Resource[]) => {
    const filePaths = allResources
      .filter(r => ids.includes(r.id) && r.file_path)
      .map(r => r.file_path as string)

    if (filePaths.length) {
      const { error } = await supabase.storage.from(BUCKET).remove(filePaths)
      if (error) throw error
    }

    const { error } = await supabase.from(TABLE).delete().in('id', ids)
    if (error) throw error
    setResources(prev => prev.filter(r => !ids.includes(r.id)))
  }, [])

  const toggleStatus = useCallback(async (resource: Resource) => {
    const newStatus: Resource['status'] = resource.status === 'draft' ? 'public' : 'draft'
    const { error } = await supabase.from(TABLE).update({ status: newStatus }).eq('id', resource.id)
    if (error) throw error
    setResources(prev =>
      prev.map(r => r.id === resource.id ? { ...r, status: newStatus } : r)
    )
  }, [])

  const downloadResource = useCallback(async (resource: Resource) => {
    if (!resource.file_path) throw new Error('No file attached to this resource')
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(resource.file_path)
    const link = document.createElement('a')
    link.href = data.publicUrl
    link.download = resource.title
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    const { error } = await supabase.rpc('increment_downloads', { row_id: resource.id })
    if (error) throw error
    setResources(prev =>
      prev.map(r => r.id === resource.id ? { ...r, downloads: r.downloads + 1 } : r)
    )
  }, [])

  const deleteResource = useCallback(async (resource: Resource) => {
    if (resource.file_path) {
      const { error: storageError } = await supabase.storage
        .from(BUCKET).remove([resource.file_path])
      if (storageError) throw storageError
    }
    const { error } = await supabase.from(TABLE).delete().eq('id', resource.id)
    if (error) throw error
    setResources(prev => prev.filter(r => r.id !== resource.id))
  }, [])

  const renameTitle = useCallback(async (resource: Resource, newTitle: string) => {
    const { error } = await supabase
      .from(TABLE)
      .update({ title: newTitle })
      .eq('id', resource.id)
    if (error) throw error
    setResources(prev =>
      prev.map(r => r.id === resource.id ? { ...r, title: newTitle } : r)
    )
  }, [])

  return {
    resources, loading, error,
    saveResource, bulkUpdate, bulkDelete,
    downloadResource, deleteResource, toggleStatus,
    renameTitle,
    refetch: fetchResources,
  }
}