import MainLayout from "./components/layout/MainLayout"
import InsultCard from "./components/features/insult-generator/InsultCard"
import InsultHistory from "./components/features/insult-generator/InsultHistory"
import { Toaster } from "@/components/ui/toaster"
import { useState } from "react"
import { config } from '@/config'

 function App() {
  const [language, setLanguage] = useState<string>(config.app.defaultLanguage)
  const [history, setHistory] = useState<string[]>([])

  const handleNewInsult = (insult: string) => {
    setHistory(prev => [insult, ...prev].slice(0, config.app.maxHistory))
  }

  return (
    <MainLayout>
      <header className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white">
          Insult Generator
        </h1>
        <p className="text-lg text-zinc-400">
          Create witty and creative insults with a single click
        </p>
      </header>

      <div className="grid md:grid-cols-[1fr,auto] gap-8 max-w-6xl mx-auto w-full">
        <div className="w-full max-w-xl mx-auto md:mx-0">
          <InsultCard 
            language={language} 
            onNewInsult={handleNewInsult}
          />
        </div>
        <div className="w-full md:w-80">
          <InsultHistory
            language={language}
            onLanguageChange={setLanguage}
            history={history}
          />
        </div>
      </div>
      <Toaster />
    </MainLayout>
  )
}
export default App;