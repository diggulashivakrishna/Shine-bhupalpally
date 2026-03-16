import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, BookOpen, Users, Trophy, Star, Sparkles, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section - Editorial Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-school-dark">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/src/assets/images/6.jpg"
            alt="Shine Group of Institutions Students"
            className="w-full h-full object-cover scale-110 opacity-60 object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-school-dark/60 via-transparent to-school-dark"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-school-orange text-sm font-bold tracking-widest uppercase mb-8"
            >
              <Sparkles className="w-4 h-4" /> Excellence in Education
            </motion.div>
            <h1 className="text-6xl md:text-9xl font-serif font-black text-white mb-8 leading-[0.85] tracking-tighter">
              SHINE <br /> <span className="text-school-orange italic">BRIGHTER</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto mb-12 leading-relaxed text-balance">
              Empowering the next generation of thinkers, creators, and leaders in an environment of innovation and integrity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/about"
                className="group relative px-10 py-5 bg-school-orange text-white rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Legacy <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/enroll"
                className="px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white hover:text-school-dark transition-all"
              >
                Book a Visit
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="bg-school-orange py-6 overflow-hidden whitespace-nowrap border-y-2 border-school-dark">
        <div className="flex animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              <span className="text-4xl font-serif font-black text-white uppercase italic">Shine Group of Institutions</span>
              <GraduationCap className="w-8 h-8 text-white" />
              <span className="text-4xl font-serif font-black text-white uppercase italic">Innovation</span>
              <Sparkles className="w-8 h-8 text-white" />
              <span className="text-4xl font-serif font-black text-white uppercase italic">Leadership</span>
              <Trophy className="w-8 h-8 text-white" />
            </div>
          ))}
        </div>
      </div>

      {/* Student Life - Bento Grid Layout */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                A Canvas for <br /> <span className="text-school-orange italic">Student Life</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Education at Shine goes beyond textbooks. We foster a vibrant ecosystem where students explore passions, build lifelong friendships, and discover their true potential.
              </p>
            </div>
            <Link to="/academics" className="group flex items-center gap-2 text-school-dark font-bold text-lg">
              View All Programs <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[1000px] md:h-[800px]">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 md:row-span-2 relative rounded-[40px] overflow-hidden group"
            >
              <img src="/src/assets/images/1.jpg" alt="Students with study materials" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-center" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
                <span className="text-school-orange font-bold uppercase tracking-widest text-sm mb-2">Academics</span>
                <h3 className="text-3xl font-serif font-bold text-white">Advanced Research Labs</h3>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-1 md:row-span-1 relative rounded-[40px] overflow-hidden group"
            >
              <img src="/src/assets/images/2.jpg" alt="Students with DNA model" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-center" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-1 md:row-span-2 relative rounded-[40px] overflow-hidden group bg-school-dark p-10 flex flex-col justify-between"
            >
              <div className="bg-school-orange w-16 h-16 rounded-2xl flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-white mb-4">45+</div>
                <p className="text-slate-400 font-medium">National level awards won by our students in 2024 alone.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-1 md:row-span-1 relative rounded-[40px] overflow-hidden group"
            >
              <img src="/src/assets/images/4.jpg" alt="Students with microscope" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-center" referrerPolicy="no-referrer" />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 md:row-span-1 relative rounded-[40px] overflow-hidden group"
            >
              <img src="/src/assets/images/3.jpg" alt="Students looking at specimen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-center" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-10">
                <h3 className="text-3xl font-serif font-bold text-white">Global Community</h3>
                <p className="text-slate-300 max-w-xs mt-2">Connecting students with international exchange programs.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Values Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-12 leading-tight">
                Built on <br /> <span className="text-school-orange italic">Solid Values</span>
              </h2>
              <div className="space-y-12">
                {[
                  {
                    icon: <BookOpen className="w-8 h-8" />,
                    title: "Intellectual Curiosity",
                    desc: "We encourage students to ask 'why' and explore the unknown with a critical mind."
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Compassionate Leadership",
                    desc: "Leading with empathy and a commitment to serving the community."
                  },
                  {
                    icon: <Star className="w-8 h-8" />,
                    title: "Unyielding Integrity",
                    desc: "Honesty and ethical behavior are the cornerstones of our school culture."
                  }
                ].map((value, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-8 group"
                  >
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-school-orange group-hover:bg-school-orange group-hover:text-white transition-all duration-500">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-school-orange transition-colors">{value.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ rotate: -5, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl"
              >
                <img src="/src/assets/images/6.jpg" alt="Students collaborating" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
              </motion.div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-school-orange/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-school-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Immersive Style */}
      <section className="py-32 bg-school-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic">Voices of Shine</h2>
            <p className="text-slate-400 text-xl">What our community says about their experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                text: "Shine High School didn't just teach me subjects; it taught me how to think and how to lead. The mentorship I received here shaped my career path in ways I never imagined.",
                author: "Sarah Johnson",
                role: "Class of 2018, Lead Researcher"
              },
              {
                text: "The environment here is electric. Every day is a new opportunity to create something meaningful. My son has grown so much in confidence and character.",
                author: "Michael Chen",
                role: "Parent of Grade 10 Student"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 rounded-[50px] bg-white/5 border border-white/10 backdrop-blur-sm relative group"
              >
                <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Star className="w-24 h-24 fill-white" />
                </div>
                <p className="text-2xl font-serif italic mb-10 leading-relaxed text-slate-200">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-school-orange/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-school-orange" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">{t.author}</div>
                    <div className="text-slate-500 text-sm uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Dramatic Split Layout */}
      <section className="h-[80vh] flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-school-orange flex items-center justify-center p-20 text-white">
          <div className="max-w-md">
            <h2 className="text-6xl font-serif font-bold mb-8 leading-tight">Ready to <br /> <span className="italic">Join Us?</span></h2>
            <p className="text-xl font-medium mb-12 opacity-80">Applications for the 2026 academic year are now open. Secure your future today.</p>
            <Link 
              to="/enroll" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-school-dark text-white rounded-full font-black text-xl hover:scale-105 transition-transform"
            >
              Apply Now <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative overflow-hidden">
          <img src="/src/assets/images/1.jpg" alt="Join Shine" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-school-orange/20"></div>
        </div>
      </section>
    </div>
  );
}
