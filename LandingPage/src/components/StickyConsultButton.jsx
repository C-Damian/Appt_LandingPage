import { MessageSquareHeart } from "lucide-react"

export default function StickyConsultButton() {
  return (
    <a href="#consulta" className="fixed right-0 top-2/3 -translate-y-1/2 z-50">
      <button className="bg-foreground new-button from-blush-400 to-blush-500 p-3 rounded-l-md font-bold pulse rotate-180">
        <MessageSquareHeart className="w-5 h-5 text-white rotate-180 animate-pulse" />
      </button>
    </a>
  )
}
