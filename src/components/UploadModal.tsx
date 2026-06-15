import { useEffect, useMemo, useState } from 'react'
import { IconCloudUpload, IconFileCheck, IconUpload, IconCheck, IconX } from '@tabler/icons-react'
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

interface FileEntry {
  file: File
  subject: string
  type: Resource['type'] | ''
  format: string
  size: string
}

function formatSize(bytes: number): string {
  const kb = bytes / 1024
  return kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${Math.round(kb)} KB`
}

function detectFormat(filename: string): string {
  const ext = filename.split('.').pop()?.toUpperCase()
  return ext && FORMATS.includes(ext) ? ext : 'PDF'
}

export default function UploadModal({ open, resources, editingResource, onClose, onSave }: UploadModalProps) {
  // Edit-mode fields (single existing resource — title is fixed, not editable)
  const [subject, setSubject] = useState('')
  const [type, setType] = useState<Resource['type'] | ''>('')
  const [format, setFormat] = useState('PDF')
  const [size, setSize] = useState('')

  // New-upload fields (one or more files)
  const [entries, setEntries] = useState<FileEntry[]>([])
  const [saving, setSaving] = useState(false)

  const existingSubjects = useMemo(() => getSubjects(resources), [resources])

  useEffect(() => {
    if (editingResource) {
      setSubject(editingResource.subject)
      setType(editingResource.type)
      setFormat(editingResource.format)
      setSize(editingResource.size)
      setEntries([])
    } else {
      setSubject('')
      setType('')
      setFormat('PDF')
      setSize('')
      setEntries([])
    }
  }, [editingResource, open])

  if (!open) return null

  const handleFilesSelect = (files: FileList | File[]) => {
    const newEntries: FileEntry[] = Array.from(files).map(file => ({
      file,
      subject: '',
      type: '',
      format: detectFormat(file.name),
      size: formatSize(file.size),
    }))
    setEntries(prev => [...prev, ...newEntries])
  }

  const updateEntry = (index: number, patch: Partial<FileEntry>) => {
    setEntries(prev => prev.map((e, i) => i === index ? { ...e, ...patch } : e))
  }

  const removeEntry = (index: number) => {
    setEntries(prev => prev.filter((_, i) => i !== index))
  }

  const canSubmit = editingResource
    ? !!subject.trim() && !!type
    : entries.length > 0 && entries.every(e => e.subject.trim() && e.type)

  const handleSubmit = async () => {
    if (!canSubmit) return
    setSaving(true)
    try {
      if (editingResource) {
        await onSave({
          id: editingResource.id,
          title: editingResource.title,
          subject: subject.trim(),
          type: type as Resource['type'],
          format,
          size: size.trim() || '—',
          file: null,
        })
      } else {
        for (const entry of entries) {
          await onSave({
            title: entry.file.name,
            subject: entry.subject.trim(),
            type: entry.type as Resource['type'],
            format: entry.format,
            size: entry.size,
            file: entry.file,
          })
        }
      }
      onClose()
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="modal-overlay open" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <h2>{editingResource ? 'Edit resource' : 'Upload resources'}</h2>
        </div>

        {editingResource ? (
          <>
            <div className="form-group">
              <label>File</label>
              <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>{editingResource.title}</p>
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
          </>
        ) : (
          <>
            <div
              className="dropzone"
              onClick={() => document.getElementById('file-input')?.click()}
              onDrop={e => {
                e.preventDefault()
                if (e.dataTransfer.files.length) handleFilesSelect(e.dataTransfer.files)
              }}
              onDragOver={e => e.preventDefault()}
            >
              <IconCloudUpload size={32} />
              <p><span>Click to choose files</span> or drag and drop</p>
              <p style={{ fontSize: 12, marginTop: 4 }}>PDF, DOCX, PPTX, XLSX — up to 50 MB each</p>
              <input
                type="file"
                id="file-input"
                style={{ display: 'none' }}
                accept=".pdf,.docx,.pptx,.xlsx"
                multiple
                onChange={e => e.target.files?.length && handleFilesSelect(e.target.files)}
              />
            </div>

            {entries.map((entry, i) => (
              <div key={i} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 12, marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
                    <IconFileCheck size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{entry.file.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeEntry(i)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', flexShrink: 0 }}
                    title="Remove"
                  >
                    <IconX size={16} />
                  </button>
                </div>

                <div className="form-group" style={{ marginBottom: 8 }}>
                  <label>Subject</label>
                  <input
                    list="subject-options"
                    value={entry.subject}
                    onChange={e => updateEntry(i, { subject: e.target.value })}
                    placeholder="Select existing or type a new subject..."
                    autoComplete="off"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Type</label>
                    <select value={entry.type} onChange={e => updateEntry(i, { type: e.target.value as Resource['type'] })}>
                      <option value="">Select type...</option>
                      <option value="Module">Module</option>
                      <option value="Exercise">Exercise</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Format</label>
                    <select value={entry.format} onChange={e => updateEntry(i, { format: e.target.value })}>
                      {FORMATS.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            ))}

            <datalist id="subject-options">
              {existingSubjects.map(s => <option key={s} value={s} />)}
            </datalist>
          </>
        )}

        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-master" onClick={handleSubmit} disabled={saving || !canSubmit}>
            {editingResource ? <IconCheck size={16} /> : <IconUpload size={16} />}
            {saving
              ? 'Saving...'
              : editingResource
                ? 'Save changes'
                : entries.length > 1
                  ? `Upload ${entries.length} files`
                  : 'Upload file'}
          </button>
        </div>
      </div>
    </div>
  )
}