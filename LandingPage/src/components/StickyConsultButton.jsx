import { MessageSquareHeart } from "lucide-react"

export default function StickyConsultButton() {
  return (
    <a href="#consulta" className="fixed right-4 bottom-154 z-50 animate-bounce">
      <button className="bg-foreground new-button from-blush-400 to-blush-500 h-8 font-bold pulse">
       <MessageSquareHeart className="w-5 h-5 text-white" />
      </button>
    </a>
  )
}
