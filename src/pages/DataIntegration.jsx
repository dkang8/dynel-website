import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { 
  ArrowsPointingInIcon,
  CloudArrowUpIcon,
  CubeTransparentIcon 
} from '@heroicons/react/24/outline'
import PerformanceChart from '../components/charts/PerformanceChart'
import MetricsChart from '../components/charts/MetricsChart'

function DataIntegration() {
  const { language } = useLanguage()
  const t = translations[language].services.integration

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const features = [
    { icon: ArrowsPointingInIcon, ...t.features[0] },
    { icon: CloudArrowUpIcon, ...t.features[1] },
    { icon: CubeTransparentIcon, ...t.features[2] }
  ]

  const integrationTypes = [
    {
      title: 'Real-Time Data Sync',
      description: 'Synchronize data across platforms instantly',
      image: 'https://www.scnsoft.com/blog-pictures/business-intelligence/real-time-analytics-01.png'
    },
    {
      title: 'Batch Processing',
      description: 'Efficient handling of large data volumes',
      image: 'https://www.xenonstack.com/hubfs/xenonstack-batch-processing.png'
    },
    {
      title: 'API Integration',
      description: 'Seamless connection with third-party services',
      image: 'https://cdn.dribbble.com/users/1626229/screenshots/14111981/media/e21f6a2f27a39834c79876f2e409aed1.jpg'
    }
  ]

  const throughputData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    data: [1000, 2500, 3800, 4200, 4800, 5500]
  }

  const dataTypesData = {
    labels: ['JSON', 'XML', 'CSV', 'Binary', 'Custom'],
    data: [45, 25, 15, 10, 5]
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
                src="https://cdn.dribbble.com/users/1626229/screenshots/14111981/media/e21f6a2f27a39834c79876f2e409aed1.jpg"
                alt="Data Integration Visualization"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-display font-bold text-center mb-12"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
          >
            Our Integration Architecture
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
          >
            <img 
              src="https://d2908q01vomqb2.cloudfront.net/fc074d501302eb2b93e2554793fcaf50b3bf7291/2021/06/02/Figure-1.-Data-integration-patterns.png"
              alt="Integration Architecture"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Integration Types
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {integrationTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <img 
                  src={type.image}
                  alt={type.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Supported Protocols */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
            >
              <h3 className="text-xl font-semibold mb-6">Supported Protocols</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>REST API</span>
                  <span className="text-green-500">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>GraphQL</span>
                  <span className="text-green-500">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>SOAP</span>
                  <span className="text-green-500">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>WebSocket</span>
                  <span className="text-green-500">✓</span>
                </div>
              </div>
            </motion.div>
            
            {/* Data Formats */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">Supported Data Formats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">JSON</div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">XML</div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">CSV</div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">YAML</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Integration Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
              
              {/* Steps */}
              {[
                { title: 'Requirements Analysis', description: 'Understanding your data needs' },
                { title: 'Architecture Design', description: 'Planning the integration structure' },
                { title: 'Implementation', description: 'Building the integration pipeline' },
                { title: 'Testing & Validation', description: 'Ensuring data accuracy' },
                { title: 'Deployment', description: 'Going live with monitoring' }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Analytics */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Integration Analytics
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
            >
              <h3 className="text-xl font-semibold mb-6">Data Throughput</h3>
              <PerformanceChart
                title="Records Processed per Week"
                labels={throughputData.labels}
                data={throughputData.data}
                gradient={true}
              />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">Data Types Distribution (%)</h3>
              <MetricsChart
                title="Data Format Usage"
                labels={dataTypesData.labels}
                data={dataTypesData.data}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="bg-primary rounded-2xl text-white p-12 text-center"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
          >
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Integrate Your Data?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's discuss how our data integration solutions can streamline your operations.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg
              transition duration-300 inline-block font-semibold"
            >
              Start Integration
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DataIntegration 