import { useState } from 'react'

export default function Consulta() {
  const [form, setForm] = useState({ name: '', email: '', date: '', service: '', notes: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    // Placeholder: integrate EmailJS in README. For now we simulate success.
    setTimeout(() => setStatus('sent'), 800)
  }

  return (
    <section id="consulta" className="py-10 bg-blush-50">
      <div className="container-max px-6 pb-10 text-center">
        <h3 className="text-2xl font-semibold text-blush-900">Consulta</h3>
        <p className="text-blush-700 mt-2">Rellena el formulario y te contactaremos con una cotización.</p>

        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="p-3 rounded-lg border bg-white" />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 rounded-lg border bg-white" />
          <input name="date" type="date" value={form.date} onChange={handleChange} className="p-3 rounded-lg border bg-white" />
          <select name="service" value={form.service} onChange={handleChange} className="p-3 rounded-lg border bg-white">
            <option value="">Selecciona servicio</option>
            <option value="Glam">Glam</option>
            <option value="Bodas">Bodas</option>
            <option value="Quinceanera">Quinceanera</option>
          </select>
          <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Detalles / Ubicación" className="p-3 rounded-lg border bg-white col-span-1 md:col-span-2" />

          <div className="col-span-1 md:col-span-2">
            <button type="submit" className="px-5 py-2 btn-primary">
              {status === 'sending' ? 'Enviando...' : status === 'sent' ? 'Enviado! Te Vamos a Contactar Para Confirmar ♥' : 'Enviar Consulta'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
