import { IconFolderOff } from '@tabler/icons-react'
import FileCard from './FileCard'
import type { Resource } from '../types'

interface FileGridProps {
  resources: Resource[]
  isMaster: boolean
  isSelecting: boolean
  selectedIds: Set<number>
  onSelect: (resource: Resource) => void
  onDownload: (resource: Resource) => void
  onEdit: (resource: Resource) => void
  onDelete: (resource: Resource) => void
  onToggleStatus: (resource: Resource) => void
}

export default function FileGrid({
  resources, isMaster, isSelecting, selectedIds,
  onSelect, onDownload, onEdit, onDelete, onToggleStatus,
}: FileGridProps) {
  if (!resources.length) {
    return (
      <div className="empty-state" style={{ display: 'block' }}>
        <IconFolderOff size={48} />
        <h3>No resources found</h3>
        <p>Try adjusting your filters or search query.</p>
      </div>
    )
  }

  return (
    <div className="file-grid">
      {resources.map(r => (
        <FileCard
          key={r.id}
          resource={r}
          isMaster={isMaster}
          isSelecting={isSelecting}
          isSelected={selectedIds.has(r.id)}
          onSelect={onSelect}
          onDownload={onDownload}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  )
}