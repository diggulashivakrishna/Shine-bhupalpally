import { motion } from 'motion/react';
import { BookOpen, FlaskConical, Palette, Music, Cpu, Languages, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    icon: <FlaskConical className="w-8 h-8" />,
    title: "Science & Innovation",
    desc: "Exploring the laws of nature through hands-on experimentation in our state-of-the-art labs.",
    image: "/src/assets/images/6.jpg"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Technology & Coding",
    desc: "Mastering the digital language of the future, from AI to robotics and software development.",
    image: "/src/assets/images/1.jpg"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Visual Arts",
    desc: "Nurturing creativity through painting, sculpture, and digital design in our vibrant studios.",
    image: "/src/assets/images/11.jpg"
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Performing Arts",
    desc: "Developing confidence and expression through music, theater, and contemporary dance.",
    image: "/src/assets/images/1.jpg"
  }
];

export default function Academics() {
  return (
    <div className="bg-white">
      {/* Header - Immersive */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-school-dark">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/images/1.jpg" 
            alt="Academics" 
            className="w-full h-full object-cover opacity-30 object-center" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-school-dark via-school-dark/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-school-orange/20 backdrop-blur-md border border-school-orange/30 text-school-orange text-sm font-bold tracking-widest uppercase mb-8">
              <GraduationCap className="w-4 h-4" /> Academic Excellence
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-8 leading-none tracking-tighter">
              BEYOND <br /> <span className="text-school-orange italic">TEXTBOOKS</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              Our curriculum is designed to challenge the intellect, spark curiosity, and prepare students for the complexities of the 21st century.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs - Alternating Layout */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 italic">Our Programs</h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto">A diverse range of academic paths tailored to individual interests and global standards.</p>
          </div>

          <div className="space-y-32">
            {programs.map((program, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-school-orange/10 rounded-[60px] -z-10 group-hover:bg-school-orange/20 transition-colors duration-500"></div>
                    <div className="rounded-[50px] overflow-hidden shadow-2xl aspect-[4/3]">
                      <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-school-orange mb-8 shadow-inner">
                    {program.icon}
                  </div>
                  <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">{program.title}</h3>
                  <p className="text-xl text-slate-600 leading-relaxed mb-10">
                    {program.desc}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {['Advanced Curriculum', 'Expert Mentorship', 'Modern Facilities'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="w-2 h-2 rounded-full bg-school-orange"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/enroll" className="inline-flex items-center gap-2 text-school-orange font-bold text-lg group">
                    Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights - Bento Style */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight italic">
              Academic <br /> <span className="text-school-orange not-italic">Highlights</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-sm">Unique features that set our educational approach apart.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 p-12 rounded-[50px] bg-white shadow-xl border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-6">Global Perspectives</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our curriculum integrates international case studies and global issues, preparing students to be responsible global citizens who can navigate diverse cultural landscapes.
                </p>
              </div>
              <div className="mt-12 flex -space-x-4">
                {[
                  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1523050335456-c38459a0d317?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=100"
                ].map((img, i) => (
                  <div key={i} className="w-16 h-16 rounded-full border-4 border-white overflow-hidden">
                    <img src={img} alt="Student" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-16 h-16 rounded-full border-4 border-white bg-school-orange flex items-center justify-center text-white font-bold">
                  +50
                </div>
              </div>
            </div>
            
            <div className="p-12 rounded-[50px] bg-school-dark text-white flex flex-col justify-between">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                <Cpu className="w-8 h-8 text-school-orange" />
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold mb-4">STEM Focus</h3>
                <p className="text-slate-400">Integrating Science, Tech, Engineering, and Math into every grade level.</p>
              </div>
            </div>

            <div className="p-12 rounded-[50px] bg-school-orange text-white flex flex-col justify-between">
              <div className="w-16 h-16 rounded-2xl bg-black/10 flex items-center justify-center mb-8">
                <Languages className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold mb-4">Language Mastery</h3>
                <p className="text-white/70">Multilingual programs including French, Spanish, and Mandarin.</p>
              </div>
            </div>

            <div className="md:col-span-2 p-12 rounded-[50px] bg-white shadow-xl border border-slate-100 relative overflow-hidden group">
              <img src="/src/assets/images/4.jpg" alt="Library" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity object-top" referrerPolicy="no-referrer" />
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-6">Personalized Learning</h3>
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  We believe every student learns differently. Our adaptive learning paths ensure that each child is challenged at their own pace and supported where they need it most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
