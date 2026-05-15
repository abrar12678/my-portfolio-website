"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, Globe, Link2, Mail, Phone, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

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
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3",
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
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#00b4d8]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-[#7c3aed]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#f72585]/3 blur-[150px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div className="hero-greeting inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">
                Available for freelance work
              </span>
            </motion.div>

            <h1
              ref={nameRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-muted-foreground text-xl sm:text-2xl md:text-3xl font-normal block mb-2">
                Hello, I&apos;m
              </span>
              <span className="gradient-text">Md Abrar Hasan</span>
            </h1>

            <p
              ref={taglineRef}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              A passionate{" "}
              <span className="text-foreground font-medium">
                Full Stack Developer
              </span>{" "}
              crafting scalable, modern web experiences with clean code and
              cutting-edge technologies.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#7c3aed] text-white font-medium text-sm hover:shadow-xl hover:shadow-[#00b4d8]/20 transition-shadow duration-300 flex items-center gap-2"
              >
                View Projects
                <ArrowDown size={16} />
              </motion.a>

              <motion.a
                href="mailto:programmer.ab.etarnity@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full border border-[#f72585]/30 text-[#f72585] font-medium text-sm hover:bg-[#f72585]/10 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={16} />
                Contact Me
              </motion.a>
            </div>

            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Find me on
              </span>
              <div className="w-8 h-px bg-border" />
              {[
                {
                  icon: Globe,
                  href: "https://github.com/abrar12678",
                  label: "GitHub",
                },
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
                {
                  icon: Phone,
                  href: "https://wa.me/01912188976",
                  label: "WhatsApp",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg text-muted-foreground hover:text-[#00b4d8] hover:bg-[#00b4d8]/10 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#7c3aed] to-[#f72585] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse" />
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#7c3aed] to-[#f72585] opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-[spin_8s_linear_infinite]"
                style={{ animation: "spin 8s linear infinite" }}
              />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-background">
                <Image
                  src="/profile.png"
                  alt="Md Abrar Hasan - Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 top-8 px-3 py-2 rounded-xl bg-secondary/90 backdrop-blur-sm border border-border shadow-lg"
              >
                <span className="text-xs font-medium">1+ Year Exp.</span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-4 bottom-12 px-3 py-2 rounded-xl bg-secondary/90 backdrop-blur-sm border border-border shadow-lg"
              >
                <span className="text-xs font-medium">10+ Projects</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown size={16} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
}
