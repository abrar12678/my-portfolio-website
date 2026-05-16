"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "Diploma in Engineering (CSE)",
    institution: "Khulna Polytechnic Institute",
    location: "Khulna, Bangladesh",
    period: "2025 - Present",
    description:
      "Currently pursuing Diploma Engineering in Computer Science and Engineering. Gaining in-depth knowledge of programming, data structures, algorithms, web development, database management, and software engineering fundamentals. Actively participating in coding competitions and practical lab projects.",
    highlights: [
      "Running",
      "Computer Science & Engineering",
      "Lab Projects & Coding Competitions",
    ],
    dotColor: "#00b4d8",
    accentColor: "#00b4d8",
  },
  {
    degree: "Self-Taught Full Stack Development",
    institution: "Online Learning Platforms",
    location: "Remote",
    period: "2024 - Present",
    description:
      "Completed extensive self-study in full stack web development through online courses, documentation, and hands-on project building. Mastered HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, and MongoDB through real-world projects.",
    highlights: [
      "1+ Year of Practice",
      "10+ Projects Built",
      "Continuous Learning",
    ],
    dotColor: "#f72585",
    accentColor: "#f72585",
  },
];

function PulsingDot({ color }) {
  return (
    <div className="absolute left-[11px] md:left-1/2 -translate-x-1/2 top-0 z-10">
      {/* Outer pulse ring */}
      <motion.div
        className="absolute -inset-[6px] rounded-full"
        style={{ border: `2px solid ${color}40` }}
        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      {/* Second pulse ring — delayed */}
      <motion.div
        className="absolute -inset-[6px] rounded-full"
        style={{ border: `1px solid ${color}30` }}
        animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.8,
        }}
      />
      {/* Dot border */}
      <div
        className="w-[22px] h-[22px] rounded-full bg-background flex items-center justify-center"
        style={{ border: `2px solid ${color}` }}
      >
        {/* Inner fill */}
        <motion.div
          className="w-[10px] h-[10px] rounded-full"
          style={{ backgroundColor: color }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export default function Education() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!timelineRef.current) return;

      // Animate the timeline line fill
      const lineFill = timelineRef.current.querySelector(".timeline-line-fill");
      if (lineFill) {
        gsap.fromTo(
          lineFill,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 70%",
              end: "bottom 50%",
              scrub: 1,
            },
          },
        );
      }

      // Staggered entrance for each card
      const cards = timelineRef.current.querySelectorAll(".edu-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, x: i % 2 === 0 ? -20 : 20 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#7c3aed]/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#00b4d8]/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#00b4d8] font-medium mb-3">
            My Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Educational <span className="gradient-text">Qualification</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            A continuous learning path that shaped my skills and expertise in
            software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto" ref={timelineRef}>
          <div className="relative">
            {/* Timeline gradient line */}
            <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/[0.04]">
              <div
                className="timeline-line-fill w-full h-full rounded-full origin-top"
                style={{
                  background:
                    "linear-gradient(180deg, #00b4d8, #7c3aed 50%, #f72585)",
                }}
              />
            </div>

            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.degree}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-8 mb-14 last:mb-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Pulsing dot */}
                  <PulsingDot color={item.dotColor} />

                  {/* Card */}
                  <div
                    className={`flex-1 ml-14 md:ml-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                  >
                    <div className="relative group/edu">
                      {/* ===== ALWAYS VISIBLE Rotating Gradient Border ===== */}
                      <div
                        className="absolute -inset-[2px] rounded-2xl pointer-events-none"
                        style={{
                          background:
                            "conic-gradient(from var(--gradient-angle), #00b4d8, #7c3aed, #f72585, #64ffda, #ffbe0b, #00b4d8)",
                          animation: "border-spin 3s linear infinite",
                        }}
                      />
                      {/* Outer glow (always visible, subtle) */}
                      <div
                        className="absolute -inset-[2px] rounded-2xl pointer-events-none"
                        style={{
                          boxShadow: `0 0 15px ${item.accentColor}15, 0 0 30px ${item.accentColor}08`,
                          transition: "box-shadow 0.5s ease",
                        }}
                      />
                      {/* Enhanced glow on hover */}
                      <div
                        className="absolute -inset-[2px] rounded-2xl pointer-events-none opacity-0 group-hover/edu:opacity-100 transition-opacity duration-500"
                        style={{
                          boxShadow: `0 0 25px ${item.accentColor}25, 0 0 50px ${item.accentColor}12, 0 0 80px ${item.accentColor}06`,
                        }}
                      />
                      <motion.div
                        whileHover={{
                          y: -8,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          },
                        }}
                        className="edu-card relative p-6 rounded-[14px] overflow-hidden cursor-default"
                        style={{
                          background: "rgba(12, 12, 18, 0.95)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                        }}
                      >
                        {/* Shimmer overlay on hover */}
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/edu:opacity-100 transition-opacity duration-700 shimmer rounded-[14px]" />

                        {/* Tags row */}
                        <div
                          className={`flex items-center gap-2 mb-4 flex-wrap ${isEven ? "md:justify-end" : ""}`}
                        >
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 cursor-default"
                            style={{
                              background: `linear-gradient(135deg, ${item.accentColor}15, ${item.accentColor}08)`,
                              color: item.accentColor,
                              border: `1px solid ${item.accentColor}20`,
                            }}
                          >
                            <Calendar size={12} />
                            {item.period}
                          </span>
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 cursor-default"
                            style={{
                              background: `linear-gradient(135deg, #7c3aed15, #7c3aed08)`,
                              color: "#7c3aed",
                              border: `1px solid #7c3aed20`,
                            }}
                          >
                            <MapPin size={12} />
                            {item.location}
                          </span>
                        </div>

                        {/* Degree */}
                        <h4 className="text-lg font-bold text-foreground mb-1 transition-colors duration-300">
                          <span className="group-hover/edu:text-white transition-colors duration-300">
                            {item.degree}
                          </span>
                        </h4>
                        <p
                          className="text-sm font-medium mb-3 transition-colors duration-300 group-hover/edu:text-white/80"
                          style={{ color: item.accentColor }}
                        >
                          {item.institution}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 group-hover/edu:text-muted-foreground/90 transition-colors duration-300">
                          {item.description}
                        </p>

                        {/* Highlight pills */}
                        <div
                          className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}
                        >
                          {item.highlights.map((highlight, hIdx) => (
                            <motion.span
                              key={highlight}
                              whileHover={{ scale: 1.08, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 cursor-default hover:shadow-lg"
                              style={{
                                background: `linear-gradient(135deg, ${hIdx % 2 === 0 ? "#00b4d8" : "#7c3aed"}10, ${hIdx % 2 === 0 ? "#00b4d8" : "#7c3aed"}05)`,
                                color: hIdx % 2 === 0 ? "#00b4d8" : "#7c3aed",
                                border: `1px solid ${hIdx % 2 === 0 ? "#00b4d8" : "#7c3aed"}15`,
                              }}
                            >
                              {highlight}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== Gradient border animation keyframes ===== */}
      <style jsx global>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes border-spin {
          to {
            --gradient-angle: 360deg;
          }
        }
      `}</style>
    </section>
  );
}
