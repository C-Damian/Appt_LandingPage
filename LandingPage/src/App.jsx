import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Catalogo from './components/Catalogo'
import Certificacion from './components/Certificacion'
import Consulta from './components/Consulta'
import StickyConsultButton from './components/StickyConsultButton'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Catalogo />
        <Certificacion />
        <Consulta />
      </main>
      <StickyConsultButton />
    </div>
  )
}
