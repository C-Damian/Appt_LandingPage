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
    <section id="consulta" className="pb-15 pt-5 bg-blush-50 md:justify-center flex">
      <div className="container-max mx-5 px-6 py-5 text-center border-6 border-blush-200 rounded-2xl md:max-w-lg">
        <h3 className="text-2xl font-semibold text-blush-900">Consulta</h3>
        <p className="text-blush-700 mt-2">Rellena el formulario y te contactaremos con una cotización.</p>

        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <input required="true" name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="p-3 rounded-lg border bg-white" />
          <input required="true" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 rounded-lg border bg-white" />
          <input required="true" name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" className="p-3 rounded-lg border bg-white" />
          <input required="true" name="date" placeholder="Fecha del servicio" type="date" value={form.date} onChange={handleChange} className="p-3 rounded-lg border bg-white" />
          <select required="true" name="service" value={form.service} onChange={handleChange} className="p-3 rounded-lg border bg-white">
            <option value="">Selecciona servicio</option>
            <option value="Glam">Glam</option>
            <option value="Bodas">Bodas</option>
            <option value="Quinceanera">Quinceanera</option>
          </select>
          <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Detalles / Ubicación" className="p-3 rounded-lg border bg-white col-span-1 md:col-span-2" />

          <div className="col-span-1 md:col-span-2">
            <button type="submit" className="px-5 py-2 btn-primaryi new-button">
              {status === 'sending' ? 'Enviando...' : status === 'sent' ? 'Enviado! Te Vamos a Contactar Para Confirmar ♥' : 'Enviar Consulta'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
