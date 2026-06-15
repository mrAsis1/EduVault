import { IconDownload, IconPencil, IconTrash } from '@tabler/icons-react'
import { typeColors, type Resource } from '../types'

interface FileCardProps {
  resource: Resource
  isMaster: boolean
  onDownload: (resource: Resource) => void
  onEdit: (resource: Resource) => void
  onDelete: (resource: Resource) => void
}

export default function FileCard({ resource, isMaster, onDownload, onEdit, onDelete }: FileCardProps) {
  const c = typeColors[resource.type]

  return (
    <article className="file-card" tabIndex={0}>
      <div className="card-top">
        <span className="badge" style={{ background: c.bg, color: c.text }}>{resource.type}</span>
      </div>
      <div>
        <div className="card-title">{resource.title}</div>
        <div className="card-meta">
          <span>{resource.subject}</span>
          <span className="meta-dot"></span>
          <span>{resource.size}</span>
          <span className="meta-dot"></span>
          <span>{resource.format}</span>
        </div>
      </div>
      <div className="card-footer">
        {isMaster ? (
          <div className="card-actions">
            <button className="btn-icon btn-icon-edit" onClick={() => onEdit(resource)} title="Edit">
              <IconPencil size={15} />
            </button>
            <button className="btn-icon btn-icon-del" onClick={() => onDelete(resource)} title="Delete">
              <IconTrash size={15} />
            </button>
          </div>
        ) : (
          <button className="btn-download" onClick={() => onDownload(resource)}>
            <IconDownload size={14} /> Download
          </button>
        )}
      </div>
    </article>
  )
}