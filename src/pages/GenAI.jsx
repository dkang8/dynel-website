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

  // Update hero image
  const heroImage = "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"

  // Update case study images
  const caseStudyImages = {
    propertyManagement: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80",
    marketAnalysis: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  }

  // Update feature images
  const featureImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  ]

  // Update process steps with more reliable and neutral icons
  const processSteps = [
    {
      title: 'Data Input',
      description: 'Property reports, engineering documents, and market data',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>`
    },
    {
      title: 'AI Processing',
      description: 'Advanced LLM models with RAG architecture',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>`
    },
    {
      title: 'Insight Generation',
      description: 'Contextual responses and recommendations',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>`
    }
  ]

  // Add RAG flow steps
  const ragFlowSteps = [
    {
      title: 'Document Processing',
      steps: ['PDF Extraction', 'Text Chunking', 'Embedding Generation']
    },
    {
      title: 'Vector Storage',
      steps: ['Property Reports DB', 'Engineering Reports DB', 'Market Data DB']
    },
    {
      title: 'Query Processing',
      steps: ['Query Embedding', 'Similarity Search', 'Context Retrieval']
    },
    {
      title: 'Response Generation',
      steps: ['Context Augmentation', 'LLM Processing', 'Response Formatting']
    }
  ]

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
                src={heroImage}
                alt="AI Visualization"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Flow Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            className="text-2xl sm:text-3xl font-display font-bold text-center mb-8 sm:mb-12"
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
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
              <div className="relative">
                {/* Connection Lines - Hidden on mobile */}
                <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-primary transform -translate-y-1/2 z-0"></div>
                
                {/* Process Steps */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                        <div 
                          className="w-10 h-10 sm:w-12 sm:h-12 text-primary"
                          dangerouslySetInnerHTML={{ __html: step.icon }}
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                      {/* Mobile-only arrow */}
                      {index < processSteps.length - 1 && (
                        <div className="sm:hidden text-primary text-2xl mt-4">↓</div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Detailed Process Flow */}
              <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6">
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold mb-4">Data Processing Pipeline</h4>
                  <div className="flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
                    <span>Raw Data</span>
                    <span className="hidden sm:block">→</span>
                    <span className="block sm:hidden">↓</span>
                    <span>Preprocessing</span>
                    <span className="hidden sm:block">→</span>
                    <span className="block sm:hidden">↓</span>
                    <span>AI Analysis</span>
                    <span className="hidden sm:block">→</span>
                    <span className="block sm:hidden">↓</span>
                    <span>Results</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold mb-6">GenAI Chatbot Architecture (RAG)</h4>
                  <div className="space-y-6">
                    {/* RAG Flow Diagram */}
                    <div className="relative">
                      <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 z-0"></div>
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        {ragFlowSteps.map((stage, index) => (
                          <motion.div
                            key={index}
                            className="relative bg-white p-4 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="text-primary font-semibold mb-3">{stage.title}</div>
                            <div className="space-y-2">
                              {stage.steps.map((step, stepIndex) => (
                                <div
                                  key={stepIndex}
                                  className="text-sm bg-gray-50 p-2 rounded"
                                >
                                  {step}
                                </div>
                              ))}
                            </div>
                            {/* Mobile-only arrow */}
                            {index < ragFlowSteps.length - 1 && (
                              <div className="sm:hidden text-primary text-2xl mt-4 text-center">↓</div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Data Sources */}
                    <div className="mt-8">
                      <h5 className="font-semibold mb-4">Knowledge Base</h5>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="bg-white p-3 rounded-lg shadow-sm text-sm">
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                            </svg>
                            <span>Property Reports</span>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm text-sm">
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                            </svg>
                            <span>Engineering Reports</span>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm text-sm">
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Market Data</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold mb-4">Key Technologies</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                    <div className="bg-white p-2 rounded shadow">
                      Transformer Models
                    </div>
                    <div className="bg-white p-2 rounded shadow">
                      Neural Networks
                    </div>
                    <div className="bg-white p-2 rounded shadow">
                      Deep Learning
                    </div>
                    <div className="bg-white p-2 rounded shadow">
                      NLP Processing
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics Preview */}
            <motion.div
              className="mt-8 bg-white rounded-xl shadow-lg p-4 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-gray-600">Accuracy</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">50ms</div>
                  <div className="text-gray-600">Response Time</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Availability</div>
                </div>
              </div>
            </motion.div>
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
                  src={featureImages[index]}
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
                    src={caseStudyImages.propertyManagement}
                    alt="Case Study Results"
                    className="rounded-lg shadow-md object-cover h-64 w-full"
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