'use client'
import { useCallback, useState } from 'react'

interface Props { onFile: (file: File) => void; disabled?: boolean }

export default function UploadBox({ onFile, disabled }: Props) {
  const [preview, setPreview] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return
    setPreview(URL.createObjectURL(file))
    onFile(file)
  }, [onFile])

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  return (
    <label
      className={`relative flex flex-col items-center justify-center w-full min-h-64 rounded-2xl border-2 border-dashed cursor-pointer transition-all
        ${dragging ? 'border-purple-400 bg-purple-950/30' : 'border-white/10 bg-white/3 hover:border-purple-600/60 hover:bg-purple-950/20'}
        ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
      onDragOver={e => { e.preventDefault(); setDragging(true) }}
      onDragLeave={() => setDragging(false)}
      onDrop={onDrop}
    >
      <input type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }} disabled={disabled} />

      {preview ? (
        <img src={preview} alt="Preview" className="max-h-64 max-w-full rounded-xl object-contain" />
      ) : (
        <div className="flex flex-col items-center gap-3 p-8 text-center">
          <div className="text-5xl">📸</div>
          <p className="text-white/60 font-medium">Drop your photo here</p>
          <p className="text-white/30 text-sm">or click to browse</p>
          <span className="text-xs text-white/20 mt-2">JPEG · PNG · WebP · GIF</span>
        </div>
      )}
    </label>
  )
}
