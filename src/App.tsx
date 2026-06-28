import { useMemo, useRef, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Toolbar from './components/Toolbar'
import FileGrid from './components/FileGrid'
import UploadModal from './components/UploadModal'
import DeleteModal from './components/DeleteModal'
import BulkEditModal from './components/BulkEditModal'
import PasswordModal from './components/PasswordModal'
import DepartmentModal from './components/DepartmentModal'
import Toast from './components/Toast'
import { useResources } from './hooks/useResources'
import { useTheme } from './hooks/useTheme'
import { useDepartments } from './hooks/useDepartments'
import { getSubjects } from './types'
import type { Resource } from './types'

export default function App() {
  const {
    resources, loading, error,
    saveResource, bulkUpdate, bulkDelete,
    downloadResource, deleteResource, toggleStatus,
    renameTitle,
  } = useResources()

  const { theme, toggleTheme } = useTheme()

  const {
    departments,
    addDepartment, renameDepartment, deleteDepartment,
    addSubjectToDept, removeSubjectFromDept,
  } = useDepartments()

  const toolbarRef = useRef<HTMLDivElement>(null)

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isMaster, setIsMaster] = useState(false)
  const [activeSubject, setActiveSubject] = useState('All')
  const [activeType, setActiveType] = useState('All')
  const [activeStatus, setActiveStatus] = useState('All')

  const [isSelecting, setIsSelecting] = useState(false)
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())

  const [pwModalOpen, setPwModalOpen] = useState(false)
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  const [editingResource, setEditingResource] = useState<Resource | null>(null)
  const [deletingResource, setDeletingResource] = useState<Resource | null>(null)
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false)
  const [bulkEditOpen, setBulkEditOpen] = useState(false)
  const [deptModalOpen, setDeptModalOpen] = useState(false)

  const [toast, setToast] = useState({ message: '', isError: false, visible: false })
  const showToast = (message: string, isError = false) =>
    setToast({ message, isError, visible: true })

  const visibleResources = useMemo(
    () => isMaster ? resources : resources.filter(r => r.status === 'public'),
    [resources, isMaster]
  )

  const filtered = useMemo(() => visibleResources.filter(r => {
    let ms = true
    if (activeSubject === 'All') {
      ms = true
    } else if (activeSubject.startsWith('dept:')) {
      const deptName = activeSubject.replace('dept:', '')
      const dept = departments.find(d => d.name === deptName)
      ms = dept ? dept.subjects.includes(r.subject) : false
    } else {
      ms = r.subject === activeSubject
    }
    const mt = activeType === 'All' || r.type === activeType
    const mst = !isMaster || activeStatus === 'All' || r.status === activeStatus
    return ms && mt && mst
  }), [visibleResources, activeSubject, activeType, activeStatus, isMaster, departments])

  const existingSubjects = useMemo(() => getSubjects(resources), [resources])

  const handleSelectToggle = () => {
    setIsSelecting(s => !s)
    setSelectedIds(new Set())
  }

  const handleSelect = (resource: Resource) => {
    setSelectedIds(prev => {
      const next = new Set(prev)
      next.has(resource.id) ? next.delete(resource.id) : next.add(resource.id)
      return next
    })
  }

  const handleSelectAll = () => {
    if (selectedIds.size === filtered.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(filtered.map(r => r.id)))
    }
  }

  const handleBulkPublish = async () => {
    try {
      await bulkUpdate([...selectedIds], { status: 'public' })
      showToast(`${selectedIds.size} file(s) set to public.`)
      setSelectedIds(new Set())
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Failed', true)
    }
  }

  const handleBulkDraft = async () => {
    try {
      await bulkUpdate([...selectedIds], { status: 'draft' })
      showToast(`${selectedIds.size} file(s) set to draft.`)
      setSelectedIds(new Set())
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Failed', true)
    }
  }

  const handleBulkEditApply = async (patch: {
    subject?: string
    type?: Resource['type']
    status?: Resource['status']
  }) => {
    try {
      await bulkUpdate([...selectedIds], patch)
      showToast(`${selectedIds.size} file(s) updated.`)
      setSelectedIds(new Set())
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Failed', true)
      throw e
    }
  }

  const handleBulkDeleteConfirm = async () => {
    try {
      await bulkDelete([...selectedIds], resources)
      showToast(`${selectedIds.size} file(s) deleted.`)
      setSelectedIds(new Set())
      setIsSelecting(false)
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Failed', true)
    }
  }

  const handleDownload = async (resource: Resource) => {
    try {
      await downloadResource(resource)
      showToast(`Downloading "${resource.title}"…`)
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Download failed', true)
    }
  }

  const handleEdit = (resource: Resource) => {
    setEditingResource(resource)
    setUploadModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!deletingResource) return
    try {
      await deleteResource(deletingResource)
      showToast(`"${deletingResource.title}" deleted.`)
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Delete failed', true)
    }
  }

  const handleToggleStatus = async (resource: Resource) => {
    try {
      await toggleStatus(resource)
      showToast(
        resource.status === 'draft'
          ? `"${resource.title}" is now public.`
          : `"${resource.title}" set back to draft.`
      )
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Status update failed', true)
    }
  }

  const handleSave = async (input: Parameters<typeof saveResource>[0]) => {
    try {
      await saveResource(input)
      showToast(input.id ? `"${input.title}" updated.` : `"${input.title}" uploaded as draft.`)
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Save failed', true)
      throw e
    }
  }

  const handleRenameTitle = async (resource: Resource, newTitle: string) => {
    try {
      await renameTitle(resource, newTitle)
      showToast(`Renamed to "${newTitle}".`)
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Rename failed', true)
    }
  }

  return (
    <>
      <Navbar
        isMaster={isMaster}
        theme={theme}
        onMasterClick={() => setPwModalOpen(true)}
        onToggleTheme={toggleTheme}
        onExitMaster={() => {
          setIsMaster(false)
          setIsSelecting(false)
          setSelectedIds(new Set())
          showToast('Exited master mode.')
        }}
      />

      <div className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <div>
              <h1>School Resources</h1>
              <p>Browse, search, and download learning materials.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="page">
        <Sidebar
          resources={visibleResources}
          departments={departments}
          activeSubject={activeSubject}
          onSubjectChange={setActiveSubject}
          scrollTargetRef={toolbarRef}
        />

        <div className="content">
          <div ref={toolbarRef} />
          <Toolbar
            count={filtered.length}
            isMaster={isMaster}
            isSelecting={isSelecting}
            selectedCount={selectedIds.size}
            allSelected={filtered.length > 0 && selectedIds.size === filtered.length}
            activeType={activeType}
            activeStatus={activeStatus}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onUploadClick={() => { setEditingResource(null); setUploadModalOpen(true) }}
            onSelectToggle={handleSelectToggle}
            onSelectAll={handleSelectAll}
            onBulkPublish={handleBulkPublish}
            onBulkDraft={handleBulkDraft}
            onBulkEdit={() => setBulkEditOpen(true)}
            onBulkDelete={() => setBulkDeleteOpen(true)}
            onTypeChange={setActiveType}
            onStatusChange={setActiveStatus}
            onManageDepts={isMaster ? () => setDeptModalOpen(true) : undefined}
          />

          {loading ? (
            <p>Loading resources…</p>
          ) : error ? (
            <p style={{ color: 'var(--danger)' }}>Error: {error}</p>
          ) : (
            <FileGrid
              resources={filtered}
              viewMode={viewMode}
              isMaster={isMaster}
              isSelecting={isSelecting}
              selectedIds={selectedIds}
              onSelect={handleSelect}
              onDownload={handleDownload}
              onEdit={handleEdit}
              onDelete={r => setDeletingResource(r)}
              onToggleStatus={handleToggleStatus}
              onRenameTitle={handleRenameTitle}
            />
          )}
        </div>
      </div>

      <PasswordModal
        open={pwModalOpen}
        onClose={() => setPwModalOpen(false)}
        onSuccess={() => {
          setIsMaster(true)
          setPwModalOpen(false)
          showToast('Master mode enabled.')
        }}
      />

      <UploadModal
        open={uploadModalOpen}
        resources={resources}
        editingResource={editingResource}
        departments={departments}
        onClose={() => { setUploadModalOpen(false); setEditingResource(null) }}
        onSave={handleSave}
      />

      <DeleteModal
        resource={deletingResource}
        onClose={() => setDeletingResource(null)}
        onConfirm={handleConfirmDelete}
      />

      <DeleteModal
        open={bulkDeleteOpen}
        resource={null}
        bulkCount={selectedIds.size}
        onClose={() => setBulkDeleteOpen(false)}
        onConfirm={handleBulkDeleteConfirm}
      />

      <BulkEditModal
        open={bulkEditOpen}
        count={selectedIds.size}
        existingSubjects={existingSubjects}
        onClose={() => setBulkEditOpen(false)}
        onApply={handleBulkEditApply}
      />

      <DepartmentModal
        open={deptModalOpen}
        departments={departments}
        existingSubjects={existingSubjects}
        onClose={() => setDeptModalOpen(false)}
        onAddDepartment={async name => {
          await addDepartment(name)
          showToast(`Department "${name}" added.`)
        }}
        onRenameDepartment={async (id, name) => {
          await renameDepartment(id, name)
          showToast(`Renamed to "${name}".`)
        }}
        onDeleteDepartment={async id => {
          await deleteDepartment(id)
          showToast('Department deleted.')
        }}
        onAddSubject={async (deptId, subject) => {
          await addSubjectToDept(deptId, subject)
          showToast(`"${subject}" added.`)
        }}
        onRemoveSubject={async (deptId, subject) => {
          await removeSubjectFromDept(deptId, subject)
          showToast(`"${subject}" removed.`)
        }}
      />

      <Toast
        message={toast.message}
        isError={toast.isError}
        visible={toast.visible}
        onHide={() => setToast(t => ({ ...t, visible: false }))}
      />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
