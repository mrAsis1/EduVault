import { useState } from 'react'
import { IconEye, IconEyeOff, IconLock } from '@tabler/icons-react'

interface PasswordModalProps {
  open: boolean
  onClose: () => void
  onSuccess: () => void
}

const MASTER_PASSWORD = import.meta.env.VITE_MASTER_PASSWORD || 'admin123'

export default function PasswordModal({ open, onClose, onSuccess }: PasswordModalProps) {
  const [value, setValue] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [showError, setShowError] = useState(false)

  if (!open) return null

  const handleSubmit = () => {
    if (value === MASTER_PASSWORD) {
      setValue('')
      setShowError(false)
      onSuccess()
    } else {
      setShowError(true)
    }
  }

  return (
    <div className="modal-overlay open" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal modal-sm">
        <div className="modal-header">
          <h2><IconLock size={18} style={{ verticalAlign: '-3px', marginRight: 6 }} /> Master login</h2>
        </div>
        <div className="form-group">
          <label htmlFor="pw-input">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              id="pw-input"
              type={showPw ? 'text' : 'password'}
              value={value}
              onChange={e => setValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPw(s => !s)}
              style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {showPw ? <IconEyeOff size={16} /> : <IconEye size={16} />}
            </button>
          </div>
          {showError && (
            <p style={{ color: 'var(--danger)', fontSize: 13, marginTop: 6 }}>Incorrect password.</p>
          )}
        </div>
        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-master" onClick={handleSubmit}>Enter</button>
        </div>
      </div>
    </div>
  )
}