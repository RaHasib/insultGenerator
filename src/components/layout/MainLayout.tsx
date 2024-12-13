import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f_0.5px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_0.5px,transparent_1px)] bg-[size:2rem_2rem] opacity-25" />
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
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-24 md:py-32 grid gap-24">
        {children}
      </div>
    </main>
  )
}