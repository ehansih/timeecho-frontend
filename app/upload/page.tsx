'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import UploadBox from '@/components/UploadBox'
import Loader from '@/components/Loader'
import { uploadImage, generateVideo } from '@/lib/api'

type Stage = 'idle' | 'uploading' | 'generating' | 'error'

export default function UploadPage() {
  const router = useRouter()
  const [stage, setStage] = useState<Stage>('idle')
  const [error, setError] = useState('')

  const handleFile = async (file: File) => {
    try {
      setStage('uploading')
      const { image_id } = await uploadImage(file)
      setStage('generating')
      const { job_id } = await generateVideo(image_id)
      router.push(`/result/${job_id}`)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
      setStage('error')
    }
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-black pointer-events-none" />

      <nav className="relative z-10 flex items-center px-8 py-6 border-b border-white/5">
        <a href="/" className="text-xl font-bold tracking-tight">Time<span className="text-purple-400">Echo</span></a>
      </nav>

      <div className="relative z-10 max-w-xl mx-auto px-6 pt-16 pb-20">
        <h1 className="text-3xl font-black mb-2">Upload your photo</h1>
        <p className="text-white/40 mb-8">We'll turn it into a 5-second living memory.</p>

        {stage === 'idle' && <UploadBox onFile={handleFile} />}

        {(stage === 'uploading') && <Loader message="Uploading your photo…" />}
        {(stage === 'generating') && <Loader message="Reviving your memory…" />}

        {stage === 'error' && (
          <div className="text-center py-12">
            <p className="text-red-400 mb-4">⚠️ {error}</p>
            <button onClick={() => setStage('idle')} className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl font-bold transition">
              Try Again
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
