import { motion } from 'motion/react';
import { GraduationCap, User, Calendar, Phone, Mail, MapPin, BookOpen, Sparkles, Send, Loader2, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Enroll() {
  const [formState, setFormState] = useState({
    studentName: '',
    dob: '',
    grade: '',
    parentName: '',
    phone: '',
    email: '',
    address: '',
    previousSchool: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while connecting to the server.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-school-orange/10 text-school-orange text-sm font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-4 h-4" /> Admissions 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-black text-slate-900 mb-4">
            ENROLL <span className="text-school-orange italic">NOW</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Take the first step towards a brighter future. Fill out the form below to begin the enrollment process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
        >
          {submitted ? (
            <div className="p-16 text-center">
              <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Application Submitted!</h2>
              <p className="text-xl text-slate-600 mb-10">
                Thank you for choosing Shine Group of Institutions. Our admissions team will review your application and contact you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-10 py-4 bg-school-orange text-white rounded-full font-bold hover:scale-105 transition-transform"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Student Information */}
                <div className="md:col-span-2">
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-school-orange" /> Student Information
                  </h3>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Student Full Name</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      required
                      type="text"
                      className="w-full pl-14 pr-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-school-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium"
                      placeholder="Enter student's name"
                      value={formState.studentName}
                      onChange={(e) => setFormState({ ...formState, studentName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Date of Birth</label>
                  <div className="relative">
                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      required
                      type="date"
                      className="w-full pl-14 pr-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-school-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium"
                      value={formState.dob}
                      onChange={(e) => setFormState({ ...formState, dob: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Grade Applying For</label>
                  <div className="relative">
                    <BookOpen className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      required
                      className="w-full pl-14 pr-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-school-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium appearance-none"
                      value={formState.grade}
                      onChange={(e) => setFormState({ ...formState, grade: e.target.value })}
                    >
                      <option value="">Select Grade</option>
                      <option value="nursery">Nursery</option>
                      <option value="lkg">LKG</option>
                      <option value="ukg">UKG</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                        <option key={n} value={n}>Grade {n}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Previous School (If any)</label>
                  <div className="relative">
                    <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      className="w-full pl-14 pr-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-school-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium"
                      placeholder="School name"
                      value={formState.previousSchool}
                      onChange={(e) => setFormState({ ...formState, previousSchool: e.target.value })}
                    />
                  </div>
                </div>

                {/* Parent Information */}
                <div className="md:col-span-2 mt-8">
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <User className="w-6 h-6 text-school-orange" /> Parent / Guardian Information
                  </h3>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Parent's Full Name</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      required
                      type="text"
                      className="w-full pl-14 pr-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-school-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium"
                      placeholder="Enter parent's name"
                      value={formState.parentName}
                      onChange={(e) => setFormState({ ...formState, parentName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      required
                      type="tel"
                      className="w-full pl-14 pr-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-school-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium"
                      placeholder="+91 XXXXX XXXXX"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      required
                      type="email"
                      className="w-full pl-14 pr-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-school-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium"
                      placeholder="parent@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Residential Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-6 top-12 w-5 h-5 text-slate-400" />
                    <textarea
                      required
                      rows={3}
                      className="w-full pl-14 pr-8 py-5 rounded-3xl bg-slate-50 border-transparent focus:bg-white focus:border-school-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium resize-none"
                      placeholder="Enter full address"
                      value={formState.address}
                      onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                    ></textarea>
                  </div>
                </div>
              </div>

              {error && (
                <div className="mt-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="mt-12">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative bg-school-orange text-white py-6 rounded-3xl font-black text-xl uppercase tracking-widest transition-all shadow-xl hover:shadow-orange-200 disabled:opacity-50 overflow-hidden"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? <Loader2 className="w-8 h-8 animate-spin" /> : <Send className="w-6 h-6" />}
                    Submit Application
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-school-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>
            </form>
          )}
        </motion.div>

        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>By submitting this form, you agree to our terms and conditions regarding the admissions process.</p>
          <p className="mt-2">Need help? Call us at <span className="text-slate-600 font-bold">+91 91607 93528</span></p>
        </div>
      </div>
    </div>
  );
}
