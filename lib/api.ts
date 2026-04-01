const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export async function uploadImage(file: File) {
  const form = new FormData()
  form.append('file', file)
  const res = await fetch(`${API_BASE}/upload-image`, { method: 'POST', body: form })
  if (!res.ok) throw new Error('Upload failed')
  return res.json()
}

export async function generateVideo(imageId: string) {
  const res = await fetch(`${API_BASE}/generate-video`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image_id: imageId })
  })
  if (!res.ok) throw new Error('Generation failed')
  return res.json()
}

export async function getResult(jobId: string) {
  const res = await fetch(`${API_BASE}/get-result/${jobId}`)
  if (!res.ok) throw new Error('Result fetch failed')
  return res.json()
}
