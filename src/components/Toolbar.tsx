import { IconSearch, IconUpload } from '@tabler/icons-react'

interface ToolbarProps {
  search: string
  onSearchChange: (value: string) => void
  count: number
  isMaster: boolean
  onUploadClick: () => void
}

export default function Toolbar({ search, onSearchChange, count, isMaster, onUploadClick }: ToolbarProps) {
  return (
    <>
      <div className="toolbar">
        <div className="search-wrap">
          <IconSearch size={16} />
          <input
            type="text"
            placeholder="Search by title, subject, or format..."
            value={search}
            onChange={e => onSearchChange(e.target.value)}
          />
        </div>
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