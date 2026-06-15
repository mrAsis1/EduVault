import { IconUpload } from '@tabler/icons-react'

interface ToolbarProps {
  count: number
  isMaster: boolean
  onUploadClick: () => void
}

export default function Toolbar({ count, isMaster, onUploadClick }: ToolbarProps) {
  return (
    <>
      <div className="toolbar">
        <div style={{ flex: 1 }} />
        {isMaster && (
          <button className="btn btn-master" onClick={onUploadClick}>
            <IconUpload size={16} /> Upload
          </button>
        )}
      </div>
      <div className="results-label">
        Showing <span>{count}</span> resources
      </div>
    </>
  )
}