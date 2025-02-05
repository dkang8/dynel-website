import MainLayout from './layouts/MainLayout'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <MainLayout>
        <Hero />
        <Services />
        <About />
        <Contact />
      </MainLayout>
    </LanguageProvider>
  )
}

export default App
