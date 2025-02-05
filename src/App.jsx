import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import GenAI from './pages/GenAI'
import DataIntegration from './pages/DataIntegration'
import About from './pages/About'
import Contact from './components/Contact'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genai" element={<GenAI />} />
            <Route path="/integration" element={<DataIntegration />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainLayout>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
