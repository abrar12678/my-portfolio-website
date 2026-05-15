"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Palette, Rocket, Coffee } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years Experience", value: "1+", icon: Rocket },
  { label: "Projects Completed", value: "10+", icon: Code2 },
  { label: "Technologies", value: "8+", icon: Palette },
  { label: "Cups of Coffee", value: "∞", icon: Coffee },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-image-wrapper",
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".about-image-wrapper",
            start: "top 80%",
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
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-image-wrapper relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#0d1b3e]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00b4d8]/10 to-[#7c3aed]/10" />
              <div className="absolute top-8 left-8 w-20 h-20 border border-[#00b4d8]/30 rounded-lg rotate-12" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border border-[#7c3aed]/30 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#f72585]/20 rounded-2xl rotate-45" />
              <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-sm rounded-xl p-4 font-mono text-xs">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-[#00b4d8]">
                  <span className="text-[#7c3aed]">const</span> developer ={" "}
                  {"{"}
                </div>
                <div className="ml-4 text-muted-foreground">
                  name:{" "}
                  <span className="text-green-400">
                    &quot;Md Abrar Hasan&quot;
                  </span>
                  ,
                </div>
                <div className="ml-4 text-muted-foreground">
                  role:{" "}
                  <span className="text-green-400">
                    &quot;Full Stack Dev&quot;
                  </span>
                  ,
                </div>
                <div className="ml-4 text-muted-foreground">
                  passion:{" "}
                  <span className="text-green-400">
                    &quot;Building things&quot;
                  </span>
                  ,
                </div>
                <div className="text-[#00b4d8]">{"}"}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
              <span className="text-[#00b4d8] font-medium">CSS</span>,{" "}
              <span className="text-[#00b4d8] font-medium">JavaScript</span>,{" "}
              <span className="text-[#00b4d8] font-medium">React</span>,{" "}
              <span className="text-[#00b4d8] font-medium">Next.js</span>, and{" "}
              <span className="text-[#00b4d8] font-medium">Node.js</span>, with
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

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Name", value: "Md Abrar Hasan" },
                { label: "Email", value: "programmer.ab.etarnity@gmail.com" },
                { label: "Phone", value: "+880 1912-188976" },
                { label: "Availability", value: "Open to work" },
              ].map((info) => (
                <div key={info.label} className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {info.label}
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-center p-6 rounded-2xl bg-secondary/30 border border-border hover:border-[#00b4d8]/30 transition-all duration-300 group"
            >
              <stat.icon
                size={24}
                className="mx-auto mb-3 text-[#00b4d8] group-hover:scale-110 transition-transform duration-300"
              />
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
