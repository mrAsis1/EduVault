import { useMemo } from 'react'
import { getSubjects, type Resource } from '../types'

interface SidebarProps {
  resources: Resource[]
  isMaster: boolean
  activeSubject: string
  activeType: string
  activeStatus: string
  onSubjectChange: (subject: string) => void
  onTypeChange: (type: string) => void
  onStatusChange: (status: string) => void
}

export default function Sidebar({
  resources, isMaster,
  activeSubject, activeType, activeStatus,
  onSubjectChange, onTypeChange, onStatusChange,
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

      {isMaster && (
        <div className="sidebar-section">
          <div className="sidebar-title">Status</div>
          <div className="type-filter">
            <button
              className={`type-btn ${activeStatus === 'All' ? 'active' : ''}`}
              onClick={() => onStatusChange('All')}
            >
              <span className="dot" style={{ background: 'var(--muted)' }}></span> All
            </button>
            <button
              className={`type-btn ${activeStatus === 'draft' ? 'active' : ''}`}
              onClick={() => onStatusChange('draft')}
            >
              <span className="dot" style={{ background: 'var(--amber-text)' }}></span> Draft
            </button>
            <button
              className={`type-btn ${activeStatus === 'public' ? 'active' : ''}`}
              onClick={() => onStatusChange('public')}
            >
              <span className="dot" style={{ background: 'var(--success)' }}></span> Public
            </button>
          </div>
        </div>
      )}
    </aside>
  )
}