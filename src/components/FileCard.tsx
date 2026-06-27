import { useRef, useState } from 'react'
import { IconDownload, IconPencil, IconTrash, IconEye, IconEyeOff, IconCheck, IconX } from '@tabler/icons-react'
import { typeColors, NO_SUBJECT, NO_TYPE, type Resource } from '../types'
import { useScrollFade } from '../hooks/useScrollFade'

interface FileCardProps {
  resource: Resource
  isMaster: boolean
  isSelecting: boolean
  isSelected: boolean
  viewMode: 'grid' | 'list'
  onSelect: (resource: Resource) => void
  onDownload: (resource: Resource) => void
  onEdit: (resource: Resource) => void
  onDelete: (resource: Resource) => void
  onToggleStatus: (resource: Resource) => void
  onRenameTitle: (resource: Resource, newTitle: string) => Promise<void>
}

interface EditableTitleProps {
  resource: Resource
  onRenameTitle: (resource: Resource, newTitle: string) => Promise<void>
}

function EditableTitle({ resource, onRenameTitle }: EditableTitleProps) {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(resource.title)
  const [saving, setSaving] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSave = async () => {
    const trimmed = value.trim()
    if (!trimmed || trimmed === resource.title) {
      setValue(resource.title)
      setEditing(false)
      return
    }
    setSaving(true)
    try {
      await onRenameTitle(resource, trimmed)
      setEditing(false)
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    setValue(resource.title)
    setEditing(false)
  }

  if (editing) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
        <input
          ref={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') handleSave()
            if (e.key === 'Escape') handleCancel()
          }}
          autoFocus
          disabled={saving}
          style={{
            flex: 1,
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            color: 'var(--text)',
            background: 'var(--surface2)',
            border: '1.5px solid var(--accent)',
            borderRadius: 6,
            padding: '3px 7px',
            outline: 'none',
            minWidth: 0,
          }}
        />
        <button
          onClick={handleSave}
          disabled={saving}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--success)', padding: 2, flexShrink: 0 }}
          title="Save"
        >
          <IconCheck size={15} />
        </button>
        <button
          onClick={handleCancel}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--danger)', padding: 2, flexShrink: 0 }}
          title="Cancel"
        >
          <IconX size={15} />
        </button>
      </div>
    )
  }

  return (
    <div
      className="card-title"
      style={{ cursor: 'text', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}
      onClick={() => setEditing(true)}
      title="Click to rename"
    >
      <span style={{ flex: 1 }}>{resource.title}</span>
      <IconPencil size={12} style={{ color: 'var(--muted)', flexShrink: 0, opacity: 0.5 }} />
    </div>
  )
}

