"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, Download, Globe, Link2, Mail } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Custom SVG Social Icons                                            */
/* ------------------------------------------------------------------ */

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const WhatsAppIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Floating Particles                                                 */
/* ------------------------------------------------------------------ */

function Particles() {
  const [mounted, setMounted] = useState(false);
  const particles = useRef(
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
    })),
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {particles.current.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            animation: `hero-float-particle ${p.duration}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

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

/* ------------------------------------------------------------------ */
/*  Social Links                                                       */
/* ------------------------------------------------------------------ */

const socials = [
  {
    Icon: GithubIcon,
    href: "https://github.com/abrar12678",
    label: "GitHub",
    color: "#ffffff",
  },
  {
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/ab-webdev",
    label: "LinkedIn",
    color: "#0077b5",
  },
  {
    Icon: EmailIcon,
    href: `mailto:${EMAIL}?subject=Hello&body=`,
    onClick: handleEmailClick,
    label: "Email",
    color: "#00b4d8",
  },
  {
    Icon: WhatsAppIcon,
    href: "https://wa.me/8801912188976",
    label: "WhatsApp",
    color: "#25d366",
  },
];

/* ------------------------------------------------------------------ */
/*  Hero Component                                                     */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const socialsRef = useRef(null);
  const cursorGlowRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (cursorGlowRef.current) {
      cursorGlowRef.current.style.left = `${e.clientX}px`;
      cursorGlowRef.current.style.top = `${e.clientY}px`;
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-greeting",
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
      )
        .fromTo(
          nameRef.current,
          { opacity: 0, y: 50, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
          "-=0.4",
        )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 30, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 },
          "-=0.3",
        )
        .fromTo(
          socialsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.2",
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.8, filter: "blur(10px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 },
          "-=0.8",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* ===== Cursor Glow ===== */}
      <div
        ref={cursorGlowRef}
        className="pointer-events-none fixed z-50 hidden lg:block w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,216,0.5) 0%, rgba(124,58,237,0.25) 40%, transparent 70%)",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
        aria-hidden
      />

      {/* ===== Gradient Background Orbs ===== */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden
      >
        {/* Cyan orb – top-left */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-20 blur-[140px]"
          style={{
            background: "radial-gradient(circle, #00b4d8 0%, transparent 70%)",
          }}
        />
        {/* Purple orb – bottom-right */}
        <div
          className="absolute -bottom-24 -right-24 w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full opacity-20 blur-[140px]"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          }}
        />
        {/* Pink orb – centre */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full opacity-[0.12] blur-[160px]"
          style={{
            background: "radial-gradient(circle, #f72585 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ===== Floating Particles ===== */}
      <Particles />

      {/* ===== Grid Pattern Overlay ===== */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      {/* ===== Main Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ---------- Left: Text ---------- */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting / Available Badge */}
            <motion.div className="hero-greeting inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-sm text-muted-foreground font-medium">
                Available for freelance work
              </span>
            </motion.div>

            {/* Name */}
            <h1
              ref={nameRef}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-muted-foreground text-lg sm:text-2xl md:text-3xl font-normal block mb-2">
                Hello, I&apos;m
              </span>
              <span className="gradient-text">Md Abrar Hasan</span>
            </h1>

            {/* Tagline */}
            <p
              ref={taglineRef}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              A passionate{" "}
              <span className="text-foreground font-medium">
                Full Stack Developer
              </span>{" "}
              crafting scalable, modern web experiences with clean code and
              cutting-edge technologies.
            </p>

            {/* Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              {/* View Projects */}
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(0, 180, 216, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#7c3aed] to-[#f72585] text-white font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/vp"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/vp:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ArrowDown size={16} />
                </span>
              </motion.a>

              {/* Contact Me */}
              <motion.a
                href={`mailto:${EMAIL}?subject=Hello&body=`}
                onClick={handleEmailClick}
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 0 20px rgba(247, 37, 133, 0.3), 0 0 50px rgba(247, 37, 133, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#f72585]/30 text-[#f72585] font-medium text-sm hover:bg-[#f72585]/10 hover:border-[#f72585]/50 hover:shadow-[0_0_20px_rgba(247,37,133,0.15)] transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/cm cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f72585]/10 to-transparent -translate-x-full group-hover/cm:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={16} /> Contact Me
                </span>
              </motion.a>

              {/* Download Resume */}
              <motion.a
                href="/MD_ABRAR_HASAN_FULL_STACK_RESUME.pdf"
                download
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 0 20px rgba(0, 180, 216, 0.15), 0 0 40px rgba(124, 58, 237, 0.08)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-border text-muted-foreground font-medium text-sm hover:bg-secondary/60 hover:text-foreground hover:border-[#00b4d8]/30 hover:shadow-[0_0_15px_rgba(0,180,216,0.1)] transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/dr cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/dr:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={16} /> Download Resume
                </span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div
              ref={socialsRef}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Find me on
              </span>
              <div className="w-8 h-px bg-border" />
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.onClick ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  onClick={social.onClick}
                  whileHover={{
                    scale: 1.25,
                    y: -3,
                    boxShadow: `0 0 20px ${social.color}40, 0 0 40px ${social.color}15`,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-all duration-300 relative cursor-pointer"
                  title={social.label}
                >
                  {/* Glow background on hover */}
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"
                    style={{ backgroundColor: `${social.color}15` }}
                  />
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ---------- Right: Profile Image ---------- */}
          <div ref={imageRef} className="flex-shrink-0">
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#7c3aed] to-[#f72585] opacity-15 blur-3xl group-hover:opacity-25 transition-opacity duration-700 animate-pulse" />

              {/* Spinning gradient ring */}
              <div
                className="absolute -inset-1.5 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00b4d8, #7c3aed, #f72585, #00b4d8)",
                  animation: "spin 6s linear infinite",
                }}
              />
              {/* Mask inner circle so the ring is visible */}
              <div className="absolute -inset-1.5 rounded-full">
                <div className="w-full h-full rounded-full bg-background m-[3px]" />
              </div>

              {/* Profile image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-background">
                <img
                  src="/profile.png"
                  alt="Md Abrar Hasan - Full Stack Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Badge: 1+ Year Exp. */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 sm:-right-6 top-4 sm:top-8 px-3 py-2 rounded-xl glass-card shadow-lg"
              >
                <span className="text-xs font-medium flex items-center gap-1.5">
                  <span className="text-[#00b4d8]">⚡</span> 1+ Year Exp.
                </span>
              </motion.div>

              {/* Floating Badge: 10+ Projects */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-2 sm:-left-6 bottom-8 sm:bottom-12 px-3 py-2 rounded-xl glass-card shadow-lg"
              >
                <span className="text-xs font-medium flex items-center gap-1.5">
                  <span className="text-[#7c3aed]">🚀</span> 10+ Projects
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Scroll Indicator ===== */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-[#00b4d8]"
          />
        </div>
      </motion.div>

      {/* ===== Particle Float Keyframe ===== */}
      <style jsx global>{`
        @keyframes hero-float-particle {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-30px) translateX(10px);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
          75% {
            transform: translateY(-40px) translateX(5px);
          }
        }
      `}</style>
    </section>
  );
}
