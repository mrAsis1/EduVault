import { IconUpload, IconTrash, IconPencil, IconEye, IconEyeOff } from '@tabler/icons-react'

interface ToolbarProps {
  count: number
  isMaster: boolean
  isSelecting: boolean
  selectedCount: number
  allSelected: boolean
  onUploadClick: () => void
  onSelectToggle: () => void
  onSelectAll: () => void
  onBulkPublish: () => void
  onBulkDraft: () => void
  onBulkEdit: () => void
  onBulkDelete: () => void
}

export default function Toolbar({
  count, isMaster, isSelecting, selectedCount, allSelected,
  onUploadClick, onSelectToggle, onSelectAll,
  onBulkPublish, onBulkDraft, onBulkEdit, onBulkDelete,
}: ToolbarProps) {
  return (
    <>
      <div className="toolbar">
        <div style={{ flex: 1 }} />
        {isMaster && !isSelecting && (
          <>
            <button className="btn btn-ghost btn-sm" onClick={onSelectToggle}>
              Select
            </button>
            <button className="btn btn-master" onClick={onUploadClick}>
              <IconUpload size={16} /> Upload
            </button>
          </>
        )}
        {isMaster && isSelecting && (
          <button className="btn btn-ghost btn-sm" onClick={onSelectToggle}>
            Cancel
          </button>
        )}
      </div>

      {isMaster && isSelecting && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
          padding: '10px 14px', background: 'var(--master-light)',
          border: '1px solid var(--border)', borderRadius: 'var(--radius)',
          marginBottom: 14,
        }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--master-text)', marginRight: 4 }}>
            {selectedCount} selected
          </span>

          <button className="btn btn-ghost btn-sm" onClick={onSelectAll}>
            {allSelected ? 'Deselect all' : 'Select all'}
          </button>

          <div style={{ flex: 1 }} />

          <button
            className="btn btn-ghost btn-sm"
            onClick={onBulkPublish}
            disabled={selectedCount === 0}
            style={{ color: 'var(--success)', borderColor: 'var(--success)' }}
            title="Set selected to Public"
          >
            <IconEye size={14} /> Public
          </button>
          <button
            className="btn btn-ghost btn-sm"
            onClick={onBulkDraft}
            disabled={selectedCount === 0}
            style={{ color: 'var(--amber-text)', borderColor: 'var(--amber-text)' }}
            title="Set selected to Draft"
          >
            <IconEyeOff size={14} /> Draft
          </button>
          <button
            className="btn btn-ghost btn-sm"
            onClick={onBulkEdit}
            disabled={selectedCount === 0}
            style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}
            title="Edit selected"
          >
            <IconPencil size={14} /> Edit
          </button>
          <button
            className="btn btn-ghost btn-sm"
            onClick={onBulkDelete}
            disabled={selectedCount === 0}
            style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }}
            title="Delete selected"
          >
            <IconTrash size={14} /> Delete
          </button>
        </div>
      )}

      <div className="results-label">
        Showing <span>{count}</span> resources
      </div>
    </>
  )
}