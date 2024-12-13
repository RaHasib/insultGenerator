import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Loader2, Wand2 } from "lucide-react"
import { generateInsult } from "@/services/api"
import { useToast } from "@/hooks/use-toast"
import confetti from 'canvas-confetti'

interface InsultCardProps {
  language: string;
  onNewInsult: (insult: string) => void;
}

 function InsultCard({ language, onNewInsult }: InsultCardProps) {
  const [insult, setInsult] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const triggerConfetti = () => {
    // Angry burst from left
    confetti({
      particleCount: 40,
      spread: 55,
      origin: { x: 0.1, y: 0.6 },
      colors: ['#800000', '#8B0000', '#B22222', '#DC143C'], 
      angle: 60,
      gravity: 1.2,
      startVelocity: 45,
      decay: 0.8,
    });

    // Angry burst from right
    setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 55,
        origin: { x: 0.9, y: 0.6 },
        colors: ['#8B0000', '#B22222', '#DC143C', '#A40000'],
        angle: 120,
        gravity: 1.2,
        startVelocity: 45,
        decay: 0.8,
      });
    }, 200);

    // Explosive burst from center
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { x: 0.5, y: 0.7 },
        colors: ['#800000', '#A40000', '#B22222', '#8B0000'], 
        gravity: 1.2,
        startVelocity: 50,
        decay: 0.8,
        ticks: 200
      });
    }, 400);
  }

  const handleGenerateInsult = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await generateInsult(language)
      
      if (!response) {
        throw new Error('Received empty response')
      }

      setInsult(response)
      onNewInsult(response)
      triggerConfetti() 
      
    } catch (error: unknown) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to generate insult'
      
      console.error('Failed to generate insult:', error)
      setError(errorMessage)
      
      toast({
        variant: "destructive",
        title: "Error",
        description: `${errorMessage}. Please try again.`,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopyInsult = () => {
    if (!insult) return

    try {
      navigator.clipboard.writeText(insult)
      toast({
        title: "Copied!",
        description: "Insult copied to clipboard",
      })
    } catch (error) {
      console.error('Failed to copy:', error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to copy to clipboard",
      })
    }
  }

  return (
    <Card className="w-full bg-white/5 backdrop-blur-md border-0 shadow-2xl">
      <CardHeader className="space-y-1 px-6 pt-8">
        <CardTitle className="text-2xl font-light tracking-tight text-center text-white">
          Generate Your Insult
        </CardTitle>
        <p className="text-sm text-zinc-400 text-center">
          Press generate to create a witty insult
        </p>
      </CardHeader>

      <CardContent className="px-6 py-8">
        <div className="min-h-32 rounded-lg bg-zinc-900/50 p-8 flex items-center justify-center backdrop-blur-sm">
          <p className="text-xl font-light text-zinc-300">
            {insult || "Your insult will appear here..."}
          </p>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-6 pb-8">
        <Button 
          size="lg"
          className="bg-white text-black hover:bg-white/90 transition-all"
          onClick={handleGenerateInsult}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 custom-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          Generate
        </Button>
        <Button 
          variant="ghost" 
          size="lg"
          className="bg-zinc-900/50 text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition-all"
          onClick={handleCopyInsult}
          disabled={!insult || isLoading}
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy
        </Button>
      </CardFooter>
    </Card>
  )
} 

export default InsultCard;