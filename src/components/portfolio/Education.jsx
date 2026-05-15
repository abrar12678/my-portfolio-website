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
  },
];

export default function Education() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!timelineRef.current) return;
      const lines = timelineRef.current.querySelectorAll(".timeline-line-fill");
      lines.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "bottom 60%",
              scrub: 1,
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#7c3aed]/3 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="max-w-4xl mx-auto" ref={timelineRef}>
          <div className="relative">
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
              <div className="timeline-line-fill w-full h-full bg-gradient-to-b from-[#00b4d8] via-[#7c3aed] to-[#f72585] origin-top rounded-full" />
            </div>
            {educationData.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-[11px] md:left-1/2 -translate-x-1/2 top-0 w-[18px] h-[18px] rounded-full bg-background border-2 border-[#00b4d8] z-10">
                  <div className="absolute inset-[3px] rounded-full bg-[#00b4d8]" />
                </div>
                <div
                  className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="p-6 rounded-2xl bg-secondary/20 border border-border hover:border-[#00b4d8]/30 transition-all duration-300 group"
                  >
                    <div
                      className={`flex items-center gap-2 mb-3 flex-wrap ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00b4d8]/10 text-[#00b4d8] text-xs font-medium">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-xs font-medium">
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-[#00b4d8] transition-colors">
                      {item.degree}
                    </h4>
                    <p className="text-sm font-medium text-[#00b4d8] mb-3">
                      {item.institution}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2.5 py-1 rounded-lg bg-secondary/50 text-xs text-muted-foreground border border-border"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
