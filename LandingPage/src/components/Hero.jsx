import { MessageCircle, X } from "lucide-react";


export default function Hero() {
  return (
    <section id="hero" className="hero-bg">
      <div className="container-max py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-sm card-soft p-4">
            <img src="/src/assets/Hero.jpg" alt="artist" className="mt-4 w-full rounded-2xl shadow-lg" />
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blush-900">Marta González — Makeup Artist</h2>
          <p className="my-1 text-blush-700">Expert in bridal....</p>

          <div className="mt-6 flex items-center gap-4 justify-center">
            <button className="flex items-center gap-2 btn-primary"> 
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
            <button className="flex items-center gap-2 btn-ghost">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 4.87 7 13 7 13s7-8.13 7-13c0-3.87-3.13-7-7-7z"/></svg>
              TikTok
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <a href="#portfolio" className="block text-center py-2 btn-ghost">Portfolio</a>
            <a href="#consulta" className="block text-center py-2 btn-primary">Consulta</a>
            <a href="#catalogo" className="block text-center py-2 btn-ghost">Catalogo de servicios</a>
            <a href="#certificacion" className="block text-center py-2 btn-ghost">Certificacion</a>
          </div>
        </div>
      </div>
    </section>
  )
}
