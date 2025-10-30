import { MessageSquareHeart } from "lucide-react"

export default function StickyConsultButton() {
  return (
    <a href="#consulta" className="fixed right-4 bottom-2 z-50 animate-bounce">
      <button className="bg-foreground new-button from-blush-400 to-blush-500 h-12 font-bold pulse">
       <MessageSquareHeart className="w-8 h-8 text-white" />
      </button>
    </a>
  )
}
