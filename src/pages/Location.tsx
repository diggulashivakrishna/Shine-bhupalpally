import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation, Train, Bus, Car, ArrowRight, Sparkles } from 'lucide-react';

export default function Location() {
  return (
    <div className="bg-white">
      {/* Header - Immersive */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-school-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=800,fit=crop/s9dXtbOXPrDB5Ky1/dsc08595-ORpWRbuNevZL7ypO.JPG" 
            alt="Campus Location" 
            className="w-full h-full object-cover opacity-40" 
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
                  { icon: <MapPin className="w-8 h-8" />, label: "Address", value: "123 Education Lane, Knowledge City, ST 56789" },
                  { icon: <Phone className="w-8 h-8" />, label: "Phone", value: "+91 91607 93528" },
                  { icon: <Mail className="w-8 h-8" />, label: "Email", value: "diggulashivakrishna@gmail.com" },
                  { icon: <Clock className="w-8 h-8" />, label: "Office Hours", value: "Mon - Fri: 8:00 AM - 4:00 PM" }
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
                {/* Placeholder for real map */}
                <img 
                  src="https://picsum.photos/seed/shine-map/1000/1000?blur=2" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-12 bg-white/80 backdrop-blur-xl rounded-[40px] border border-white shadow-2xl max-w-sm">
                    <div className="w-16 h-16 rounded-2xl bg-school-orange text-white flex items-center justify-center mx-auto mb-6">
                      <Navigation className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4">Interactive Map</h3>
                    <p className="text-slate-600 mb-8">Open in Google Maps for turn-by-turn directions to our campus.</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-school-orange text-white rounded-full font-bold hover:scale-105 transition-transform"
                    >
                      Get Directions <ArrowRight className="w-5 h-5" />
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
      <section className="py-32 bg-slate-50">
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
      </section>

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
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=800,fit=crop/s9dXtbOXPrDB5Ky1/dsc08595-ORpWRbuNevZL7ypO.JPG" alt="Auditorium" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <h4 className="text-2xl font-serif font-bold text-white">Grand Auditorium</h4>
              </div>
            </div>
            <div className="md:col-span-4 rounded-[50px] overflow-hidden group relative">
              <img src="https://picsum.photos/seed/shine-fac-2/600/800" alt="Sports Complex" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <h4 className="text-2xl font-serif font-bold text-white">Sports Complex</h4>
              </div>
            </div>
            <div className="md:col-span-4 rounded-[50px] overflow-hidden group relative">
              <img src="https://picsum.photos/seed/shine-fac-3/600/800" alt="Library" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <h4 className="text-2xl font-serif font-bold text-white">Digital Library</h4>
              </div>
            </div>
            <div className="md:col-span-8 rounded-[50px] overflow-hidden group relative">
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=800,fit=crop/s9dXtbOXPrDB5Ky1/dsc08595-ORpWRbuNevZL7ypO.JPG" alt="Cafeteria" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
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
