function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
        <p className="text-gray-600">Page not found</p>
        <a href="/" className="text-primary hover:text-primary-dark mt-4 inline-block">
          Return to Home
        </a>
      </div>
    </div>
  )
}

export default NotFound 