import { useMemo, useState, useEffect } from 'react'
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react'
import { type Resource } from '../types'
import type { DepartmentWithSubjects } from '../hooks/useDepartments'

interface SidebarProps {
  resources: Resource[]
  departments: DepartmentWithSubjects[]
  activeSubject: string
  onSubjectChange: (subject: string) => void
  scrollTargetRef: React.RefObject<HTMLDivElement | null>
}

const EXPANDED_KEY = 'eduvault-expanded-depts'

export default function Sidebar({
  resources,
  departments,
  activeSubject,
  onSubjectChange,
  scrollTargetRef,
}: SidebarProps) {
  const [expandedDepts, setExpandedDepts] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(EXPANDED_KEY)
      return stored ? new Set(JSON.parse(stored)) : new Set<string>()
    } catch {
      return new Set<string>()
    }
  })

  useEffect(() => {
    localStorage.setItem(EXPANDED_KEY, JSON.stringify([...expandedDepts]))
  }, [expandedDepts])

  const toggleDept = (name: string) => {
    setExpandedDepts(prev => {
      const next = new Set(prev)
      next.has(name) ? next.delete(name) : next.add(name)
      return next
    })
  }

  const scrollToTop = () => {
    if (scrollTargetRef.current) {
      const top =
        scrollTargetRef.current.getBoundingClientRect().top +
        window.scrollY - 56 - 8
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const handleSelect = (subject: string) => {
    onSubjectChange(subject)
    scrollToTop()
  }

  const countForSubject = (subject: string) =>
    resources.filter(r => r.subject === subject).length

  const countForDept = (dept: DepartmentWithSubjects) =>
    resources.filter(r => dept.subjects.includes(r.subject)).length

  // All dept subjects flattened
  const allDeptSubjects = useMemo(
    () => new Set(departments.flatMap(d => d.subjects)),
    [departments]
  )

  // Subjects in resources that don't belong to any department
  const ungroupedSubjects = useMemo(() => {
    const inResources = Array.from(
      new Set(resources.map(r => r.subject).filter(s => s && s !== 'NOSUBJECT'))
    ).sort()
    return inResources.filter(s => !allDeptSubjects.has(s))
  }, [resources, allDeptSubjects])

  // Only show depts that have subjects with resources
  const activeDepts = useMemo(() =>
    departments.filter(dept =>
      dept.subjects.some(s => resources.some(r => r.subject === s))
    ),
    [departments, resources]
  )

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-title">Subject</div>

        {/* All Subjects */}
        <button
          className={`subject-btn ${activeSubject === 'All' ? 'active' : ''}`}
          onClick={() => handleSelect('All')}
        >
          All Subjects
          <span className="count">{resources.length}</span>
        </button>

        {/* Departments */}
        {activeDepts.map(dept => {
          const isExpanded = expandedDepts.has(dept.name)
          const deptCount = countForDept(dept)
          const deptSubjects = dept.subjects.filter(s =>
            resources.some(r => r.subject === s)
          )
          const isDeptActive = activeSubject === `dept:${dept.name}`

          return (
            <div key={dept.id}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  className={`subject-btn dept-btn ${isDeptActive ? 'active' : ''}`}
                  onClick={() => handleSelect(`dept:${dept.name}`)}
                  style={{ flex: 1 }}
                >
                  <span>{dept.name}</span>
                  <span className="count">{deptCount}</span>
                </button>
                <button
                  onClick={() => toggleDept(dept.name)}
                  className="dept-chevron-btn"
                  title={isExpanded ? 'Collapse' : 'Expand'}
                >
                  {isExpanded
                    ? <IconChevronDown size={14} />
                    : <IconChevronRight size={14} />
                  }
                </button>
              </div>

              {/* Animated collapse */}
              <div
                style={{
                  overflow: 'hidden',
                  maxHeight: isExpanded ? `${deptSubjects.length * 60}px` : '0px',
                  transition: 'max-height 0.25s ease',
                }}
              >
                {deptSubjects.map(subject => (
                  <button
                    key={subject}
                    className={`subject-btn subject-child-btn ${activeSubject === subject ? 'active' : ''}`}
                    onClick={() => handleSelect(subject)}
                  >
                    <span style={{ flex: 1, textAlign: 'left' }}>{subject}</span>
                    <span className="count">{countForSubject(subject)}</span>
                  </button>
                ))}
              </div>
            </div>
          )
        })}

        {/* Ungrouped subjects */}
        {ungroupedSubjects.map(subject => (
          <button
            key={subject}
            className={`subject-btn ${activeSubject === subject ? 'active' : ''}`}
            onClick={() => handleSelect(subject)}
          >
            {subject}
            <span className="count">{countForSubject(subject)}</span>
          </button>
        ))}

        {resources.length === 0 && (
          <p style={{ fontSize: 13, color: 'var(--muted)', padding: '4px 10px' }}>
            No subjects yet.
          </p>
        )}
      </div>
    </aside>
  )
}