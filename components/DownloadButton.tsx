'use client'
interface Props { videoUrl: string; filename?: string }

export default function DownloadButton({ videoUrl, filename = 'timeecho-memory.mp4' }: Props) {
  const handleDownload = async () => {
    try {
      const res = await fetch(videoUrl)
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url; a.download = filename
      document.body.appendChild(a); a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch {
      window.open(videoUrl, '_blank')
    }
  }

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 active:scale-95 transition-all px-6 py-3 rounded-xl font-bold shadow-lg shadow-purple-900/40"
    >
      ⬇️ Download Memory
    </button>
  )
}
