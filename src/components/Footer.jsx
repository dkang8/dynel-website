function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Dynel</h3>
            <p className="text-gray-100">
              Transforming real estate through innovative IT solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-100">Email: contact@dynelsolutions.com</p>
            <p className="text-gray-100">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="space-x-4">
              <a href="#" className="text-gray-100 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-100 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-dark mt-8 pt-8 text-center text-gray-100">
          <p>&copy; {new Date().getFullYear()} Dynel Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 