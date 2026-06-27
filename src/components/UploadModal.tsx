import { useEffect, useMemo, useState } from 'react'
import { IconCloudUpload, IconFileCheck, IconUpload, IconCheck, IconX } from '@tabler/icons-react'
import { getSubjects, NO_SUBJECT, NO_TYPE, type Resource } from '../types'

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
    status?: Resource['status']
    file?: File | null
  }) => Promise<void>
}

const FORMATS = ['PDF', 'DOCX', 'PPTX', 'XLSX', 'ZIP']

function formatSize(bytes: number): string {
  const kb = bytes / 1024
  return kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${Math.round(kb)} KB`
}

function detectFormat(filename: string): string {
  const ext = filename.split('.').pop()?.toUpperCase()
  return ext && FORMATS.includes(ext) ? ext : 'PDF'
}

export default function UploadModal({ open, resources, editingResource, onClose, onSave }: UploadModalProps) {
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [type, setType] = useState<Resource['type'] | ''>('')
  const [format, setFormat] = useState('PDF')
  const [size, setSize] = useState('')
  const [status, setStatus] = useState<Resource['status']>('draft')
  const [files, setFiles] = useState<File[]>([])
  const [saving, setSaving] = useState(false)

  const existingSubjects = useMemo(() => getSubjects(resources), [resources])

  useEffect(() => {
    if (editingResource) {
      setTitle(editingResource.title)
      setSubject(editingResource.subject === NO_SUBJECT ? '' : editingResource.subject)
      setType(editingResource.type === NO_TYPE ? '' : editingResource.type)
      setFormat(editingResource.format)
      setSize(editingResource.size)
      setStatus(editingResource.status)
      setFiles([])
    } else {
      setTitle('')
      setSubject('')
      setType('')
      setFormat('PDF')
      setSize('')
      setStatus('draft')
      setFiles([])
    }
  }, [editingResource, open])

  if (!open) return null

  const handleFilesSelect = (incoming: FileList | File[]) => {
    setFiles(prev => [...prev, ...Array.from(incoming)])
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const canSubmit = editingResource
    ? !!title.trim() && !!subject.trim() && !!type
    : files.length > 0

  const handleSubmit = async () => {
    if (!canSubmit) return
    setSaving(true)
    try {
      if (editingResource) {
        await onSave({
          id: editingResource.id,
          title: title.trim(),
          subject: subject.trim(),
          type: type as Resource['type'],
          format,
          size: size.trim() || '—',
          status,
          file: null,
        })
      } else {
        for (const file of files) {
          await onSave({
            title: file.name,
            subject: NO_SUBJECT,
            type: NO_TYPE,
            format: detectFormat(file.name),
            size: formatSize(file.size),
            status: 'draft',
            file,
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
      <div className="modal" style={{ display: 'flex', flexDirection: 'column', maxHeight: '85vh' }}>
        <div className="modal-header">
          <h2>{editingResource ? 'Edit resource' : 'Upload files'}</h2>
        </div>

        <div style={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>
          {editingResource ? (
            <>
              {/* Editable title/filename */}
              <div className="form-group">
                <label htmlFor="file-title">File name</label>
                <input
                  id="file-title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Enter file name..."
                  autoComplete="off"
                />
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

              <div className="form-row">
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
              </div>

              <div className="form-group">
                <label htmlFor="file-size">File size</label>
                <input id="file-size" value={size} onChange={e => setSize(e.target.value)} placeholder="e.g. 2.4 MB" />
              </div>

              <div className="form-group">
                <label htmlFor="file-status">Status</label>
                <select id="file-status" value={status} onChange={e => setStatus(e.target.value as Resource['status'])}>
                  <option value="draft">Draft (master only)</option>
                  <option value="public">Public (visible to students)</option>
                </select>
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
                <p style={{ fontSize: 12, marginTop: 4 }}>PDF, DOCX, PPTX, XLSX, ZIP — up to 50 MB each</p>
                <input
                  type="file"
                  id="file-input"
                  style={{ display: 'none' }}
                  accept=".pdf,.docx,.pptx,.xlsx,.zip"
                  multiple
                  onChange={e => e.target.files?.length && handleFilesSelect(e.target.files)}
                />
              </div>

              {files.length > 0 && (
                <div style={{ marginTop: 4 }}>
                  {files.map((file, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '8px 10px', border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)', marginBottom: 6, fontSize: 13,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
                        <IconFileCheck size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', flexShrink: 0 }}
                        title="Remove"
                      >
                        <IconX size={16} />
                      </button>
                    </div>
                  ))}
                  <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>
                    Files will be uploaded as drafts. Edit each one afterward to set subject, type, and status.
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        <div className="modal-actions" style={{ paddingTop: 14, flexShrink: 0 }}>
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-master" onClick={handleSubmit} disabled={saving || !canSubmit}>
            {editingResource ? <IconCheck size={16} /> : <IconUpload size={16} />}
            {saving
              ? 'Saving...'
              : editingResource
                ? 'Save changes'
                : files.length > 1
                  ? `Upload ${files.length} files`
                  : 'Upload'}
          </button>
        </div>
      </div>
    </div>
  )
}