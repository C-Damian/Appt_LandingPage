const services = {
  Glam: [
    { name: 'Maquillaje Social', price: '$00k', desc: 'Maquillaje completo para eventos sociales.' },
    { name: 'Maquillaje Artístico', price: '$00k', desc: 'Looks creativos y temáticos para producciones o eventos.' }
  ],
  Quinceañera: [
    { name: 'Maquillaje Quinceañera', price: '$00k', desc: 'Servicio completo de maquillaje para la celebración de 15 años.' }
  ],
  Bodas: [
    { name: 'Maquillaje Novia (Boda)', price: '$00k', desc: 'Servicio premium de maquillaje nupcial, usualmente a domicilio.' }
  ],
  Cabello: [
    { name: 'Peinado Recogido', price: '$00k', desc: 'Peinado elegante con el cabello totalmente recogido.' },
    { name: 'Peinado Semi-recogido', price: '$00k', desc: 'Estilo versátil con parte del cabello recogido.' },
    { name: 'Peinado Ondas', price: '$00k', desc: 'Creación de ondas sueltas o marcadas.' },
    { name: 'Peinado Trenzado', price: '$00k', desc: 'Diseño de trenzas modernas o clásicas.' },
    { name: 'Peinado Planchado', price: '$00k', desc: 'Alisado perfecto con plancha profesional.' },
    { name: 'Repolarización Capilar', price: '$00k', desc: 'Tratamiento intensivo de nutrición y reparación para el cabello.' }
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
