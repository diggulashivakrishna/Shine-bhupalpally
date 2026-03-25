import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '/public/images/logo.webp';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Location', path: '/location' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Prevent scrolling on mobile
      const preventDefault = (e: TouchEvent) => e.preventDefault();
      document.addEventListener('touchmove', preventDefault, { passive: false });
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('touchmove', preventDefault);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isHome = location.pathname === '/';
  const isSolid = scrolled || !isHome;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isSolid 
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <div className="relative">
                  <img 
                    src={logo} 
                    alt="Shine Group of Institutions" 
                    className={`transition-all duration-500 object-contain ${
                      isSolid ? 'h-10' : 'h-16'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-bold text-sm uppercase tracking-widest transition-all duration-500 group ${
                    isSolid ? 'text-slate-600 hover:text-school-orange' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isSolid ? 'bg-school-orange' : 'bg-school-orange'
                  } ${location.pathname === link.path ? 'w-full' : 'w-0'}`}></span>
                </Link>
              ))}
              <Link
                to="/enroll"
                className={`px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500 shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 ${
                  isSolid 
                    ? 'bg-school-orange text-white hover:bg-orange-600' 
                    : 'bg-school-orange text-white hover:bg-white hover:text-school-orange'
                }`}
              >
                Enroll <Sparkles className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 transition-colors ${isSolid ? 'text-slate-900' : 'text-white'}`}
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Moved outside nav for better stacking */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[9999] bg-school-dark text-white flex flex-col md:hidden overflow-y-auto"
          >
            {/* Sticky Header for Mobile Menu */}
            <div className="sticky top-0 z-[10000] bg-school-dark px-10 py-10 flex justify-between items-center shrink-0">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
                <img 
                  src={logo} 
                  alt="Shine Group of Institutions" 
                  className="h-12 object-contain brightness-0 invert" 
                  referrerPolicy="no-referrer"
                />
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-2 text-white">
                <X className="w-10 h-10" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-8 px-10 pb-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-serif font-bold hover:text-school-orange transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-12">
                <Link
                  to="/enroll"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-school-orange text-white py-6 rounded-3xl font-black text-xl uppercase tracking-widest hover:bg-orange-600 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}