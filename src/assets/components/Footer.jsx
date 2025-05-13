export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold text-white">Blogify</h2>
            <p className="mt-2 text-sm text-gray-400">
              Stay curious. Read, write, and grow your knowledge with our
              community blog platform.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-white">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-white" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="hover:text-white" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Blogify. All rights reserved.
        </div>
      </footer>
    </>
  );
}
