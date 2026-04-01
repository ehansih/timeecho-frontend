'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Loader from '@/components/Loader'
import VideoPlayer from '@/components/VideoPlayer'
import DownloadButton from '@/components/DownloadButton'
import { getResult } from '@/lib/api'

export default function ResultPage() {
  const { id } = useParams<{ id: string }>()
  const [status, setStatus] = useState('queued')
  const [videoUrl, setVideoUrl] = useState('')
  const [scene, setScene] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return
    const poll = setInterval(async () => {
      try {
        const data = await getResult(id)
        setStatus(data.status)
        if (data.scene) setScene(data.scene)
        if (data.status === 'done') { setVideoUrl(data.video_url); clearInterval(poll) }
        if (data.status === 'error') { setError(data.error || 'Processing failed'); clearInterval(poll) }
      } catch { setError('Could not reach server'); clearInterval(poll) }
    }, 2000)
    return () => clearInterval(poll)
  }, [id])

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-black pointer-events-none" />

      <nav className="relative z-10 flex items-center px-8 py-6 border-b border-white/5">
        <a href="/" className="text-xl font-bold tracking-tight">Time<span className="text-purple-400">Echo</span></a>
      </nav>

      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-12 pb-20 text-center">
        {(status === 'queued' || status === 'processing') && (
          <>
            <h1 className="text-3xl font-black mb-2">Reviving your memory…</h1>
            <p className="text-white/40 mb-8">{scene ? `Scene detected: ${scene}` : 'Analysing your photo…'}</p>
            <Loader />
          </>
        )}

        {status === 'done' && videoUrl && (
          <>
            <h1 className="text-3xl font-black mb-2">Your memory is alive ✨</h1>
            {scene && <p className="text-purple-400 text-sm mb-6 uppercase tracking-widest">Scene: {scene}</p>}
            <VideoPlayer videoUrl={videoUrl} />
            <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
              <DownloadButton videoUrl={videoUrl} />
              <Link href="/upload" className="border border-white/10 hover:border-white/30 px-6 py-3 rounded-xl font-bold transition">
                Create Another
              </Link>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <p className="text-red-400 text-lg mb-4">⚠️ {error}</p>
            <Link href="/upload" className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl font-bold transition">
              Try Again
            </Link>
          </>
        )}
      </div>
    </main>
  )
}
