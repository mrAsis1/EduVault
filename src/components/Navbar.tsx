import { IconCrown, IconSun, IconMoon } from '@tabler/icons-react'

interface NavbarProps {
  isMaster: boolean
  theme: 'light' | 'dark'
  onMasterClick: () => void
  onExitMaster: () => void
  onToggleTheme: () => void
}

export default function Navbar({ isMaster, theme, onMasterClick, onExitMaster, onToggleTheme }: NavbarProps) {
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
          <button
            className="btn-theme-toggle"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  )
}