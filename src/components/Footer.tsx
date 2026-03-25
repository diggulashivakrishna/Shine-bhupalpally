import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '/public/images/logo.webp';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="Shine Group of Institutions" 
                className="h-20 object-contain brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering students to achieve excellence through innovative learning and a supportive community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-school-orange transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-school-orange transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/shine_high_school_2.0?igsh=MWF3YWM2bW5rNGs1cg==" target="_blank" rel="noopener noreferrer" className="hover:text-school-orange transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-school-orange transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-school-orange transition-colors">About Our School</Link></li>
              <li><Link to="/academics" className="hover:text-school-orange transition-colors">Academic Programs</Link></li>
              <li><Link to="/location" className="hover:text-school-orange transition-colors">Campus Location</Link></li>
              <li><Link to="/enroll" className="hover:text-school-orange transition-colors">Admissions</Link></li>
              <li><Link to="#" className="hover:text-school-orange transition-colors">School Calendar</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-white font-serif text-xl font-bold mb-6">Academics</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="hover:text-school-orange transition-colors">Science & Math</Link></li>
              <li><Link to="#" className="hover:text-school-orange transition-colors">Arts & Humanities</Link></li>
              <li><Link to="#" className="hover:text-school-orange transition-colors">Sports & Athletics</Link></li>
              <li><Link to="#" className="hover:text-school-orange transition-colors">Technology Lab</Link></li>
              <li><Link to="#" className="hover:text-school-orange transition-colors">Library Resources</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-school-orange shrink-0 mt-1" />
                <span>House No:9, 13/1, near Ramalayam Temple, Bhupalpally, Telangana 506169</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-school-orange shrink-0" />
                <span>+91 98667 76369</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-school-orange shrink-0" />
                <span>anishetty21@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Shine Group of Institutions. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
