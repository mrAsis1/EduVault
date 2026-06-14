import { useCallback, useEffect, useState } from 'react'
import { supabase, BUCKET, TABLE } from '../lib/supabase'
import type { Resource } from '../types'

interface SaveInput {
  id?: number
  title: string
  subject: string
  type: Resource['type']
  format: string
  size: string
  file?: File | null
}

export function useResources() {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchResources = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      setError(error.message)
    } else {
      setResources(data as Resource[])
      setError(null)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchResources()
  }, [fetchResources])

  // Create or update a resource, optionally uploading a new file
  const saveResource = useCallback(async (input: SaveInput) => {
    let file_path: string | undefined

    if (input.file) {
      const path = `${input.subject}/${Date.now()}-${input.file.name}`

      const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .upload(path, input.file, { upsert: false })

      if (uploadError) throw uploadError
      file_path = path
    }

    if (input.id) {
      // Update existing
      const updatePayload: Partial<Resource> = {
        title: input.title,
        subject: input.subject,
        type: input.type,
        format: input.format,
        size: input.size,
      }
      if (file_path) updatePayload.file_path = file_path

      const { error } = await supabase
        .from(TABLE)
        .update(updatePayload)
        .eq('id', input.id)

      if (error) throw error
    } else {
      // Insert new
      const { error } = await supabase.from(TABLE).insert({
        title: input.title,
        subject: input.subject,
        type: input.type,
        format: input.format,
        size: input.size,
        downloads: 0,
        file_path: file_path ?? null,
      })

      if (error) throw error
    }

    await fetchResources()
  }, [fetchResources])

  // Download a file and increment its download count
  const downloadResource = useCallback(async (resource: Resource) => {
    if (!resource.file_path) {
      throw new Error('No file attached to this resource')
    }

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(resource.file_path)

    // Trigger browser download
    const link = document.createElement('a')
    link.href = data.publicUrl
    link.download = resource.title
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Increment download count
    const { error } = await supabase
      .from(TABLE)
      .update({ downloads: resource.downloads + 1 })
      .eq('id', resource.id)

    if (error) throw error

    setResources(prev =>
      prev.map(r => r.id === resource.id ? { ...r, downloads: r.downloads + 1 } : r)
    )
  }, [])

  // Delete a resource (and its file from storage, if any)
  const deleteResource = useCallback(async (resource: Resource) => {
    if (resource.file_path) {
      const { error: storageError } = await supabase.storage
        .from(BUCKET)
        .remove([resource.file_path])

      if (storageError) throw storageError
    }

    const { error } = await supabase.from(TABLE).delete().eq('id', resource.id)
    if (error) throw error

    setResources(prev => prev.filter(r => r.id !== resource.id))
  }, [])

  return {
    resources,
    loading,
    error,
    saveResource,
    downloadResource,
    deleteResource,
    refetch: fetchResources,
  }
}