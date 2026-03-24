import { motion } from 'motion/react';
import { Target, Heart, ShieldCheck, Award, Users, Sparkles, History, Globe } from 'lucide-react';
import Img10 from '/src/assets/images/students_culture.jpeg';
import Img2 from '/src/assets/images/students_science.png';
import Chairman from '/src/assets/images/chairman.png';
import Correspondent from '/src/assets/images/correspondent.png';
import Principal from '/src/assets/images/principal.png';


export default function About() {
  return (
    <div className="bg-white">
      {/* Header - Editorial Style */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-school-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={Img10} 
            alt="About Shine" 
            className="w-full h-full object-cover opacity-40 grayscale object-top" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-serif font-black text-white mb-6 leading-none tracking-tighter">
              OUR <br /> <span className="text-school-orange italic">STORY</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              A journey defined by a relentless pursuit of excellence and a deep-rooted commitment to student growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History - Split Layout */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-school-orange font-bold uppercase tracking-widest text-sm mb-6">
                <History className="w-5 h-5" /> Established 1995
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-10 leading-tight">
                A Legacy of <br /> <span className="italic text-school-orange">Excellence</span>
              </h2>
              <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
                <p>
                  Shine Group of Institutions began with a simple yet profound vision: to create a sanctuary of learning where curiosity is celebrated and character is forged. What started as a modest initiative has blossomed into a beacon of educational innovation.
                </p>
                <p>
                  Our history is not just a timeline of dates, but a collection of thousands of success stories. From our first graduating class to our current global alumni network, the "Shine Spirit" continues to inspire change across the world.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-serif font-bold text-school-orange mb-2">30+</div>
                  <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Years of Impact</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-school-orange mb-2">5000+</div>
                  <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Alumni Worldwide</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl aspect-[4/5]"
              >
                <img 
                  src={Img2}
                  alt="School History" 
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-school-orange rounded-full -z-10 blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Creative Cards */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-school-orange/10 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-16 rounded-[60px] bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="w-20 h-20 rounded-3xl bg-school-orange flex items-center justify-center mb-10">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-serif font-bold mb-8 italic">Our Mission</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                To ignite a passion for lifelong learning and equip students with the tools to navigate a complex world with courage, wisdom, and a commitment to the common good.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-16 rounded-[60px] bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="w-20 h-20 rounded-3xl bg-school-accent flex items-center justify-center mb-10">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-serif font-bold mb-8 italic">Our Vision</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                To be the global benchmark for holistic education, where innovation meets tradition to create leaders who are as compassionate as they are capable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Interactive Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 italic">The Shine DNA</h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto">These values are not just words on a wall; they are the principles that guide every interaction within our community.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="w-10 h-10" />, title: "Integrity", desc: "Acting with honesty and strong moral principles in every situation." },
              { icon: <Award className="w-10 h-10" />, title: "Excellence", desc: "Striving for the highest standards in academics and character." },
              { icon: <Users className="w-10 h-10" />, title: "Inclusion", desc: "Embracing diversity and ensuring every voice is heard and valued." },
              { icon: <Sparkles className="w-10 h-10" />, title: "Innovation", desc: "Thinking beyond boundaries to solve the challenges of tomorrow." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 text-center group transition-all duration-500 hover:bg-school-orange hover:text-white"
              >
                <div className="text-school-orange group-hover:text-white mb-8 flex justify-center transition-colors">{value.icon}</div>
                <h4 className="text-2xl font-serif font-bold mb-4">{value.title}</h4>
                <p className="text-slate-500 group-hover:text-slate-200 transition-colors leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - High-End Gallery */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight">
              Guided by <br /> <span className="text-school-orange italic">Visionaries</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-sm">Our leadership team brings decades of experience to Shine.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Mugala Kumar, M.A., LL.B", role: "Chairman", img: Chairman , message: "Providing visionary leadership and strategic direction to build an institution that empowers future generations." },
              { name: "Anishetty Bhanu Chander", role: "Correspondent", img: Correspondent , message: "Committed to strengthening academic excellence and ensuring a nurturing environment for holistic student development." },
              { name: "Anishetty Sravanthi", role: "Principal", img: Principal , message: "Leading with dedication to inspire learning, discipline, and growth in every student." }
            ].map((leader, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-[50px] aspect-[3/4] mb-8 shadow-2xl">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-orange/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <p className="text-white text-sm leading-relaxed">
                      {leader.message}
                    </p>
                  </div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">{leader.name}</h3>
                <p className="text-school-orange font-bold uppercase tracking-widest text-sm">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
