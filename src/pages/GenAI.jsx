import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { 
  SparklesIcon, 
  DocumentTextIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline'
import PerformanceChart from '../components/charts/PerformanceChart'
import MetricsChart from '../components/charts/MetricsChart'

function GenAI() {
  const { language } = useLanguage()
  const t = translations[language].services.genai

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const features = [
    { icon: SparklesIcon, ...t.features[0] },
    { icon: DocumentTextIcon, ...t.features[1] },
    { icon: ChartBarIcon, ...t.features[2] }
  ]

  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [65, 78, 82, 85, 89, 93]
  }

  const processingTimeData = {
    labels: ['Traditional', 'GenAI', 'GenAI+'],
    data: [100, 35, 25]
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="max-w-xl"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={fadeIn.transition}
            >
              <h1 className="text-5xl font-display font-bold mb-6">
                {t.title}
              </h1>
              <p className="text-xl text-gray-100">
                {t.subtitle}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                alt="AI Visualization"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Flow Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-display font-bold text-center mb-12"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
          >
            How Our GenAI Solution Works
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
          >
            <img 
              src="https://miro.medium.com/max/1400/1*wnMQPTmEsIq0TiRgfX4hig.png"
              alt="GenAI Process Flow"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section with Visual Elements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <feature.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <img 
                  src={`https://picsum.photos/400/300?random=${index}`}
                  alt={feature.title}
                  className="rounded-lg shadow-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Performance Metrics
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
            >
              <h3 className="text-xl font-semibold mb-6">Model Accuracy</h3>
              <PerformanceChart
                title="Accuracy Over Time"
                labels={performanceData.labels}
                data={performanceData.data}
                gradient={true}
              />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">Processing Time (ms)</h3>
              <MetricsChart
                title="Processing Time Comparison"
                labels={processingTimeData.labels}
                data={processingTimeData.data}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section with Visual Evidence */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
          >
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Case Studies
            </h2>
            {t.caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <div className="flex items-center space-x-4 text-primary">
                      <span className="font-bold text-2xl">75%</span>
                      <span className="text-sm">Efficiency Increase</span>
                    </div>
                  </div>
                  <img 
                    src="https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/the%20economic%20potential%20of%20generative%20ai%20the%20next%20productivity%20frontier/the-economic-potential-of-generative-ai-1368x1368.jpg"
                    alt="Case Study Results"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            opacity: 0.1
          }}
        />
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="bg-primary rounded-2xl text-white p-12 text-center"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
          >
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's discuss how our GenAI solutions can help you achieve your goals.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg
              transition duration-300 inline-block font-semibold"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GenAI 