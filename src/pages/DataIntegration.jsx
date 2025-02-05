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
      image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apachekafka.svg',
      color: 'bg-blue-50'
    },
    {
      title: 'Batch Processing',
      description: 'Efficient handling of large data volumes',
      image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apache.svg',
      color: 'bg-green-50'
    },
    {
      title: 'API Integration',
      description: 'Seamless connection with third-party services',
      image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/swagger.svg',
      color: 'bg-purple-50'
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

  const architectureImage = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"

  const protocolIcons = {
    rest: "https://cdn.worldvectorlogo.com/logos/rest-api.svg",
    graphql: "https://cdn.worldvectorlogo.com/logos/graphql.svg",
    soap: "https://cdn.worldvectorlogo.com/logos/soap.svg",
    websocket: "https://cdn.worldvectorlogo.com/logos/websocket.svg"
  }

  const integrationFlow = {
    sources: ['CRM Systems', 'Property Management', 'Financial Data'],
    processing: ['Data Validation', 'Transformation', 'Enrichment'],
    destinations: ['Analytics Platform', 'Reporting Tools', 'Business Apps']
  }

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
              transition={fadeIn.transition}
            >
              <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                {t.title}
              </h1>
              <p className="text-xl text-gray-100">
                {t.subtitle}
              </p>
            </motion.div>
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  {['Sources', 'Processing', 'Destinations'].map((title, i) => (
                    <div key={i} className="text-center font-semibold">{title}</div>
                  ))}
                </div>
              </div>
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
            className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
          >
            <img 
              src={architectureImage}
              alt="Integration Architecture"
              className="w-full rounded-lg"
            />
            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
              <div className="bg-gray-50 p-2 rounded">Data Sources</div>
              <div className="bg-primary text-white p-2 rounded">Processing</div>
              <div className="bg-gray-50 p-2 rounded">Destinations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Integration Types
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {integrationTypes.map((type, index) => (
              <motion.div
                key={index}
                className={`rounded-xl shadow-lg overflow-hidden ${type.color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 mb-6">
                    <img 
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full text-primary"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-600">
                    {type.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Flow Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Integration Architecture
          </h2>
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Data Sources */}
              <div className="space-y-4">
                <h3 className="font-semibold text-center mb-4">Data Sources</h3>
                {integrationFlow.sources.map((source, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 p-4 rounded-lg text-center text-sm"
                  >
                    {source}
                  </div>
                ))}
              </div>

              {/* Processing */}
              <div className="space-y-4">
                <h3 className="font-semibold text-center mb-4">Processing</h3>
                {integrationFlow.processing.map((process, index) => (
                  <div
                    key={index}
                    className="bg-primary/10 p-4 rounded-lg text-center text-sm"
                  >
                    {process}
                  </div>
                ))}
              </div>

              {/* Destinations */}
              <div className="space-y-4">
                <h3 className="font-semibold text-center mb-4">Destinations</h3>
                {integrationFlow.destinations.map((dest, index) => (
                  <div
                    key={index}
                    className="bg-green-50 p-4 rounded-lg text-center text-sm"
                  >
                    {dest}
                  </div>
                ))}
              </div>
            </div>

            {/* Connection Lines */}
            <div className="hidden sm:block relative mt-8">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-primary to-green-400 transform -translate-y-1/2"></div>
              <div className="grid grid-cols-3 gap-8">
                {['Extract', 'Transform', 'Load'].map((step, index) => (
                  <div key={index} className="text-center text-sm text-gray-600">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
                {Object.entries(protocolIcons).map(([key, icon]) => (
                  <div key={key} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <img src={icon} alt={key} className="w-6 h-6 mr-3" />
                      <span className="capitalize">{key}</span>
                    </div>
                    <span className="text-green-500">✓</span>
                  </div>
                ))}
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