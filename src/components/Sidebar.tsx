import { useMemo } from 'react'
import { getSubjects, type Resource } from '../types'

interface SidebarProps {
  resources: Resource[]
  activeSubject: string
  onSubjectChange: (subject: string) => void
  scrollTargetRef: React.RefObject<HTMLDivElement | null>
}

export default function Sidebar({
  resources,
  activeSubject,
  onSubjectChange,
  scrollTargetRef,
}: SidebarProps) {
  const subjects = useMemo(() => getSubjects(resources), [resources])

  const countFor = (subject: string) =>
    subject === 'All' ? resources.length : resources.filter(r => r.subject === subject).length

  const handleSubjectChange = (subject: string) => {
    onSubjectChange(subject)
    if (scrollTargetRef.current) {
      const navHeight = 56 // matches your nav height in CSS
      const top =
        scrollTargetRef.current.getBoundingClientRect().top +
        window.scrollY -
        navHeight -
        8 // small breathing room
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-title">Subject</div>
        <button
          className={`subject-btn ${activeSubject === 'All' ? 'active' : ''}`}
          onClick={() => handleSubjectChange('All')}
        >
          All Subjects
          <span className="count">{countFor('All')}</span>
        </button>
        {subjects.map(subject => (
          <button
            key={subject}
            className={`subject-btn ${activeSubject === subject ? 'active' : ''}`}
            onClick={() => handleSubjectChange(subject)}
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