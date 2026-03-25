import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation, Train, Bus, Car, ArrowRight, Sparkles } from 'lucide-react';

import Img6 from '/public/images/6.avif';
import Img1 from '/public/images/1.avif';
import Img2 from '/public/images/2.avif';
import Img4 from '/public/images/4.avif';
import Img3 from '/public/images/students_group.avif';
import Img7 from '/public/images/students_groups.avif';
import Img8 from '/public/images/students_gd.avif';
import Img11 from '/public/images/students_computer.avif';
import Img9 from '/public/images/students_gd2.avif';
import Img10 from '/public/images/students_wanderla.avif';

export default function Location() {
  return (
    <div className="bg-white">
      {/* Header - Immersive */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-school-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={Img3} 
            alt="Campus Location" 
            className="w-full h-full object-cover opacity-40 object-top" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-school-orange text-sm font-bold tracking-widest uppercase mb-8">
              <MapPin className="w-4 h-4" /> Visit Our Campus
            </div>
            <h1 className="text-7xl md:text-9xl font-serif font-black text-white mb-6 leading-none tracking-tighter">
              FIND <br /> <span className="text-school-orange italic">US</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map - Split Layout */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-12 leading-tight italic">
                Get in <br /> <span className="text-school-orange not-italic">Touch</span>
              </h2>
              <div className="space-y-12">
                {[
                  { icon: <MapPin className="w-8 h-8" />, label: "Address", value: "House No:9, 13/1, near Ramalayam Temple, Bhupalpally, Telangana 506169" },
                  { icon: <Phone className="w-8 h-8" />, label: "Phone", value: "+91 98667 76369" },
                  { icon: <Mail className="w-8 h-8" />, label: "Email", value: "anishetty21@gmail.com" },
                  { icon: <Clock className="w-8 h-8" />, label: "Office Hours", value: "Mon - Sat : 9:00 AM - 6:00 PM" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-school-orange group-hover:bg-school-orange group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-1">{item.label}</div>
                      <div className="text-xl font-serif font-bold text-slate-900">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-[60px] overflow-hidden shadow-2xl relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.843657474246!2d79.85943981116664!3d18.443970299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a331d8284e0a5cf%3A0x196c98cc55d8ff1d!2sShine%20High%20school%202.0%2C%20IIT%20and%20Medical%20Foundation%2C%20Bhupalpally!5e0!3m2!1sen!2sin!4v1710748467000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                  <div className="p-8 bg-white/90 backdrop-blur-xl rounded-[30px] border border-white shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-school-orange text-white flex items-center justify-center">
                        <Navigation className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-serif font-bold">Campus Location</h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">Bhupalpally, Telangana 506169, India</p>
                    <a 
                      href="https://www.google.com/maps/place/Shine+High+school+2.0,+IIT+and+Medical+Foundation,+Bhupalpally/@18.4439703,79.8616285,17z" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-school-orange font-bold text-sm pointer-events-auto hover:underline"
                    >
                      Open in Google Maps <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-school-orange rounded-full -z-10 blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Information - Bento Grid */}
      {/* <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 italic">How to Reach Us</h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto">Conveniently located with multiple transport options for students and visitors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Bus className="w-10 h-10" />, 
                title: "By Public Bus", 
                desc: "Routes 42, 105, and 210 stop directly in front of the main gate every 15 minutes.",
                color: "bg-orange-50"
              },
              { 
                icon: <Train className="w-10 h-10" />, 
                title: "By Train", 
                desc: "Knowledge City Station is just a 10-minute walk from the campus. Shuttle service available.",
                color: "bg-orange-100"
              },
              { 
                icon: <Car className="w-10 h-10" />, 
                title: "By Car", 
                desc: "Ample visitor parking is available at Gate 3. Please register at the security desk.",
                color: "bg-slate-100"
              }
            ].map((method, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`p-12 rounded-[50px] ${method.color} border border-white/50 shadow-sm`}
              >
                <div className="text-school-orange mb-8">{method.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-4">{method.title}</h3>
                <p className="text-slate-600 leading-relaxed">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Campus Gallery - Immersive */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight">
              Campus <br /> <span className="text-school-orange italic">Showcase</span>
            </h2>
            <div className="flex items-center gap-2 text-school-orange font-bold">
              <Sparkles className="w-6 h-6" /> World-class facilities
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
            <div className="md:col-span-8 rounded-[50px] overflow-hidden group relative">
              <img src={Img6} alt="Auditorium" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-center" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <h4 className="text-2xl font-serif font-bold text-white">Campus</h4>
              </div>
            </div>
            <div className="md:col-span-4 rounded-[50px] overflow-hidden group relative">
              <img src={Img8} alt="Sports Complex" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-center" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <h4 className="text-2xl font-serif font-bold text-white">Assembly Hall</h4>
              </div>
            </div>
            <div className="md:col-span-4 rounded-[50px] overflow-hidden group relative">
              <img src={Img11} alt="Library" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-center" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <h4 className="text-2xl font-serif font-bold text-white">Digital Library</h4>
              </div>
            </div>
            <div className="md:col-span-8 rounded-[50px] overflow-hidden group relative">
              <img src={Img10} alt="Cafeteria" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <h4 className="text-2xl font-serif font-bold text-white">Student Hub</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
