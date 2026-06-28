import { useState } from 'react'
import { IconPlus, IconTrash, IconPencil, IconCheck, IconX, IconBuilding } from '@tabler/icons-react'
import type { DepartmentWithSubjects } from '../hooks/useDepartments'

interface DepartmentModalProps {
  open: boolean
  departments: DepartmentWithSubjects[]
  existingSubjects: string[]
  onClose: () => void
  onAddDepartment: (name: string) => Promise<void>
  onRenameDepartment: (id: number, name: string) => Promise<void>
  onDeleteDepartment: (id: number) => Promise<void>
  onAddSubject: (deptId: number, subject: string) => Promise<void>
  onRemoveSubject: (deptId: number, subject: string) => Promise<void>
}

export default function DepartmentModal({
  open, departments, existingSubjects, onClose,
  onAddDepartment, onRenameDepartment, onDeleteDepartment,
  onAddSubject, onRemoveSubject,
}: DepartmentModalProps) {
  const [newDeptName, setNewDeptName] = useState('')
  const [addingDept, setAddingDept] = useState(false)
  const [renamingId, setRenamingId] = useState<number | null>(null)
  const [renameValue, setRenameValue] = useState('')
  const [expandedDept, setExpandedDept] = useState<number | null>(null)
  const [newSubject, setNewSubject] = useState('')
  const [saving, setSaving] = useState(false)

  if (!open) return null

  const handleAddDept = async () => {
    if (!newDeptName.trim()) return
    setSaving(true)
    try {
      await onAddDepartment(newDeptName.trim())
      setNewDeptName('')
      setAddingDept(false)
    } finally {
      setSaving(false)
    }
  }

  const handleRename = async (id: number) => {
    if (!renameValue.trim()) return
    setSaving(true)
    try {
      await onRenameDepartment(id, renameValue.trim())
      setRenamingId(null)
    } finally {
      setSaving(false)
    }
  }

  const handleAddSubject = async (deptId: number) => {
    if (!newSubject.trim()) return
    setSaving(true)
    try {
      await onAddSubject(deptId, newSubject.trim())
      setNewSubject('')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="modal-overlay open" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal" style={{ display: 'flex', flexDirection: 'column', maxHeight: '85vh', maxWidth: 480 }}>
        <div className="modal-header">
          <h2><IconBuilding size={18} style={{ verticalAlign: '-3px', marginRight: 6 }} /> Manage Departments</h2>
        </div>

        <div style={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>

          {/* Department list */}
          {departments.map(dept => (
            <div
              key={dept.id}
              style={{
                border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                marginBottom: 10, overflow: 'hidden',
              }}
            >
              {/* Department header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 12px', background: 'var(--surface2)',
              }}>
                {renamingId === dept.id ? (
                  <>
                    <input
                      value={renameValue}
                      onChange={e => setRenameValue(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') handleRename(dept.id)
                        if (e.key === 'Escape') setRenamingId(null)
                      }}
                      autoFocus
                      style={{
                        flex: 1, fontSize: 13, fontWeight: 600,
                        background: 'var(--surface)', border: '1.5px solid var(--accent)',
                        borderRadius: 6, padding: '3px 8px', color: 'var(--text)', outline: 'none',
                      }}
                    />
                    <button onClick={() => handleRename(dept.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success)' }}>
                      <IconCheck size={15} />
                    </button>
                    <button onClick={() => setRenamingId(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--danger)' }}>
                      <IconX size={15} />
                    </button>
                  </>
                ) : (
                  <>
                    <span style={{ flex: 1, fontSize: 13, fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {dept.name}
                    </span>
                    <span style={{ fontSize: 12, color: 'var(--muted)' }}>{dept.subjects.length} subjects</span>
                    <button
                      onClick={() => { setRenamingId(dept.id); setRenameValue(dept.name) }}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)' }}
                      title="Rename"
                    >
                      <IconPencil size={14} />
                    </button>
                    <button
                      onClick={() => setExpandedDept(expandedDept === dept.id ? null : dept.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)', fontSize: 12, fontWeight: 500 }}
                    >
                      {expandedDept === dept.id ? 'Close' : 'Subjects'}
                    </button>
                    <button
                      onClick={() => onDeleteDepartment(dept.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--danger)' }}
                      title="Delete department"
                    >
                      <IconTrash size={14} />
                    </button>
                  </>
                )}
              </div>

              {/* Subjects list */}
              {expandedDept === dept.id && (
                <div style={{ padding: '10px 12px' }}>
                  {dept.subjects.length === 0 && (
                    <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 8 }}>No subjects yet.</p>
                  )}
                  {dept.subjects.map(subject => (
                    <div key={subject} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '5px 0', borderBottom: '1px solid var(--border)',
                    }}>
                      <span style={{ flex: 1, fontSize: 13, color: 'var(--text)' }}>{subject}</span>
                      <button
                        onClick={() => onRemoveSubject(dept.id, subject)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--danger)' }}
                        title="Remove subject"
                      >
                        <IconX size={13} />
                      </button>
                    </div>
                  ))}

                  {/* Add subject */}
                  <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                    <input
                      list="existing-subjects-list"
                      value={newSubject}
                      onChange={e => setNewSubject(e.target.value)}
                      placeholder="Add subject..."
                      autoComplete="off"
                      onKeyDown={e => e.key === 'Enter' && handleAddSubject(dept.id)}
                      style={{
                        flex: 1, fontSize: 13, padding: '6px 10px',
                        border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                        background: 'var(--surface)', color: 'var(--text)', outline: 'none',
                      }}
                    />
                    <datalist id="existing-subjects-list">
                      {existingSubjects.map(s => <option key={s} value={s} />)}
                    </datalist>
                    <button
                      className="btn btn-master btn-sm"
                      onClick={() => handleAddSubject(dept.id)}
                      disabled={saving || !newSubject.trim()}
                    >
                      <IconPlus size={14} /> Add
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Add new department */}
          {addingDept ? (
            <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
              <input
                value={newDeptName}
                onChange={e => setNewDeptName(e.target.value)}
                placeholder="Department name..."
                autoFocus
                onKeyDown={e => {
                  if (e.key === 'Enter') handleAddDept()
                  if (e.key === 'Escape') { setAddingDept(false); setNewDeptName('') }
                }}
                style={{
                  flex: 1, fontSize: 13, padding: '6px 10px',
                  border: '1.5px solid var(--accent)', borderRadius: 'var(--radius)',
                  background: 'var(--surface)', color: 'var(--text)', outline: 'none',
                }}
              />
              <button
                className="btn btn-master btn-sm"
                onClick={handleAddDept}
                disabled={saving || !newDeptName.trim()}
              >
                <IconCheck size={14} /> Save
              </button>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => { setAddingDept(false); setNewDeptName('') }}
              >
                <IconX size={14} />
              </button>
            </div>
          ) : (
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setAddingDept(true)}
              style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}
            >
              <IconPlus size={14} /> Add Department
            </button>
          )}
        </div>

        <div className="modal-actions" style={{ paddingTop: 14, flexShrink: 0 }}>
          <button className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}