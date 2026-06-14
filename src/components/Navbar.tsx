import { IconCrown } from '@tabler/icons-react'

interface NavbarProps {
  isMaster: boolean
  onMasterClick: () => void
  onExitMaster: () => void
}

export default function Navbar({ isMaster, onMasterClick, onExitMaster }: NavbarProps) {
  return (
    <nav>
      <div className="nav-inner">
        <a href="/" className="logo">
          <i className="ti ti-school" aria-hidden="true"></i> EduVault
        </a>
        <div className="nav-right">
          {isMaster && (
            <span className="master-badge visible">
              <IconCrown size={14} /> Master mode
            </span>
          )}
          {isMaster ? (
            <button className="btn btn-ghost btn-sm" onClick={onExitMaster}>
              Exit master
            </button>
          ) : (
            <button className="btn btn-ghost btn-sm" onClick={onMasterClick}>
              Master
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}