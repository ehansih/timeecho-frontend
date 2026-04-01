'use client'
import { useEffect, useState } from 'react'

interface Props { message?: string }

const MESSAGES = [
  'Analysing your memory…',
  'Detecting the scene…',
  'Selecting animation template…',
  'Adding ambient sound…',
  'Merging your living memory…',
  'Almost ready…',
]

export default function Loader({ message }: Props) {
  const [progress, setProgress] = useState(0)
  const [msgIdx, setMsgIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => Math.min(p + 2, 95))
      setMsgIdx(i => (i + 1) % MESSAGES.length)
    }, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-purple-900" />
        <div className="absolute inset-0 rounded-full border-4 border-purple-400 border-t-transparent animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-2xl">✨</div>
      </div>
      <div className="text-center">
        <p className="text-white font-semibold text-lg mb-1">{message || MESSAGES[msgIdx]}</p>
        <p className="text-white/30 text-sm">This takes about 5–15 seconds</p>
      </div>
      <div className="w-64 bg-white/10 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
