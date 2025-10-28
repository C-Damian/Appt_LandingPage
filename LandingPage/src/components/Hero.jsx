import { MessageCircle, X } from "lucide-react";

const Items = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Catalogo', href: '#catalogo' },
  { name: 'Certificacion', href: '#certificacion' },
  { name: 'Consulta', href: '#consulta' }
]

export default function Hero() {
  
  return (
    <section id="hero" className="hero-bg">
      <div className="container-max py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-sm card-soft p-4">
            <img src="/src/assets/Hero.jpg" alt="artist" className="mt-4 w-full rounded-2xl shadow-2xl/50" />
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-blush-900 text-center px-3 font-family header-text">Silvia Trujillo</h1>
          <h5 className="text-blush-700 text-center mb-4 font-bold">Professional Makeup Artist</h5>

          <div className="mt-6 flex items-center gap-4 justify-center">
            <button className="flex items-center gap-2">
              <img className="w-12 h-12" src="/src/assets/whatsapp-circle.svg"></img>
            </button>
            <button className="flex items-center gap-2">
              <img className="w-12 h-12" src="/src/assets/tiktok-circle.svg"></img>
            </button>
          </div>

          <div className="mt-3 grid grid-cols-2 p-4 gap-3">
            {Items.map((item, key) => (
              <a key={item.key} href={item.href} className="new-button block text-center py-2 inset-ring-2 inset-ring-rose-200">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
