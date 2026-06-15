export const NO_SUBJECT = 'NOSUBJECT'
export const NO_TYPE = 'NOTYPE'

export interface Resource {
  id: number
  title: string
  subject: string
  type: 'Module' | 'Exercise' | typeof NO_TYPE
  format: string
  size: string
  downloads: number
  file_path: string | null
  status: 'draft' | 'public'
  created_at?: string
}

export function getSubjects(resources: Resource[]): string[] {
  return Array.from(
    new Set(
      resources
        .map(r => r.subject.trim())
        .filter(s => s && s !== NO_SUBJECT)
    )
  ).sort()
}

export const typeColors: Record<Resource['type'], { bg: string; text: string; icon: string }> = {
  Module:   { bg: 'var(--purple-bg)', text: 'var(--purple-text)', icon: 'ti-file-text' },
  Exercise: { bg: 'var(--teal-bg)',   text: 'var(--teal-text)',   icon: 'ti-pencil' },
  [NO_TYPE]: { bg: 'var(--amber-bg)', text: 'var(--amber-text)', icon: 'ti-help' },
}