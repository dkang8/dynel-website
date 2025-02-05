import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

function Header() {
  const { language, toggleLanguage } = useLanguage()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[language]

  const navigation = [
    { name: t.nav.services, href: '/services' },
    { name: t.nav.industries, href: '/industries' },
    { name: t.nav.insights, href: '/insights' },
    { name: t.nav.careers, href: '/careers' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.contact, href: '/contact' },
  ]

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold text-primary font-display">
            Dynel
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-gray-600 hover:text-primary transition duration-300
                  ${location.pathname === item.href ? 'text-primary font-semibold' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language toggle */}
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

        {/* Mobile menu */}
        <Transition
          show={mobileMenuOpen}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block text-gray-600 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Transition>
      </nav>
    </header>
  )
}

export default Header 