import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AmaraNZeroCase from './pages/AmaraNZeroCase'
import ArokoCase from './pages/ArokoCase'
import CamaraMunicipalCase from './pages/CamaraMunicipalCase'
import CineCampusCase from './pages/CineCampusCase'

export default function App() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Navigation />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos/amara-nzero" element={<AmaraNZeroCase />} />
          <Route path="/projetos/aroko" element={<ArokoCase />} />
          <Route path="/projetos/camara-municipal" element={<CamaraMunicipalCase />} />
          <Route path="/projetos/cinecampus" element={<CineCampusCase />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
