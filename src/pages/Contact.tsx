import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

import contactHeroImage from '/src/assets/images/1.jpg';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBackendSubmit = async (type: 'email' | 'whatsapp') => {
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setError("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          type
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while connecting to the server.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header - Immersive */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-school-dark">
        <div className="absolute inset-0">
          <img 
            src={contactHeroImage} 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-30 object-center" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-school-dark/50 to-school-dark"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-school-orange text-sm font-bold tracking-widest uppercase mb-8">
              <Sparkles className="w-4 h-4" /> Connect With Us
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-6 leading-[0.9] tracking-tight">
              START A <br /> <span className="text-school-orange italic">CONVERSATION</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Contact Info - Sticky */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-12 leading-tight italic">
                  We're here <br /> <span className="text-school-orange not-italic">to help.</span>
                </h2>
                <div className="space-y-10">
                  {[
                    { icon: <MapPin className="w-6 h-6" />, label: "Visit Us", value: "House No:9, 13/1, near Ramalayam Temple, Bhupalpally, Telangana 506169" },
                    { icon: <Phone className="w-6 h-6" />, label: "Call Us", value: "+91 98667 76369" },
                    { icon: <Mail className="w-6 h-6" />, label: "Email Us", value: "anishetty21@gmail.com" },
                    { icon: <Clock className="w-6 h-6" />, label: "Office Hours", value: "Mon - Sat : 9:00 AM - 6:00 PM" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="shrink-0 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-school-orange group-hover:bg-school-orange group-hover:text-white transition-all duration-500">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">{item.label}</div>
                        <div className="text-lg font-serif font-bold text-slate-900">{item.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 p-10 rounded-[40px] bg-slate-900 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-school-orange/10 rounded-full blur-3xl group-hover:bg-school-orange/20 transition-colors"></div>
                  <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Admissions Office</h3>
                  <p className="text-slate-400 mb-8 relative z-10">Ready to join the Shine family? Our admissions team is ready to guide you through the process.</p>
                  <a href="mailto:anishetty21@gmail.com" className="inline-flex items-center gap-2 text-school-orange font-bold hover:gap-4 transition-all relative z-10">
                    Admission Inquiry <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-16 rounded-[60px] border border-slate-100 shadow-2xl relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-school-orange rounded-full flex items-center justify-center text-white shadow-lg">
                  <MessageSquare className="w-6 h-6" />
                </div>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-8">
                      <Send className="w-10 h-10" />
                    </div>
                    <h4 className="text-4xl font-serif font-bold text-slate-900 mb-4">Message Received!</h4>
                    <p className="text-xl text-slate-500 max-w-sm mx-auto">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-10 text-school-orange font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                      <h3 className="text-3xl font-serif font-bold text-slate-900">Send a Message</h3>
                      <p className="text-slate-400 text-sm">* All fields are required</p>
                    </div>

                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-2xl text-sm font-medium flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                        {error}
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Full Name</label>
                        <input 
                          type="text" 
                          required
                          disabled={isSubmitting}
                          className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-school-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all disabled:opacity-50 font-medium"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Email Address</label>
                        <input 
                          type="email" 
                          required
                          disabled={isSubmitting}
                          className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-school-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all disabled:opacity-50 font-medium"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Subject</label>
                      <input 
                        type="text" 
                        required
                        disabled={isSubmitting}
                        className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-school-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all disabled:opacity-50 font-medium"
                        placeholder="How can we help?"
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Message</label>
                      <textarea 
                        required
                        rows={5}
                        disabled={isSubmitting}
                        className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-school-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all resize-none disabled:opacity-50 font-medium"
                        placeholder="Tell us more about your inquiry..."
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      ></textarea>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                      <button 
                        type="button"
                        onClick={() => handleBackendSubmit('email')}
                        disabled={isSubmitting}
                        className="group relative bg-school-orange text-white py-6 rounded-3xl font-bold text-lg transition-all shadow-xl hover:shadow-orange-200 overflow-hidden disabled:opacity-50"
                      >
                        <div className="relative z-10 flex items-center justify-center gap-3">
                          {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <Mail className="w-6 h-6" />}
                          Send via Email
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-school-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </button>
                      
                      <button 
                        type="button"
                        onClick={() => handleBackendSubmit('whatsapp')}
                        disabled={isSubmitting}
                        className="group relative bg-emerald-600 text-white py-6 rounded-3xl font-bold text-lg transition-all shadow-xl hover:shadow-emerald-200 overflow-hidden disabled:opacity-50"
                      >
                        <div className="relative z-10 flex items-center justify-center gap-3">
                          {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <MessageSquare className="w-6 h-6" />}
                          Send via WhatsApp
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
