"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Send, User, MessageSquare, MapPin } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    const whatsappNumber = "8801912188976";
    const text = `Hello Abrar! I'm *${formData.name}*.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    setTimeout(() => setIsSending(false), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "programmer.ab.etarnity@gmail.com",
      href: "mailto:programmer.ab.etarnity@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1912-188976",
      href: "tel:+8801912188976",
    },
    { icon: MapPin, label: "Location", value: "Khulna, Bangladesh", href: "#" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00b4d8]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#00b4d8] font-medium mb-3">
            Get in Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="gradient-text">Me</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Have a project in mind or want to collaborate? Feel free to reach
            out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h4 className="text-2xl font-bold text-foreground mb-4">
                Get in touch <span className="gradient-text">today</span>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I&apos;m currently available for freelance work and open to
                discussing new projects. Drop me a message and I&apos;ll get
                back to you via WhatsApp as soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/20 border border-border hover:border-[#00b4d8]/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00b4d8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00b4d8]/20 transition-colors">
                    <info.icon size={20} className="text-[#00b4d8]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {info.label}
                    </span>
                    <p className="text-sm font-medium text-foreground group-hover:text-[#00b4d8] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#00b4d8]/10 to-[#7c3aed]/10 border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">
                  Quick Connect:
                </span>{" "}
                You can also find me on{" "}
                <a
                  href="https://github.com/abrar12678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00b4d8] hover:underline font-medium"
                >
                  GitHub
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/ab-webdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00b4d8] hover:underline font-medium"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-secondary/10 border border-border space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Carter"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#00b4d8]/50 focus:ring-1 focus:ring-[#00b4d8]/20 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#00b4d8]/50 focus:ring-1 focus:ring-[#00b4d8]/20 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456 - 789"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#00b4d8]/50 focus:ring-1 focus:ring-[#00b4d8]/20 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Facebook"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#00b4d8]/50 focus:ring-1 focus:ring-[#00b4d8]/20 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Please type your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#00b4d8]/50 focus:ring-1 focus:ring-[#00b4d8]/20 transition-all duration-300 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending}
                className="w-full py-4 rounded-xl text-white font-medium text-sm transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, #00b4d8 0%, #7c3aed 50%, #f72585 100%)",
                }}
              >
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </motion.button>
              <p className="text-xs text-center text-muted-foreground">
                Your message will be sent via WhatsApp for instant response.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
