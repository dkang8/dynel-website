import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-primary font-display">Dynel</div>
          
          {/* Language toggle for mobile */}
          <div className="md:hidden">
            <div className="flex space-x-2 items-center border-2 border-primary rounded-md overflow-hidden">
              <button
                onClick={() => language !== 'en' && toggleLanguage()}
                className={`px-3 py-1 transition duration-300 ${
                  language === 'en' 
                    ? 'bg-primary text-white' 
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => language !== 'jp' && toggleLanguage()}
                className={`px-3 py-1 transition duration-300 ${
                  language === 'jp' 
                    ? 'bg-primary text-white' 
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                JP
              </button>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition duration-300">
              {t.nav.services}
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition duration-300">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition duration-300">
              {t.nav.contact}
            </a>
            <div className="flex space-x-2 items-center border-2 border-primary rounded-md overflow-hidden">
              <button
                onClick={() => language !== 'en' && toggleLanguage()}
                className={`px-3 py-1 transition duration-300 ${
                  language === 'en' 
                    ? 'bg-primary text-white' 
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => language !== 'jp' && toggleLanguage()}
                className={`px-3 py-1 transition duration-300 ${
                  language === 'jp' 
                    ? 'bg-primary text-white' 
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                JP
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 