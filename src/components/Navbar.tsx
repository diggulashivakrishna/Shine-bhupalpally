import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`p-2.5 rounded-2xl transition-all duration-500 ${
                scrolled ? 'bg-school-orange scale-90' : 'bg-white/10 backdrop-blur-md border border-white/20'
              }`}>
                <GraduationCap className={`w-8 h-8 ${scrolled ? 'text-white' : 'text-school-orange'}`} />
              </div>
              <div className="flex flex-col">
                <span className={`text-2xl font-serif font-black tracking-tighter leading-none transition-colors duration-500 ${
                  scrolled ? 'text-school-dark' : 'text-white'
                }`}>
                  SHINE
                </span>
                <span className={`text-[10px] font-bold tracking-[0.3em] uppercase leading-none mt-1 transition-colors duration-500 ${
                  scrolled ? 'text-school-orange' : 'text-white/60'
                }`}>
                  Group of Institutions
                </span>
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
                  scrolled ? 'text-slate-600 hover:text-school-orange' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-school-orange' : 'bg-school-orange'
                } ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500 shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 ${
                scrolled 
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
              className={`p-2 transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-school-dark text-white flex flex-col p-10 md:hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-10 h-10 text-school-orange" />
                <span className="text-3xl font-serif font-black tracking-tighter">SHINE</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X className="w-10 h-10" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-8">
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
                    className="text-5xl font-serif font-bold hover:text-school-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-school-orange text-white py-6 rounded-3xl font-black text-xl uppercase tracking-widest"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
