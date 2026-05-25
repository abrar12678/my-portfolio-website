"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  Email Helper                                                       */
/* ------------------------------------------------------------------ */

const EMAIL = "programmer.ab.etarnity@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Hello&body=`;

function handleEmailClick(e) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile) {
    e.preventDefault();
    window.open(GMAIL_COMPOSE, "_blank");
  }
}

const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/abrar12678",
    label: "GitHub",
    color: "#ffffff",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/ab-webdev",
    label: "LinkedIn",
    color: "#0077b5",
  },
  {
    icon: MailIcon,
    href: `mailto:${EMAIL}?subject=Hello&body=`,
    isEmail: true,
    label: "Email",
    color: "#ea4335",
  },
  {
    icon: WhatsAppIcon,
    href: "https://wa.me/8801912188976",
    label: "WhatsApp",
    color: "#25d366",
  },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-[#00b4d8]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[250px] rounded-full bg-[#7c3aed]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Column 1 - Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="text-2xl font-bold mb-5 inline-block group"
              whileHover={{ scale: 1.02 }}
            >
              &lt;<span className="gradient-text">Abrar</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                /&gt;
              </span>
            </motion.a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Full Stack Developer passionate about crafting modern, scalable
              web experiences with clean code and cutting-edge technologies.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                href={`mailto:${EMAIL}?subject=Hello&body=`}
                onClick={handleEmailClick}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#00b4d8] transition-all duration-300 group"
              >
                <span className="w-8 h-8 rounded-lg bg-[#00b4d8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00b4d8]/20 group-hover:shadow-[0_0_15px_rgba(0,180,216,0.2)] transition-all duration-300">
                  <MailIcon size={14} className="text-[#00b4d8]" />
                </span>
                programmer.ab.etarnity@gmail.com
              </motion.a>
              <motion.a
                href="https://wa.me/8801912188976"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#25d366] transition-all duration-300 group"
              >
                <span className="w-8 h-8 rounded-lg bg-[#25d366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25d366]/20 group-hover:shadow-[0_0_15px_rgba(37,211,102,0.2)] transition-all duration-300">
                  <WhatsAppIcon size={14} className="text-[#25d366]" />
                </span>
                +880 1912-188976
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-gradient-to-r from-[#00b4d8] via-[#7c3aed] to-[#f72585]" />
              Quick Links
            </h4>
            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 -ml-3 rounded-lg group"
                  >
                    {/* Gradient arrow indicator */}
                    <span className="flex-shrink-0 w-0 group-hover:w-5 overflow-hidden transition-all duration-300">
                      <span className="bg-gradient-to-r from-[#00b4d8] via-[#7c3aed] to-[#f72585] bg-clip-text text-transparent">
                        <ArrowUpRight
                          size={14}
                          className="rotate-45 group-hover:rotate-0 transition-transform duration-300"
                        />
                      </span>
                    </span>
                    {/* Gradient line indicator */}
                    <span className="w-0 group-hover:w-5 h-px bg-gradient-to-r from-[#00b4d8] via-[#7c3aed] to-[#f72585] transition-all duration-300 rounded-full" />
                    {/* Gradient text on hover */}
                    <span className="group-hover:bg-gradient-to-r group-hover:from-[#00b4d8] group-hover:via-[#7c3aed] group-hover:to-[#f72585] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {link.label}
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-gradient-to-r from-[#7c3aed] via-[#f72585] to-[#00b4d8]" />
              Connect
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Find me on these platforms. Let&apos;s build something amazing
              together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  onClick={social.isEmail ? handleEmailClick : undefined}
                  target={social.isEmail ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{
                    scale: 1.25,
                    y: -3,
                    boxShadow: `0 0 20px ${social.color}40, 0 0 40px ${social.color}15`,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-3 rounded-xl bg-secondary/40 border border-border hover:border-transparent transition-all duration-400 group cursor-pointer"
                  style={{
                    // @ts-ignore
                    ["--hover-color"]: social.color,
                  }}
                >
                  {/* Hover glow background */}
                  <span
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"
                    style={{ backgroundColor: `${social.color}15` }}
                  />
                  {/* Icon */}
                  <span className="relative text-muted-foreground group-hover:text-white transition-colors duration-300">
                    <social.icon size={18} />
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Quick connect CTA */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(124, 58, 237, 0.15)",
              }}
              className="mt-6 p-4 rounded-xl border border-border bg-secondary/20 hover:border-[#7c3aed]/30 transition-all duration-300 cursor-pointer"
            >
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">
                  Open to opportunities
                </span>{" "}
                — Freelance, full-time, or collaboration. Drop me a message!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-14 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#00b4d8]/20 via-[#7c3aed]/20 to-transparent" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Md Abrar Hasan. All rights
            reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs text-muted-foreground flex items-center gap-1.5"
          >
            Crafted with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart size={12} className="text-[#f72585]" fill="#f72585" />
            </motion.span>
            using Next.js &amp; GSAP
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
