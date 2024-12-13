import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="min-h-screen bg-[#0A0118] overflow-hidden">
      <div className="fixed inset-0 bg-gradient-radial from-purple-900/5 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1528_0.5px,transparent_1px),linear-gradient(to_bottom,#1a1528_0.5px,transparent_1px)] bg-[size:2rem_2rem] opacity-25" />
      <div className="fixed -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-purple-500/5 blur-[128px] animate-blob" />
      <div className="fixed -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-500/5 blur-[128px] animate-blob animation-delay-2000" />
      <div className="fixed -top-1/2 -left-1/3 w-[800px] h-[800px] rounded-full bg-violet-500/5 blur-[128px] animate-blob animation-delay-4000" />
      <div className="fixed inset-0">
        <div className="absolute top-[4rem] left-[6rem] w-8 h-8 animate-grid-cell-1 bg-purple-500/30" />
        <div className="absolute top-[12rem] left-[18rem] w-8 h-8 animate-grid-cell-2 bg-blue-500/30" />
        <div className="absolute top-[8rem] left-[28rem] w-8 h-8 animate-grid-cell-3 bg-cyan-500/30" />
        <div className="absolute top-[16rem] left-[12rem] w-8 h-8 animate-grid-cell-4 bg-pink-500/30" />
        <div className="absolute top-[10rem] right-[16rem] w-8 h-8 animate-grid-cell-2 bg-yellow-500/30" />
        <div className="absolute top-[22rem] right-[24rem] w-8 h-8 animate-grid-cell-3 bg-green-500/30" />
        <div className="absolute top-[6rem] right-[8rem] w-8 h-8 animate-grid-cell-4 bg-indigo-500/30" />
        <div className="absolute top-[18rem] right-[32rem] w-8 h-8 animate-grid-cell-1 bg-rose-500/30" />
        <div className="absolute bottom-[8rem] left-[24rem] w-8 h-8 animate-grid-cell-3 bg-purple-500/30" />
        <div className="absolute bottom-[12rem] right-[18rem] w-8 h-8 animate-grid-cell-4 bg-blue-500/30" />
        <div className="absolute bottom-[16rem] left-[36rem] w-8 h-8 animate-grid-cell-1 bg-cyan-500/30" />
        <div className="absolute bottom-[20rem] right-[28rem] w-8 h-8 animate-grid-cell-2 bg-pink-500/30" />
        <div className="absolute top-[5rem] right-[42rem] w-8 h-8 animate-grid-cell-1 bg-violet-500/30" />
        <div className="absolute top-[15rem] right-[38rem] w-8 h-8 animate-grid-cell-2 bg-fuchsia-500/30" />
        <div className="absolute bottom-[24rem] right-[12rem] w-8 h-8 animate-grid-cell-3 bg-purple-500/30" />
        <div className="absolute bottom-[28rem] right-[36rem] w-8 h-8 animate-grid-cell-4 bg-indigo-500/30" />
        <div className="absolute bottom-[6rem] right-[44rem] w-8 h-8 animate-grid-cell-2 bg-rose-500/30" />
        <div className="absolute top-[28rem] right-[20rem] w-8 h-8 animate-grid-cell-3 bg-blue-500/30" />
        <div className="absolute top-[14rem] right-[26rem] w-6 h-6 animate-grid-cell-1 bg-purple-500/20" />
        <div className="absolute bottom-[18rem] right-[40rem] w-6 h-6 animate-grid-cell-4 bg-cyan-500/20" />
        <div className="absolute top-[24rem] right-[46rem] w-6 h-6 animate-grid-cell-2 bg-pink-500/20" />
        <div className="absolute top-[20rem] left-[45rem] w-12 h-12 border border-purple-500/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-[15rem] right-[35rem] w-10 h-10 border border-blue-500/20 rounded-full animate-spin-slow animation-delay-2000" />
        <div className="absolute top-[25rem] right-[25rem] w-8 h-8 border border-violet-500/20 rounded-full animate-spin-slow animation-delay-4000" />
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-24 md:py-32 grid gap-24">
        {children}
      </div>
    </main>
  )
}