"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Palette, Rocket, Coffee } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    label: "Years Experience",
    value: 1,
    suffix: "+",
    icon: Rocket,
    color: "#00b4d8",
  },
  {
    label: "Projects Completed",
    value: 10,
    suffix: "+",
    icon: Code2,
    color: "#7c3aed",
  },
  {
    label: "Technologies",
    value: 8,
    suffix: "+",
    icon: Palette,
    color: "#f72585",
  },
  {
    label: "Cups of Coffee",
    value: null,
    display: "∞",
    icon: Coffee,
    color: "#00b4d8",
  },
];

const codeLines = [
  { prefix: "const", body: " developer = {" },
  { indent: true, key: "name", value: '"Md Abrar Hasan"', comma: true },
  { indent: true, key: "role", value: '"Full Stack Dev"', comma: true },
  { indent: true, key: "passion", value: '"Building things"', comma: true },
  { indent: true, key: "available", value: "true", comma: false },
  { prefix: "}", body: "" },
];

const infoItems = [
  { label: "Name", value: "Md Abrar Hasan" },
  { label: "Email", value: "programmer.ab.etarnity@gmail.com" },
  { label: "Phone", value: "+880 1912-188976" },
  { label: "Availability", value: "Open to work" },
];

function AnimatedCounter({ value, suffix, isInView, display }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || value === null) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  if (value === null)
    return (
      <span className="text-3xl md:text-4xl font-bold gradient-text">
        {display}
      </span>
    );

  return (
    <span className="text-3xl md:text-4xl font-bold gradient-text">
      {count}
      {suffix}
    </span>
  );
}

function TypingCursor() {
  return (
    <motion.span
      className="inline-block w-[2px] h-[14px] bg-[#00b4d8] ml-0.5 align-middle"
      animate={{ opacity: [1, 0] }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        times: [0, 0.49, 0.5, 0.99],
        ease: "linear",
      }}
    />
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const codeCardRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timers = [];
    codeLines.forEach((_, i) => {
      timers.push(
        setTimeout(
          () => {
            setVisibleLines(i + 1);
          },
          800 + i * 200,
        ),
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-code-card",
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.4,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".about-code-card",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".about-info-item",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-info-grid",
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background decoration orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7c3aed]/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#00b4d8]/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#00b4d8] font-medium mb-3">
            Get to know me
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — Code card decoration */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div
              ref={codeCardRef}
              className="about-code-card relative w-full max-w-md rounded-2xl overflow-hidden glass-card"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">
                  developer.js
                </span>
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-[13px] leading-relaxed bg-black/20 min-h-[280px]">
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-muted-foreground/40 select-none mr-4 text-right w-4 shrink-0">
                      {i + 1}
                    </span>
                    <span>
                      {line.indent && <span className="ml-4" />}
                      {line.prefix && (
                        <span
                          className={
                            line.prefix === "const"
                              ? "text-[#c792ea]"
                              : "text-[#00b4d8]"
                          }
                        >
                          {line.prefix}
                        </span>
                      )}
                      {line.body && (
                        <span className="text-[#00b4d8]">{line.body}</span>
                      )}
                      {line.key && (
                        <>
                          <span className="text-[#82aaff]">{line.key}</span>
                          <span className="text-muted-foreground">: </span>
                          <span className="text-[#c3e88d]">{line.value}</span>
                          {line.comma && (
                            <span className="text-muted-foreground">,</span>
                          )}
                        </>
                      )}
                      {i === visibleLines - 1 && <TypingCursor />}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative grid lines */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
          </motion.div>

          {/* Right column — Bio + Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I&apos;m a passionate{" "}
              <span className="text-foreground font-medium">
                Full Stack Developer
              </span>{" "}
              with 1+ year of hands-on experience building modern, scalable web
              applications. My journey started with a curiosity about how
              websites work, and it quickly grew into a deep love for creating
              beautiful, functional digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I specialize in building applications with{" "}
              <span className="text-[#00b4d8] font-medium">HTML</span>,{" "}
              <span className="text-[#7c3aed] font-medium">CSS</span>,{" "}
              <span className="text-[#f72585] font-medium">JavaScript</span>,{" "}
              <span className="text-[#00b4d8] font-medium">React</span>,{" "}
              <span className="text-[#7c3aed] font-medium">Next.js</span>, and{" "}
              <span className="text-[#f72585] font-medium">Node.js</span>, with
              a strong focus on performance, accessibility, and clean code. I
              believe great software is not just about writing code &mdash;
              it&apos;s about solving real problems for real people.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing my
              knowledge through tech blog posts and community meetups. I&apos;m
              always eager to learn and take on new challenges.
            </p>

            {/* Info grid */}
            <div className="about-info-grid grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {infoItems.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow:
                      "0 0 20px rgba(0, 180, 216, 0.1), 0 8px 25px rgba(0, 0, 0, 0.2)",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="about-info-item p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#00b4d8]/25 transition-all duration-300 hover:bg-white/[0.05] cursor-default"
                >
                  <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                    {info.label}
                  </span>
                  <p className="text-sm font-medium text-foreground break-all">
                    {info.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{
                y: -10,
                scale: 1.06,
                boxShadow: `0 0 30px ${stat.color}20, 0 0 60px ${stat.color}10, 0 15px 40px rgba(0,0,0,0.3)`,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative text-center p-6 sm:p-8 rounded-2xl glass-card overflow-hidden cursor-default"
            >
              {/* Gradient border glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 30px ${stat.color}15, 0 0 60px ${stat.color}08, inset 0 0 30px ${stat.color}05`,
                }}
              />

              {/* Top gradient line on hover */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] transition-all duration-500 rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                }}
              />

              {/* Bottom gradient line on hover */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] transition-all duration-500 rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                }}
              />

              {/* Radial glow behind icon */}
              <div
                className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundColor: stat.color }}
              />

              <div className="relative">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${stat.color}10` }}
                >
                  <stat.icon
                    size={22}
                    className="transition-colors duration-300"
                    style={{ color: stat.color }}
                  />
                </div>
                <div className="mb-1.5">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={statsInView}
                    display={stat.display}
                  />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
