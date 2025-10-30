import { useState } from 'react'

const mockPhotos = {
  Glam: ['/src/assets/react.svg','/src/assets/react.svg','/src/assets/react.svg'],
  Cabello: ['/src/assets/react.svg','/src/assets/react.svg'],
  Quinceanera: ['/src/assets/react.svg','/src/assets/react.svg','/src/assets/react.svg','/src/assets/react.svg'],
  Bodas: ['/src/assets/react.svg','/src/assets/react.svg']
}

export default function Portafolio() {
  const sections = Object.keys(mockPhotos)
  const [category, setCategory] = useState('Glam')
  const photos = mockPhotos[category] || []
  const [index, setIndex] = useState(0)

  function prev() { setIndex((i) => (i - 1 + photos.length) % photos.length) }
  function next() { setIndex((i) => (i + 1) % photos.length) }

  return (
    <section id="portafolio" className="py-10">
      <div className="container-max">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-blush-900">Portafolio</h3>
          <div>
            <select value={category} onChange={(e) => { setCategory(e.target.value); setIndex(0) }} className="px-3 py-2 rounded border bg-white">
              {sections.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div className="mt-6">
          {photos.length === 0 ? (
            <p>No photos yet</p>
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button onClick={prev} className="p-2 bg-white rounded-full shadow">‹</button>
              <div className="w-full md:w-3/4 card-soft p-3">
                <img src={photos[index]} alt={`${category} ${index}`} className="w-full rounded-lg shadow" />
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-sm text-blush-700">{category} — Foto {index + 1} de {photos.length}</p>
                  <a href={`#catalogo`} className="text-sm px-3 py-1 btn-primary">Service details</a>
                </div>
              </div>
              <button onClick={next} className="p-2 bg-white rounded-full shadow">›</button>
            </div>
          )}
        </div>
      </div>
    </section>
 )
}
