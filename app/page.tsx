import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-black pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5">
        <span className="text-xl font-bold tracking-tight">Time<span className="text-purple-400">Echo</span></span>
        <Link href="/upload" className="text-sm bg-purple-600 hover:bg-purple-500 transition px-4 py-2 rounded-lg font-medium">
          Try Free →
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-20">
        <div className="inline-flex items-center gap-2 text-xs text-purple-300 border border-purple-800/50 rounded-full px-4 py-1.5 mb-8 bg-purple-950/30">
          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
          MVP · Free · No signup needed
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Relive your<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">memories</span>
          <br />in 5 seconds
        </h1>
        <p className="text-lg text-white/50 max-w-lg mb-10">
          Upload a photo. Our AI detects the scene and transforms it into a 5-second living memory with ambient sound.
        </p>
        <Link href="/upload" className="bg-purple-600 hover:bg-purple-500 active:scale-95 transition-all px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-purple-900/40">
          Try It Free →
        </Link>
        <p className="mt-4 text-xs text-white/20">No account required · Free forever</p>
      </section>

      {/* Feature cards */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-28 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: '📸', title: 'Upload Any Photo', desc: 'JPEG, PNG or WebP. Any scene — beach, city, nature, indoors.' },
          { icon: '✨', title: 'AI Brings It to Life', desc: 'Scene detection maps your photo to a matching 5-sec animation + ambient sound.' },
          { icon: '⬇️', title: 'Download & Keep', desc: 'Get your living memory as an MP4. Share anywhere.' },
        ].map(card => (
          <div key={card.title} className="border border-white/5 bg-white/3 rounded-2xl p-6 backdrop-blur">
            <div className="text-3xl mb-3">{card.icon}</div>
            <h3 className="font-bold mb-2">{card.title}</h3>
            <p className="text-sm text-white/40">{card.desc}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
