import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-6 font-display">
          {t.hero.title}
        </h1>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
        <a
          href="#contact"
          className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg
          transition duration-300 inline-block border-2 border-transparent hover:border-primary-light"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  )
}

export default Hero 