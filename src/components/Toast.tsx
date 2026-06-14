import { useEffect } from 'react'
import { IconCircleCheck, IconAlertCircle } from '@tabler/icons-react'

interface ToastProps {
  message: string
  isError: boolean
  visible: boolean
  onHide: () => void
}

export default function Toast({ message, isError, visible, onHide }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onHide, 3500)
      return () => clearTimeout(timer)
    }
  }, [visible, onHide])

  return (
    <div className={`toast ${isError ? 'err' : ''} ${visible ? 'show' : ''}`} role="alert" aria-live="polite">
      {isError ? <IconAlertCircle size={18} /> : <IconCircleCheck size={18} />}
      <span>{message}</span>
    </div>
  )
}