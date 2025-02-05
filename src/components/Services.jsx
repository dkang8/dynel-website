import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 font-display text-primary">
          {t.services.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${[
                  "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ][index]})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 