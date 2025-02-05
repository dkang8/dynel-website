import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Insights from './pages/Insights'
import Careers from './pages/Careers'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
