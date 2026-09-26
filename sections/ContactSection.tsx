"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Github, Send, Copy, Check, Sparkles } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-widest mb-2">
            <span>07</span>
            <span className="w-8 h-[1px] bg-sky-400/40" />
            <span>CONNECT WITH ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Whether you have an internship opportunity, freelance project, or just want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="glass-panel p-6 rounded-2xl border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-1">{PERSONAL_INFO.name}</h3>
                <p className="text-xs font-mono text-sky-400 mb-6">{PERSONAL_INFO.role}</p>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-mono font-medium hover:text-sky-300 truncate block">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                    <button
                      onClick={copyEmailToClipboard}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                      title="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Phone Contact</div>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs font-mono font-medium hover:text-emerald-300">
                        +977 {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Location</div>
                      <div className="text-xs font-semibold">{PERSONAL_INFO.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">GitHub Profile</div>
                      <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono hover:text-purple-300">
                        github.com/christopher7777777
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
              <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
                <Send className="w-4 h-4 text-sky-400" />
                <span>Send a Direct Message</span>
              </h3>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-center text-emerald-300 space-y-2">
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-base font-bold">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, Christopher Pokharel will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-3 rounded-xl glass-panel border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors ${
                        errors.name ? "border-rose-500/60" : "border-white/10"
                      }`}
                    />
                    {errors.name && <p className="text-rose-400 text-[11px] font-mono mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl glass-panel border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors ${
                        errors.email ? "border-rose-500/60" : "border-white/10"
                      }`}
                    />
                    {errors.email && <p className="text-rose-400 text-[11px] font-mono mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or inquiry here..."
                      className={`w-full px-4 py-3 rounded-xl glass-panel border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors ${
                        errors.message ? "border-rose-500/60" : "border-white/10"
                      }`}
                    />
                    {errors.message && <p className="text-rose-400 text-[11px] font-mono mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-300 shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