export default function FileCard({
  resource, isMaster, isSelecting, isSelected, viewMode,
  onSelect, onDownload, onEdit, onDelete, onToggleStatus, onRenameTitle,
}: FileCardProps) {
  const c = typeColors[resource.type]
  const isDraft = resource.status === 'draft'
  const isList = viewMode === 'list'
  const setScrollRef = useScrollFade()

  if (isList) {
    return (
      <article
        className="file-card-list"
        tabIndex={0}
        onClick={() => isSelecting && onSelect(resource)}
        style={{
          cursor: isSelecting ? 'pointer' : undefined,
          border: isSelected ? '2px solid var(--master)' : '1px solid var(--border)',
          background: isSelected ? 'var(--master-light)' : 'var(--surface)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '9px 12px',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow)',
          overflow: 'hidden',
          minWidth: 0,
        }}
      >
        {isSelecting && isMaster && (
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(resource)}
            onClick={e => e.stopPropagation()}
            style={{ width: 15, height: 15, cursor: 'pointer', accentColor: 'var(--master)', flexShrink: 0 }}
          />
        )}

        {/* Type badge */}
        <span className="badge badge-type" style={{ background: c.bg, color: c.text, flexShrink: 0 }}>
          <span className="badge-short">
            {resource.type === NO_TYPE ? '?' : resource.type === 'Module' ? 'M' : 'E'}
          </span>
          <span className="badge-full">
            {resource.type === NO_TYPE ? 'No type' : resource.type}
          </span>
        </span>

        {/* Status badge — master only */}
        {isMaster && (
          <span
            className="badge badge-status"
            style={{
              background: isDraft ? 'var(--amber-bg)' : 'var(--success-light)',
              color: isDraft ? 'var(--amber-text)' : 'var(--success)',
              flexShrink: 0,
            }}
          >
            <span className="badge-short">{isDraft ? 'D' : 'P'}</span>
            <span className="badge-full">{isDraft ? 'Draft' : 'Public'}</span>
          </span>
        )}

        {/* Title + subject — scrollable */}
        <div style={{
          flex: 1,
          minWidth: 0,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
        }}>
          <div
            ref={setScrollRef(0)}
            className="list-scroll-field at-start"
            style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.4 }}
          >
            <span className="scroll-inner">{resource.title}</span>
          </div>
          <div
            ref={setScrollRef(1)}
            className="list-scroll-field at-start"
            style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.4 }}
          >
            <span className="scroll-inner">
              {resource.subject === NO_SUBJECT ? 'No subject' : resource.subject}
              <span style={{ margin: '0 4px', opacity: 0.4 }}>·</span>
              {resource.size}
              <span style={{ margin: '0 4px', opacity: 0.4 }}>·</span>
              {resource.format}
            </span>
          </div>
        </div>

        {/* Actions */}
        {isMaster && !isSelecting ? (
          <div className="card-actions" style={{ flexShrink: 0 }}>
            <button
              className="btn-icon"
              onClick={() => onToggleStatus(resource)}
              title={isDraft ? 'Publish' : 'Unpublish'}
              style={{ color: isDraft ? 'var(--success)' : 'var(--amber-text)' }}
            >
              {isDraft ? <IconEye size={14} /> : <IconEyeOff size={14} />}
            </button>
            <button className="btn-icon btn-icon-edit" onClick={() => onEdit(resource)} title="Edit">
              <IconPencil size={14} />
            </button>
            <button className="btn-icon btn-icon-del" onClick={() => onDelete(resource)} title="Delete">
              <IconTrash size={14} />
            </button>
          </div>
        ) : !isMaster ? (
          <button
            className="btn-download btn-download-list"
            onClick={() => onDownload(resource)}
            style={{ flexShrink: 0 }}
            title="Download"
          >
            <IconDownload size={14} />
            <span className="download-label">Download</span>
          </button>
        ) : null}
      </article>
    )
  }

  // Grid view
  return (
    <article
      className="file-card"
      tabIndex={0}
      onClick={() => isSelecting && onSelect(resource)}
      style={{
        cursor: isSelecting ? 'pointer' : undefined,
        border: isSelected ? '2px solid var(--master)' : '1px solid var(--border)',
        background: isSelected ? 'var(--master-light)' : undefined,
        position: 'relative',
      }}
    >
      {isSelecting && isMaster && (
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(resource)}
          onClick={e => e.stopPropagation()}
          style={{
            position: 'absolute', top: 10, right: 10,
            width: 16, height: 16, cursor: 'pointer', accentColor: 'var(--master)',
          }}
        />
      )}

      <div className="card-top" style={{ paddingRight: isSelecting ? 24 : 0 }}>
        <span className="badge" style={{ background: c.bg, color: c.text }}>
          {resource.type === NO_TYPE ? 'No type' : resource.type}
        </span>
        {isMaster && (
          <span
            className="badge"
            style={{
              background: isDraft ? 'var(--amber-bg)' : 'var(--success-light)',
              color: isDraft ? 'var(--amber-text)' : 'var(--success)',
            }}
          >
            {isDraft ? 'Draft' : 'Public'}
          </span>
        )}
      </div>

      <div>
        {isMaster && !isSelecting
          ? <EditableTitle resource={resource} onRenameTitle={onRenameTitle} />
          : <div className="card-title">{resource.title}</div>
        }
        <div className="card-meta">
          <span>{resource.subject === NO_SUBJECT ? 'No subject' : resource.subject}</span>
          <span className="meta-dot"></span>
          <span>{resource.size}</span>
          <span className="meta-dot"></span>
          <span>{resource.format}</span>
        </div>
      </div>

      <div className="card-footer">
        {isMaster && !isSelecting ? (
          <div className="card-actions">
            <button
              className="btn-icon"
              onClick={() => onToggleStatus(resource)}
              title={isDraft ? 'Publish' : 'Unpublish'}
              style={{ color: isDraft ? 'var(--success)' : 'var(--amber-text)' }}
            >
              {isDraft ? <IconEye size={15} /> : <IconEyeOff size={15} />}
            </button>
            <button className="btn-icon btn-icon-edit" onClick={() => onEdit(resource)} title="Edit">
              <IconPencil size={15} />
            </button>
            <button className="btn-icon btn-icon-del" onClick={() => onDelete(resource)} title="Delete">
              <IconTrash size={15} />
            </button>
          </div>
        ) : !isMaster ? (
          <button className="btn-download" onClick={() => onDownload(resource)}>
            <IconDownload size={14} /> Download
          </button>
        ) : null}
      </div>
    </article>
  )
}