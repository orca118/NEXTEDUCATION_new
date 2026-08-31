import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Student Mentor Program', path: '/student-mentor-program' },
    { name: 'Orca Robotics', path: '/orca-robotics' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Donate', path: '/donate' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <GraduationCap size={24} />
                </div>
                <div className="font-bold text-xl tracking-tight leading-none">
                  <span className="block text-slate-900">NEXT</span>
                  <span className="block text-blue-600">EDUCATION</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-4">
              {navLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors"
                >
                  Contact
                </Link>
                <Link
                  to="/donate"
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-all hover:shadow-md hover:shadow-blue-600/20 active:scale-95"
                >
                  Donate
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden gap-4">
              <Link
                to="/donate"
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all"
              >
                Donate
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-3 py-3 rounded-md text-base font-medium ${
                      location.pathname === link.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-grow flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4 group">
                <div className="bg-blue-500 text-white p-1.5 rounded-lg">
                  <GraduationCap size={20} />
                </div>
                <div className="font-bold text-lg tracking-tight leading-none text-white">
                  <span className="block">NEXT</span>
                  <span className="block text-blue-400">EDUCATION</span>
                </div>
              </Link>
              <p className="text-sm text-slate-400 max-w-xs">
                A 501(c)(3) nonprofit creating student-led opportunities in STEM education, mentorship, leadership, and community service.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Programs</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/student-mentor-program" className="hover:text-white transition-colors">Student Mentor Program</Link></li>
                <li><Link to="/orca-robotics" className="hover:text-white transition-colors">Orca Robotics</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Organization</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/get-involved" className="hover:text-white transition-colors">Get Involved</Link></li>
                <li><Link to="/donate" className="hover:text-white transition-colors">Donate</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Connect</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:contact@nexteducationglobal.org" className="hover:text-white transition-colors flex items-center gap-2">contact@nexteducationglobal.org</a></li>
                <li className="pt-2">
                  <span className="inline-block px-3 py-1 bg-slate-800 text-xs font-medium rounded-full text-slate-300">
                    MCPS Approved SSL Organization
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} NEXT EDUCATION, INC. All rights reserved.</p>
            <p>501(c)(3) Nonprofit Organization</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
