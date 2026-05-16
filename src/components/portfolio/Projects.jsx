"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    title: "DigiTools Platform",
    description:
      "A comprehensive digital tools platform offering a suite of online utilities — from image converters and code formatters to SEO analyzers and JSON validators. Built with a modern, responsive interface for seamless productivity.",
    image: "/project-digitools.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Node.js", "API"],
    liveUrl: "https://digitools.vercel.app",
    githubUrl: "https://github.com/abrar12678/digitools",
    featured: true,
  },
  {
    title: "QurbaniHut",
    description:
      "A full-featured platform for managing Qurbani services with animal listings, booking system, payment integration, and admin dashboard. Designed to simplify the Qurbani process during Eid with seamless user experience.",
    image: "/project-qurbanihut.png",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Express.js", "Auth"],
    liveUrl: "https://qurbanihut.vercel.app",
    githubUrl: "https://github.com/abrar12678/qurbanihut",
    featured: true,
  },
  {
    title: "Payoo Mobile Bank",
    description:
      "A modern mobile banking simulation with real-time transaction tracking, balance management, agent system, and responsive dashboard. Features REST API integration with a clean, intuitive interface.",
    image: "/project-payoo.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "REST API", "Responsive"],
    liveUrl: "https://payoo-mobile-bank.vercel.app",
    githubUrl: "https://github.com/abrar12678/payoo-mobile-bank",
    featured: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.15 * i,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00b4d8]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f72585]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#00b4d8]/80 font-semibold mb-3 px-4 py-1.5 rounded-full border border-[#00b4d8]/20 bg-[#00b4d8]/5">
            What I&apos;ve built
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-4">
            Recent <span className="gradient-text">Projects</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A selection of real-world projects showcasing full-stack development
            — from concept and design to deployment and delivery.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 0 30px rgba(0, 180, 216, 0.1), 0 20px 50px rgba(0, 0, 0, 0.3)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative rounded-2xl overflow-hidden transition-shadow duration-500"
              style={{
                background: "rgba(26, 26, 26, 0.8)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              {/* Card shimmer effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer rounded-2xl" />

              {/* Project Image */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} — Project Screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Only dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />

                {/* Floating action buttons on image */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 15px rgba(255, 255, 255, 0.15)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:border-white/25 hover:bg-black/70 transition-all duration-300 cursor-pointer"
                    aria-label="View source code on GitHub"
                  >
                    <GithubIcon size={16} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 15px rgba(0, 180, 216, 0.3)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-white/70 hover:text-[#00b4d8] hover:border-[#00b4d8]/40 hover:bg-black/70 transition-all duration-300 cursor-pointer"
                    aria-label="Visit live project"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6">
                {/* Title with arrow */}
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-[#00b4d8] transition-colors duration-300 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                  />
                </h4>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 cursor-default"
                      style={{
                        background: "rgba(0, 180, 216, 0.1)",
                        color: "#5cd8ec",
                        border: "1px solid rgba(0, 180, 216, 0.15)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  {/* GitHub Button — Outlined */}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow:
                        "0 0 20px rgba(255, 255, 255, 0.1), 0 8px 25px rgba(255, 255, 255, 0.05)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-white/10 text-muted-foreground hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 relative overflow-hidden group/gh cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/gh:translate-x-full transition-transform duration-600" />
                    <span className="relative z-10 flex items-center gap-2">
                      <GithubIcon size={15} /> GitHub
                    </span>
                  </motion.a>

                  {/* Live Site Button — Gradient */}
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 8px 25px rgba(0, 180, 216, 0.25)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-300 flex-1 justify-center relative overflow-hidden group/ls bg-gradient-to-r from-[#00b4d8] via-[#7c3aed] to-[#f72585]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/ls:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10 flex items-center gap-2">
                      <ExternalLink size={15} /> Live Site
                    </span>
                  </motion.a>
                </div>
              </div>

              {/* Bottom gradient accent line */}
              <div
                className="h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #00b4d8, #7c3aed, transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://github.com/abrar12678"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.06,
              boxShadow:
                "0 0 20px rgba(0, 180, 216, 0.25), 0 8px 30px rgba(0, 180, 216, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-[#00b4d8] border border-white/10 hover:border-[#00b4d8]/40 hover:bg-[#00b4d8]/8 transition-all duration-300 group cursor-pointer"
          >
            <GithubIcon
              size={16}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            View more projects on GitHub
            <ArrowUpRight
              size={14}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
