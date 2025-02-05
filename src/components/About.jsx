import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-display text-primary">
            {t.about.title}
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            {t.about.description1}
          </p>
          <p className="text-gray-600 text-lg">
            {t.about.description2}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About 