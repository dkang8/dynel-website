import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout 