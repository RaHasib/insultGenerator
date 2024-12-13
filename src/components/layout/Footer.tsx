import { Linkedin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-6">
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/raisul-amin-hasib/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-zinc-400 flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by{" "}
            <a 
              href="https://www.raisulhasib.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Raisul Amin Hasib
            </a>
          </p>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Insult Generator. For entertainment purposes only.
          </p>
          <p className="text-xs text-zinc-600">
            Powered by{" "}
            <a 
              href="https://evilinsult.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Evil Insult Generator API
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
} 