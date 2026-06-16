import { useState } from 'react'
import { IconCheck } from '@tabler/icons-react'
import type { Resource } from '../types'

interface BulkEditModalProps {
  open: boolean
  count: number
  existingSubjects: string[]
  onClose: () => void
  onApply: (patch: {
    subject?: string
    type?: Resource['type']
    status?: Resource['status']
  }) => Promise<void>
}

export default function BulkEditModal({ open, count, existingSubjects, onClose, onApply }: BulkEditModalProps) {
  const [subject, setSubject] = useState('')
  const [type, setType] = useState('')
  const [status, setStatus] = useState('')
  const [saving, setSaving] = useState(false)

  if (!open) return null

  const handleApply = async () => {
    const patch: Parameters<typeof onApply>[0] = {}
    if (subject.trim()) patch.subject = subject.trim()
    if (type) patch.type = type as Resource['type']
    if (status) patch.status = status as Resource['status']
    if (!Object.keys(patch).length) { onClose(); return }
    setSaving(true)
    try {
      await onApply(patch)
      setSubject('')
      setType('')
      setStatus('')
      onClose()
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="modal-overlay open" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal modal-sm">
        <div className="modal-header">
          <h2>Edit {count} file{count !== 1 ? 's' : ''}</h2>
        </div>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
          Leave a field blank to keep each file's existing value.
        </p>

        <div className="form-group">
          <label htmlFor="bulk-subject">Subject</label>
          <input
            id="bulk-subject"
            list="bulk-subject-options"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Leave blank to keep existing"
            autoComplete="off"
          />
          <datalist id="bulk-subject-options">
            {existingSubjects.map(s => <option key={s} value={s} />)}
          </datalist>
        </div>

        <div className="form-group">
          <label htmlFor="bulk-type">Type</label>
          <select id="bulk-type" value={type} onChange={e => setType(e.target.value)}>
            <option value="">Leave blank to keep existing</option>
            <option value="Module">Module</option>
            <option value="Exercise">Exercise</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="bulk-status">Status</label>
          <select id="bulk-status" value={status} onChange={e => setStatus(e.target.value)}>
            <option value="">Leave blank to keep existing</option>
            <option value="draft">Draft (master only)</option>
            <option value="public">Public (visible to students)</option>
          </select>
        </div>

        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-master" onClick={handleApply} disabled={saving}>
            <IconCheck size={16} />
            {saving ? 'Applying...' : 'Apply'}
          </button>
        </div>
      </div>
    </div>
  )
}