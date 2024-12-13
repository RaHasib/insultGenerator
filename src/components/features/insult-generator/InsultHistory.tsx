import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { languages } from "@/config/languages"

interface InsultHistoryProps {
  language: string;
  onLanguageChange: (value: string) => void;
  history: string[];
}

 function InsultHistory({ language, onLanguageChange, history }: InsultHistoryProps) {
  const truncateText = (text: string, maxLength: number = 100) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
  }

  return (
    <Card className="w-full bg-white/5 backdrop-blur-md border-0 shadow-2xl">
      <CardHeader className="space-y-1 px-6 pt-6">
        <CardTitle className="text-lg font-light tracking-tight text-white">
          Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-6">
        {/* Language Selection */}
        <div className="space-y-3">
          <label className="text-sm text-zinc-400">Select Language</label>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger className="w-full bg-zinc-900/50 border-0 text-white">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700">
              {languages.map(lang => (
                <SelectItem 
                  key={lang.value} 
                  value={lang.value}
                  className="text-white hover:bg-zinc-700 focus:bg-zinc-700 focus:text-white"
                >
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* History Section */}
        <div className="space-y-3">
          <h3 className="text-sm text-zinc-400">Recent Insults</h3>
          <ScrollArea className="h-[300px]">
            <div className="space-y-2">
              {history.length > 0 ? (
                history.map((insult, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-lg bg-zinc-900/50 text-sm text-zinc-300 font-light hover:bg-zinc-900/70 transition-colors"
                    title={insult}
                  >
                    {truncateText(insult)}
                  </div>
                ))
              ) : (
                <div className="p-3 rounded-lg bg-zinc-900/50 text-sm text-zinc-300 font-light">
                  No insults generated yet...
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
} 

export default InsultHistory;