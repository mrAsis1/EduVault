import { IconUpload, IconTrash, IconPencil, IconEye, IconEyeOff } from '@tabler/icons-react'

interface ToolbarProps {
  count: number
  isMaster: boolean
  isSelecting: boolean
  selectedCount: number
  allSelected: boolean
  activeType: string
  activeStatus: string
  onUploadClick: () => void
  onSelectToggle: () => void
  onSelectAll: () => void
  onBulkPublish: () => void
  onBulkDraft: () => void
  onBulkEdit: () => void
  onBulkDelete: () => void
  onTypeChange: (type: string) => void
  onStatusChange: (status: string) => void
}

const filterPill = (active: boolean) => ({
  padding: '5px 14px',
  borderRadius: 20,
  border: `1.5px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
  background: active ? 'var(--accent-light)' : 'transparent',
  color: active ? 'var(--accent-text)' : 'var(--muted)',
  fontFamily: 'Inter, sans-serif',
  fontSize: 13,
  fontWeight: active ? 600 : 400,
  cursor: 'pointer',
  transition: 'all 0.12s',
  whiteSpace: 'nowrap' as const,
})

export default function Toolbar({
  count, isMaster, isSelecting, selectedCount, allSelected,
  activeType, activeStatus,
  onUploadClick, onSelectToggle, onSelectAll,
  onBulkPublish, onBulkDraft, onBulkEdit, onBulkDelete,
  onTypeChange, onStatusChange,
}: ToolbarProps) {
  return (
    <>
      {/* Action row */}
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

      {/* Bulk action bar */}
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
          >
            <IconEye size={14} /> Public
          </button>
          <button
            className="btn btn-ghost btn-sm"
            onClick={onBulkDraft}
            disabled={selectedCount === 0}
            style={{ color: 'var(--amber-text)', borderColor: 'var(--amber-text)' }}
          >
            <IconEyeOff size={14} /> Draft
          </button>
          <button
            className="btn btn-ghost btn-sm"
            onClick={onBulkEdit}
            disabled={selectedCount === 0}
            style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}
          >
            <IconPencil size={14} /> Edit
          </button>
          <button
            className="btn btn-ghost btn-sm"
            onClick={onBulkDelete}
            disabled={selectedCount === 0}
            style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }}
          >
            <IconTrash size={14} /> Delete
          </button>
        </div>
      )}

      {/* Filter bar */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 8,
        padding: '10px 14px', background: 'var(--surface)',
        border: '1px solid var(--border)', borderRadius: 'var(--radius)',
        marginBottom: 14,
      }}>
        {/* Type row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)', marginRight: 4, flexShrink: 0 }}>
            Type
          </span>
          {['All', 'Module', 'Exercise'].map(t => (
            <button
              key={t}
              style={filterPill(activeType === t)}
              onClick={() => onTypeChange(t)}
            >
              {t === 'All' ? 'All types' : t}
            </button>
          ))}
        </div>

        {/* Status row — master only */}
        {isMaster && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted)', marginRight: 4, flexShrink: 0 }}>
              Status
            </span>
            {[
              { value: 'All', label: 'All' },
              { value: 'draft', label: 'Draft' },
              { value: 'public', label: 'Public' },
            ].map(s => (
              <button
                key={s.value}
                style={filterPill(activeStatus === s.value)}
                onClick={() => onStatusChange(s.value)}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="results-label">
        Showing <span>{count}</span> resources
      </div>
    </>
  )
}