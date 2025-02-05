import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Expert Consultants' },
    { number: '95%', label: 'Client Satisfaction' }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'Pioneering technological solutions that reshape the real estate industry.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>`
    },
    {
      title: 'Client Success',
      description: 'Dedicated to delivering measurable value and sustainable growth for our clients.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`
    },
    {
      title: 'Excellence',
      description: 'Maintaining the highest standards in every aspect of our service delivery.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>`
    }
  ]

  const leadership = [
    {
      name: 'Justina Kang',
      role: t.leadership.team[0].role,
      image: 'https://ui-avatars.com/api/?name=Justina+Kang&background=0D8ABC&color=fff&size=200&font-size=0.35&length=2&bold=true'
    },
    {
      name: 'Daniel Kang',
      role: t.leadership.team[1].role,
      image: 'https://ui-avatars.com/api/?name=Daniel+Kang&background=0D8ABC&color=fff&size=200&font-size=0.35&length=2&bold=true'
    }
  ]

  const LeadershipSection = () => (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          {t.leadership.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-6 relative mx-auto">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-primary/10 to-primary/20 shadow-lg">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 -m-2"></div>
                <div className="absolute inset-0 rounded-full border border-primary/10 -m-1"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{leader.name}</h3>
              <p className="text-gray-600 text-lg">{leader.role}</p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-gray-600">
                  {index === 0 ? 
                    t.leadership.team[0].description :
                    t.leadership.team[1].description
                  }
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="max-w-xl"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
            >
              <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-100">
                {t.hero.subtitle}
              </p>
            </motion.div>
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Modern office"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower real estate professionals with cutting-edge technology solutions that drive efficiency, 
                innovation, and growth in an ever-evolving digital landscape.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading technology partner in the real estate industry, known for innovative solutions 
                that shape the future of property technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div 
                  className="w-12 h-12 text-primary mb-6"
                  dangerouslySetInnerHTML={{ __html: value.icon }}
                />
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LeadershipSection />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="bg-primary rounded-2xl text-white p-12 text-center"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
          >
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's discuss how our solutions can help you achieve your goals.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg
              transition duration-300 inline-block font-semibold"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 