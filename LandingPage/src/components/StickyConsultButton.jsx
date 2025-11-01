import { MessageSquareHeart } from "lucide-react"

export default function StickyConsultButton() {
  return (
    <a href="#consulta" className="fixed right-0 bottom-20 z-50 rotate-90">
      <button className="bg-foreground new-button from-blush-400 to-blush-500 h-8 w-5 font-bold pulse">
       <MessageSquareHeart className="w-5 h-5 text-white rotate-270" />
      </button>
    </a>
  )
}
