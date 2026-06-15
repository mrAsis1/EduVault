import { useEffect, useMemo, useState } from 'react'
import { IconCloudUpload, IconFileCheck, IconUpload, IconCheck } from '@tabler/icons-react'
import { getSubjects, type Resource } from '../types'

interface UploadModalProps {
  open: boolean
  resources: Resource[]
  editingResource: Resource | null
  onClose: () => void
  onSave: (input: {
    id?: number
    title: string
    subject: string
    type: Resource['type']
    format: string
    size: string
    file?: File | null
  }) => Promise<void>
}

const FORMATS = ['PDF', 'DOCX', 'PPTX', 'XLSX']

export default function UploadModal({ open, resources, editingResource, onClose, onSave }: UploadModalProps) {
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [type, setType] = useState<Resource['type'] | ''>('')
  const [format, setFormat] = useState('PDF')
  const [size, setSize] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [saving, setSaving] = useState(false)

  const existingSubjects = useMemo(() => getSubjects(resources), [resources])

  useEffect(() => {
    if (editingResource) {
      setTitle(editingResource.title)
      setSubject(editingResource.subject)
      setType(editingResource.type)
      setFormat(editingResource.format)
      setSize(editingResource.size)
      setFile(null)
    } else {
      setTitle('')
      setSubject('')
      setType('')
      setFormat('PDF')
      setSize('')
      setFile(null)
    }
  }, [editingResource, open])

  if (!open) return null

  const handleFileSelect = (f: File) => {
    setFile(f)
    const ext = f.name.split('.').pop()?.toUpperCase()
    if (ext && FORMATS.includes(ext)) setFormat(ext)

    const kb = f.size / 1024
    setSize(kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${Math.round(kb)} KB`)
  }

  const handleSubmit = async () => {
    const trimmedSubject = subject.trim()
    if (!title.trim() || !trimmedSubject || !type) return
    setSaving(true)
    try {
      await onSave({
        id: editingResource?.id,
        title: title.trim(),
        subject: trimmedSubject,
        type,
        format,
        size: size.trim() || '—',
        file,
      })
      onClose()
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="modal-overlay open" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <h2>{editingResource ? 'Edit resource' : 'Upload a resource'}</h2>
        </div>

        <div className="form-group">
          <label htmlFor="file-title">Title</label>
          <input id="file-title" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Algebra Fundamentals" />
        </div>

        <div className="form-group">
          <label htmlFor="file-subject">Subject</label>
          <input
            id="file-subject"
            list="subject-options"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Select existing or type a new subject..."
            autoComplete="off"
          />
          <datalist id="subject-options">
            {existingSubjects.map(s => <option key={s} value={s} />)}
          </datalist>
          {!existingSubjects.includes(subject.trim()) && subject.trim() && (
            <p style={{ fontSize: 12, color: 'var(--master)', marginTop: 6 }}>
              "{subject.trim()}" will be added as a new subject.
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="file-type">Type</label>
          <select id="file-type" value={type} onChange={e => setType(e.target.value as Resource['type'])}>
            <option value="">Select type...</option>
            <option value="Module">Module</option>
            <option value="Exercise">Exercise</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="file-format">Format</label>
          <select id="file-format" value={format} onChange={e => setFormat(e.target.value)}>
            {FORMATS.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="file-size">File size</label>
          <input id="file-size" value={size} onChange={e => setSize(e.target.value)} placeholder="e.g. 2.4 MB" />
        </div>

        {!editingResource && (
          <div>
            <div
              className="dropzone"
              onClick={() => document.getElementById('file-input')?.click()}
              onDrop={e => {
                e.preventDefault()
                if (e.dataTransfer.files[0]) handleFileSelect(e.dataTransfer.files[0])
              }}
              onDragOver={e => e.preventDefault()}
            >
              <IconCloudUpload size={32} />
              <p><span>Click to choose a file</span> or drag and drop</p>
              <p style={{ fontSize: 12, marginTop: 4 }}>PDF, DOCX, PPTX, XLSX — up to 50 MB</p>
              <input
                type="file"
                id="file-input"
                style={{ display: 'none' }}
                accept=".pdf,.docx,.pptx,.xlsx"
                onChange={e => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
              />
            </div>
            {file && (
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 8 }}>
                <IconFileCheck size={16} style={{ verticalAlign: '-2px', color: 'var(--success)' }} /> {file.name}
              </div>
            )}
          </div>
        )}

        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-master" onClick={handleSubmit} disabled={saving}>
            {editingResource ? <IconCheck size={16} /> : <IconUpload size={16} />}
            {saving ? 'Saving...' : editingResource ? 'Save changes' : 'Upload file'}
          </button>
        </div>
      </div>
    </div>
  )
}