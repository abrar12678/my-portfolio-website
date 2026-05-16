"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const id = href.replace("#", "");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const isActive = (href) => activeSection === href.replace("#", "");

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="relative group select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-lg md:text-xl font-bold text-foreground tracking-tight">
                &lt;
                <span className="gradient-text">Abrar</span>
                <span className="text-muted-foreground/60">/&gt;</span>
              </span>
              <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#00b4d8]/10 via-[#7c3aed]/10 to-[#f72585]/10 opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-500" />
            </motion.a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 * index,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <motion.span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-[#00b4d8] via-[#7c3aed] to-[#f72585] transition-all duration-300 ${
                        active ? "w-3/4" : "w-0 group-hover:w-3/4"
                      }`}
                      layoutId="desktop-underline"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative ml-4 px-6 py-2.5 text-sm font-semibold rounded-full text-white bg-gradient-to-r from-[#00b4d8] via-[#7c3aed] to-[#f72585] hover:shadow-lg hover:shadow-[#7c3aed]/30 transition-all duration-300 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative z-10">Hire Me</span>
              </motion.a>
            </div>

            {/* Hamburger Menu - Gradient lines & light gradient bg */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className={`lg:hidden relative p-2.5 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                isMobileMenuOpen
                  ? "border border-[#f72585]/20 hover:border-[#f72585]/30"
                  : "border border-white/10 hover:border-white/20"
              }`}
              style={{
                background: isMobileMenuOpen
                  ? "linear-gradient(135deg, rgba(247,37,133,0.12) 0%, rgba(124,58,237,0.12) 50%, rgba(0,180,216,0.12) 100%)"
                  : "linear-gradient(135deg, rgba(0,180,216,0.10) 0%, rgba(124,58,237,0.10) 50%, rgba(247,37,133,0.10) 100%)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center w-[22px] h-[22px]"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient
                          id="grad-close-x1"
                          x1="0"
                          y1="0"
                          x2="24"
                          y2="24"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#f72585" />
                          <stop offset="50%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#00b4d8" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        stroke="url(#grad-close-x1)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center w-[22px] h-[22px]"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient
                          id="grad-menu-x1"
                          x1="3"
                          y1="0"
                          x2="21"
                          y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#00b4d8" />
                          <stop offset="50%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#f72585" />
                        </linearGradient>
                      </defs>
                      <line
                        x1="4"
                        y1="6"
                        x2="20"
                        y2="6"
                        stroke="url(#grad-menu-x1)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="4"
                        y1="12"
                        x2="20"
                        y2="12"
                        stroke="url(#grad-menu-x1)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="4"
                        y1="18"
                        x2="20"
                        y2="18"
                        stroke="url(#grad-menu-x1)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <motion.div
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00b4d8]/40 via-[#7c3aed]/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-2xl border-b border-border/50"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1.5">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                      transition={{
                        duration: 0.35,
                        delay: 0.04 * index,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`group relative flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                        active
                          ? "text-foreground bg-gradient-to-r from-[#00b4d8]/10 via-[#7c3aed]/10 to-transparent"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 rounded-full bg-gradient-to-b from-[#00b4d8] to-[#7c3aed] transition-all duration-300 group-hover:h-6 ${active ? "!h-6" : ""}`}
                      />
                      <span className="group-hover:bg-gradient-to-r group-hover:from-[#00b4d8] group-hover:via-[#7c3aed] group-hover:to-[#f72585] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {link.label}
                      </span>
                      <motion.span
                        className="text-muted-foreground/0 group-hover:text-[#00b4d8] transition-colors duration-300"
                        initial={false}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        >
                          <path
                            d="M6 3l5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.span>
                      {active && (
                        <motion.span
                          layoutId="mobile-active-dot"
                          className="absolute right-4 w-1.5 h-1.5 rounded-full bg-[#00b4d8]"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.a>
                  );
                })}

                <motion.a
                  href="#contact"
                  onClick={(e) => handleClick(e, "#contact")}
                  initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  transition={{
                    duration: 0.35,
                    delay: 0.04 * navLinks.length + 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block mt-3 px-4 py-3.5 text-center text-base font-semibold rounded-full text-white bg-gradient-to-r from-[#00b4d8] via-[#7c3aed] to-[#f72585] hover:shadow-lg hover:shadow-[#7c3aed]/25 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative z-10">Hire Me</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
