export interface Resource {
  id: number
  title: string
  subject: string
  type: 'Module' | 'Exercise'
  format: string
  size: string
  downloads: number
  file_path: string | null
  created_at?: string
}

export const SUBJECTS = [
  'Mathematics',
  'Science',
  'English',
  'History',
  'Filipino',
  'TLE',
  'MAPEH',
] as const

export const typeColors: Record<Resource['type'], { bg: string; text: string; icon: string }> = {
  Module:   { bg: 'var(--purple-bg)', text: 'var(--purple-text)', icon: 'ti-file-text' },
  Exercise: { bg: 'var(--teal-bg)',   text: 'var(--teal-text)',   icon: 'ti-pencil' },
}