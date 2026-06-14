import { IconTrash, IconTrashX } from '@tabler/icons-react'
import type { Resource } from '../types'

interface DeleteModalProps {
  resource: Resource | null
  onClose: () => void
  onConfirm: (resource: Resource) => Promise<void>
}

export default function DeleteModal({ resource, onClose, onConfirm }: DeleteModalProps) {
  if (!resource) return null

  return (
    <div className="modal-overlay open" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal modal-sm">
        <div className="confirm-center" style={{ padding: '8px 0' }}>
          <IconTrashX size={40} style={{ color: 'var(--danger)' }} />
          <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 18 }}>Delete this file?</h2>
          <p style={{ fontWeight: 500, color: 'var(--text)', marginTop: 4, marginBottom: 0 }}>{resource.title}</p>
          <p>Students will no longer be able to download it.</p>
        </div>
        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button
            className="btn"
            style={{ flex: 1, justifyContent: 'center', background: 'var(--danger)', color: '#fff', borderColor: 'var(--danger)' }}
            onClick={async () => { await onConfirm(resource); onClose() }}
          >
            <IconTrash size={16} /> Yes, delete
          </button>
        </div>
      </div>
    </div>
  )
}