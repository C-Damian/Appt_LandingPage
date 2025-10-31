const services = {
  Glam: [
    { name: 'Glam Full', price: '$00k', desc: 'Full glam look with lashes' },
    { name: 'Glam Light', price: '$00k', desc: 'Soft glam for events' }
  ],
  Cabello: [
    { name: 'Peinado Básico', price: '$00k', desc: 'Peinado elegante' }
  ],
  Quinceanera: [
    { name: 'Quince Full', price: '$00k', desc: 'Full service for quinceañera' }
  ],
  Bodas: [
    { name: 'Boda Bridal', price: '$00k', desc: 'On-site bridal makeup' }
  ]
}

export default function Catalogo() {
  return (
    <section id="catalogo" className="py-10 bg-white/50">
      <div className="container-max">
        <h3 className="text-2xl font-semibold text-blush-900 text-center">Catalogo de servicios</h3>

        <div className="mt-6 grid md:grid-cols-2 gap-6 mx-5">
          {Object.entries(services).map(([cat, items]) => (
            <div key={cat} className="p-4 rounded-2xl bg-white/80 border card-soft">
              <h4 className="font-semibold text-blush-800 text-xl">{cat}</h4>
              <ul className="mt-3 space-y-3 text-lg">
                {items.map(it => (
                  <li key={it.name} className="flex justify-between items-start gap-4">
                    <div>
                      <div className="font-medium">{it.name}</div>
                      <div className="text-sm text-blush-600">{it.desc}</div>
                    </div>
                    <div className="text-blush-700 font-semibold">{it.price}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
