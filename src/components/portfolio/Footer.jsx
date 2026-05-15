"use client";

import { motion } from "framer-motion";
import { Globe, Link2, Mail, Phone, Heart } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Globe, href: "https://github.com/abrar12678", label: "GitHub" },
  {
    icon: Link2,
    href: "https://www.linkedin.com/in/ab-webdev",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:programmer.ab.etarnity@gmail.com",
    label: "Email",
  },
  { icon: Phone, href: "https://wa.me/01912188976", label: "WhatsApp" },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="text-2xl font-bold mb-4 inline-block"
            >
              &lt;<span className="gradient-text">Abrar</span>/&gt;
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full Stack Developer passionate about building modern, scalable
              web experiences with cutting-edge technologies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-[#00b4d8] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#00b4d8] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl bg-secondary/50 border border-border text-muted-foreground hover:text-[#00b4d8] hover:border-[#00b4d8]/30 hover:bg-[#00b4d8]/5 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              programmer.ab.etarnity@gmail.com
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              +880 1912-188976
            </p>
          </motion.div>
        </div>
        <div className="section-line mt-10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; 2025 Md Abrar Hasan. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-[#f72585]" /> using
            Next.js &amp; GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
