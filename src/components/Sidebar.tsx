import { SUBJECTS, type Resource } from '../types'

interface SidebarProps {
  resources: Resource[]
  activeSubject: string
  activeType: string
  onSubjectChange: (subject: string) => void
  onTypeChange: (type: string) => void
}

export default function Sidebar({
  resources,
  activeSubject,
  activeType,
  onSubjectChange,
  onTypeChange,
}: SidebarProps) {
  const countFor = (subject: string) =>
    subject === 'All' ? resources.length : resources.filter(r => r.subject === subject).length

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-title">Subject</div>
        <button
          className={`subject-btn ${activeSubject === 'All' ? 'active' : ''}`}
          onClick={() => onSubjectChange('All')}
        >
          All Subjects
          <span className="count">{countFor('All')}</span>
        </button>
        {SUBJECTS.map(subject => (
          <button
            key={subject}
            className={`subject-btn ${activeSubject === subject ? 'active' : ''}`}
            onClick={() => onSubjectChange(subject)}
          >
            {subject}
            <span className="count">{countFor(subject)}</span>
          </button>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-title">File Type</div>
        <div className="type-filter">
          <button
            className={`type-btn ${activeType === 'All' ? 'active' : ''}`}
            onClick={() => onTypeChange('All')}
          >
            <span className="dot" style={{ background: 'var(--muted)' }}></span> All types
          </button>
          <button
            className={`type-btn ${activeType === 'Module' ? 'active' : ''}`}
            onClick={() => onTypeChange('Module')}
          >
            <span className="dot" style={{ background: 'var(--master)' }}></span> Modules
          </button>
          <button
            className={`type-btn ${activeType === 'Exercise' ? 'active' : ''}`}
            onClick={() => onTypeChange('Exercise')}
          >
            <span className="dot" style={{ background: 'var(--success)' }}></span> Exercises
          </button>
        </div>
      </div>
    </aside>
  )
}