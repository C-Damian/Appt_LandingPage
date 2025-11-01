import { MessageCircle, X } from "lucide-react";

const Items = [
  { name: 'Portafolio', href: '#portafolio' },
  { name: 'Catalogo', href: '#catalogo' },
  { name: 'Certificacion', href: '#certificacion' },
  { name: 'Consulta', href: '#consulta' }
]

export default function Hero() {
  
  return (
    <section id="hero" className="hero-bg">
      <div className="container-max py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[80%] max-w-sm card-soft p-4"> 
            <img src="https://lx0yjezcc8bvqfbv.public.blob.vercel-storage.com/Hero.jpg" alt="artist" className="mt-4 w-full rounded-2xl shadow-2xl/50" />
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-blush-900 text-center px-3 font-family header-text">Silvia Trujillo</h1>
          <h3 className="text-blush-700 text-sm text-center mb-1 font-bold text-black ">Professional Makeup Artist</h3>

          <div className="mt-6 flex items-center gap-4 justify-center">
            <button className="flex items-center gap-2">
              <a href="https://api.whatsapp.com/send?phone=573204649384&text=%C2%A1Hola%20preciosa!%20%F0%9F%AB%B6%F0%9F%8F%BC%F0%9F%92%95%0ABienvenida%20a%20Silvia%20Trujillo%20Profesional%20Makeup.%20%0A%0A%E2%9C%A8Nuestros%20servicios%20son%3A%20%0A%0A%F0%9F%91%B8Makeup%20(social%2F%20Novias%20un%2F%20Quincea%C3%B1eras%2F%20Art%C3%ADstico)%0A%F0%9F%91%B8Peinados%20(Recogidos%2F%20Semi-recogidos%2F%20Ondas%20%2F%20Trenzados%20%2F%20Planchados)%20%0A%F0%9F%91%B8Talleres%20de%20automaquillaje%3A%0A%F0%9F%92%84B%C3%A1sico%20%0A%F0%9F%92%84%F0%9F%92%84Intermedio%20%0A%F0%9F%92%84%F0%9F%92%84%F0%9F%92%84Avanzado%20%0A%F0%9F%91%B8Curso%20PRO%20de%20maquillaje%0A%F0%9F%91%B8Clases%20de%20perfeccionamiento%20de%20maquillaje%0A%F0%9F%91%B8Repolarizaciones%20(Tratamientos%20de%20nutrici%C3%B3n%20y%20reparaci%C3%B3n%20intensiva%20para%20el%20cabello)%0A%0A%E2%9C%A8Es%20un%20placer%20para%20m%C3%AD%20atenderte%2C%20%C2%A1Dime%20en%20qu%C3%A9%20te%20encuentras%20interesada!%20%E2%9C%A8" target="_blank">
                <img className="w-12 h-12" src="https://lx0yjezcc8bvqfbv.public.blob.vercel-storage.com/whatsapp-circle.svg" alt="WhatsApp" />
              </a>
            </button>
            <button className="flex items-center gap-2">
              <a href="https://www.tiktok.com/@silviatrujillo_makeup?_t=8mnat6boeks&_r=1" target="_blank">
                <img className="w-12 h-12" src="https://lx0yjezcc8bvqfbv.public.blob.vercel-storage.com/tiktok-circle.svg" alt="TikTok" />
              </a>
            </button>
          </div>

          <div className="mt-3 grid grid-cols-2 p-4 gap-3">
            {Items.map((item, key) => (
              <a key={item.key} href={item.href} className="new-button block text-center py-2 inset-ring-4 inset-ring-foreground">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
