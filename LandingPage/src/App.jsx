import Header from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Catalogo from './components/Catalogo'
import Certificacion from './components/Certificacion'
import Consulta from './components/Consulta'
import StickyConsultButton from './components/StickyConsultButton'
import Navbar from './components/Navbar'
import Portfolio2 from './components/Portfolio2'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Portfolio2 />
        <Catalogo />
        <Certificacion />
        <Consulta />
      </main>
      <StickyConsultButton />
    </div>
  )
}
