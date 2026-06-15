import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Toolbar from './components/Toolbar'
import FileGrid from './components/FileGrid'
import UploadModal from './components/UploadModal'
import DeleteModal from './components/DeleteModal'
import PasswordModal from './components/PasswordModal'
import Toast from './components/Toast'
import { useResources } from './hooks/useResources'
import type { Resource } from './types'

export default function App() {
  const { resources, loading, error, saveResource, downloadResource, deleteResource, toggleStatus } = useResources()

  const [isMaster, setIsMaster] = useState(false)
  const [activeSubject, setActiveSubject] = useState('All')
  const [activeType, setActiveType] = useState('All')

  const [pwModalOpen, setPwModalOpen] = useState(false)
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  const [editingResource, setEditingResource] = useState<Resource | null>(null)
  const [deletingResource, setDeletingResource] = useState<Resource | null>(null)

  const [toast, setToast] = useState({ message: '', isError: false, visible: false })

  const showToast = (message: string, isError = false) => {
    setToast({ message, isError, visible: true })
  }

  const visibleResources = useMemo(
    () => isMaster ? resources : resources.filter(r => r.status === 'public'),
    [resources, isMaster]
  )

  const filtered = useMemo(() => {
    return visibleResources.filter(r => {
      const ms = activeSubject === 'All' || r.subject === activeSubject
      const mt = activeType === 'All' || r.type === activeType
      return ms && mt
    })
  }, [visibleResources, activeSubject, activeType])

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

  const handleDelete = (resource: Resource) => {
    setDeletingResource(resource)
  }

  const handleConfirmDelete = async (resource: Resource) => {
    try {
      await deleteResource(resource)
      showToast(`"${resource.title}" deleted.`)
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

  return (
    <>
      <Navbar
        isMaster={isMaster}
        onMasterClick={() => setPwModalOpen(true)}
        onExitMaster={() => { setIsMaster(false); showToast('Exited master mode.') }}
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
          activeSubject={activeSubject}
          activeType={activeType}
          onSubjectChange={setActiveSubject}
          onTypeChange={setActiveType}
        />

        <div className="content">
          <Toolbar
            count={filtered.length}
            isMaster={isMaster}
            onUploadClick={() => { setEditingResource(null); setUploadModalOpen(true) }}
          />

          {loading ? (
            <p>Loading resources…</p>
          ) : error ? (
            <p style={{ color: 'var(--danger)' }}>Error: {error}</p>
          ) : (
            <FileGrid
              resources={filtered}
              isMaster={isMaster}
              onDownload={handleDownload}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggleStatus={handleToggleStatus}
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
          showToast('Master mode enabled — you can now upload, edit, and delete files.')
        }}
      />

      <UploadModal
        open={uploadModalOpen}
        resources={resources}
        editingResource={editingResource}
        onClose={() => { setUploadModalOpen(false); setEditingResource(null) }}
        onSave={handleSave}
      />

      <DeleteModal
        resource={deletingResource}
        onClose={() => setDeletingResource(null)}
        onConfirm={handleConfirmDelete}
      />

      <Toast
        message={toast.message}
        isError={toast.isError}
        visible={toast.visible}
        onHide={() => setToast(t => ({ ...t, visible: false }))}
      />
    </>
  )
}