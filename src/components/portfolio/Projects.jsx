"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "DigiTools Platform",
    description:
      "A premium digital tools marketplace and SaaS platform where users can access, purchase, and use AI-powered productivity software, resume builders, career tools, and freelancer resources — all in one subscription hub.",
    image: "/project-digitools.png",
    tags: ["React", "Vite", "Tailwind CSS", "Toastify"],
    github: "https://github.com/abrar12678/digitools-platform",
    live: "https://abrar-digitools-platform.netlify.app/",
  },
  {
    title: "QurbaniHut",
    description:
      "A livestock e-commerce and booking platform designed for Eid ul-Adha in Bangladesh. Connects families with verified livestock sellers nationwide, featuring animal listings with pricing, health details, and delivery scheduling.",
    image: "/project-qurbanihut.png",
    tags: ["Next.js", "Tailwind CSS", "Turbopack", "Vercel"],
    github: "https://github.com/abrar12678/A-08-QurbaniHut",
    live: "https://a-08-qurbanihut.vercel.app/",
  },
  {
    title: "Payoo Mobile Bank",
    description:
      "A mobile banking fintech web application featuring secure mobile number and PIN-based authentication. Built with a mobile-first design approach, clean UI, and modern banking experience for digital financial services.",
    image: "/project-payoo.png",
    tags: ["HTML5", "CSS3", "JavaScript", "DaisyUI"],
    github: "https://github.com/abrar12678/project-payoo-mobile-bank",
    live: "https://abrar12678.github.io/project-payoo-mobile-bank/",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#f72585]/3 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#00b4d8]/3 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#00b4d8] font-medium mb-3">
            My Work
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Here are some of the projects I&apos;ve built recently. Each one
            represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl bg-secondary/20 border border-border hover:border-[#00b4d8]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#00b4d8] transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-[#00b4d8]/10 text-[#00b4d8] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-[#00b4d8]/30 transition-all"
                  >
                    <Globe size={14} /> GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00b4d8] to-[#7c3aed] text-white text-sm font-medium"
                  >
                    <ExternalLink size={14} /> Live Site
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
