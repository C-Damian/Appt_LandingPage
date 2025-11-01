import { useEffect, useState } from 'react';
import { MenuIcon, X } from "lucide-react";
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Portafolio', href: '#portafolio' },
  { name: 'Catalogo', href: '#catalogo' },
  { name: 'Certificacion', href: '#certificacion' },
  { name: 'Consulta', href: '#consulta' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
     <nav 
      className={cn(
        "fixed w-full z-40 transition-all duration-300 pt-",
        isScrolled && !open ? "py-1 bg-white/60 backdrop-blur-lg shadow-xs" : " "
      )}
     >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="absolute left-1/2 -translate-x-1/2">
          <span className='relative'>
            <div className='flex justify-center'>
              <img 
                src="https://lx0yjezcc8bvqfbv.public.blob.vercel-storage.com/SILVIA%20TRUJILLO.png" 
                alt="Logo" 
                className="w-60 h-10" 
              />
            </div>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-8 flex-1">
          {navItems.map((item, key) => (
            <a key={item.key} href={item.href} className="text-foreground font-bold hover:text-primary transition-colors duration-300">
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(prev => !prev)} 
          className="sm:hidden py-2 text-foreground z-50"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={33} /> : <MenuIcon size={33} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center", 
            "transition-all duration-300 md:hidden",
            open ? "opacity-95 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl">
            {navItems.map((item, key) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground/80 hover:text-primary text-center font-bold transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
     </nav>
  )
}
