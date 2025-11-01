export const Talleres = [
  { name: 'Taller Automaquillaje Básico', desc: 'Clase para aprender técnicas esenciales de maquillaje personal.' },
  { name: 'Taller Automaquillaje Intermedio', desc: 'Clase enfocada en técnicas más avanzadas y tendencias.' },
  { name: 'Taller Automaquillaje Avanzado', desc: 'Masterclass para un dominio total del maquillaje personal.' },
  { name: 'Curso PRO de Maquillaje', desc: 'Formación completa y profesional para futuros artistas.' },
  { name: 'Clases de Perfeccionamiento', desc: 'Clases individuales para refinar habilidades y destrezas.' }
]

export default function Certificacion() {
  return (
    <section id="certificacion" className="py-10 px-8 text-center">
      <div className="container-max">
        <h3 className="text-2xl font-semibold text-blush-900 mb-8">Mentoría & Certificación</h3>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4">
          {Talleres.map((taller, index) => (
            <div 
              key={index}
              className="w-full md:w-80 bg-white rounded-xl shadow-lg px-6 py-3 transition-transform hover:scale-105"
            >
              <h4 className="text-lg font-semibold text-blush-800 mb-3">
                {taller.name}
              </h4>
              <p className="text-blush-600 text-sm">
                {taller.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
