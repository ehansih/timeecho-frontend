'use client'
interface Props { videoUrl: string }

export default function VideoPlayer({ videoUrl }: Props) {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 bg-black">
      <video
        src={videoUrl}
        autoPlay
        loop
        controls
        playsInline
        className="w-full aspect-video object-cover"
      />
    </div>
  )
}
