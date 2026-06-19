import { useMemo } from 'react'
import { getSubjects, type Resource } from '../types'

interface SidebarProps {
  resources: Resource[]
  activeSubject: string
  onSubjectChange: (subject: string) => void
}

export default function Sidebar({
  resources,
  activeSubject,
  onSubjectChange,
}: SidebarProps) {
  const subjects = useMemo(() => getSubjects(resources), [resources])

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
        {subjects.map(subject => (
          <button
            key={subject}
            className={`subject-btn ${activeSubject === subject ? 'active' : ''}`}
            onClick={() => onSubjectChange(subject)}
          >
            {subject}
            <span className="count">{countFor(subject)}</span>
          </button>
        ))}
        {subjects.length === 0 && (
          <p style={{ fontSize: 13, color: 'var(--muted)', padding: '4px 10px' }}>
            No subjects yet.
          </p>
        )}
      </div>
    </aside>
  )
}