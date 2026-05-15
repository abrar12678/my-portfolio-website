"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HtmlIcon = () => (
  <svg viewBox="0 0 128 128" className="w-7 h-7">
    <path
      fill="#E44D26"
      d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
    />
    <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
    <path
      fill="#EBEBEB"
      d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
    />
    <path
      fill="#fff"
      d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
    />
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 128 128" className="w-7 h-7">
    <path
      fill="#1572B6"
      d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
    />
    <path
      fill="#33A9DC"
      d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
    />
    <path
      fill="#fff"
      d="M64.001 51.429h18.302l1.264-14.163H64.001V24.208h34.682l-.332 3.711-3.4 38.114H64.001v-14.604z"
    />
    <path
      fill="#EBEBEB"
      d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
    />
    <path
      fill="#fff"
      d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
    />
    <path
      fill="#EBEBEB"
      d="M64.048 24.208v13.058H30.64l-.277-3.108-.63-7.045-.331-2.905h34.646zm-.047 27.221v13.058H48.792l-.277-3.108-.631-7.045-.33-2.905h16.447z"
    />
  </svg>
);

const JsIcon = () => (
  <svg viewBox="0 0 128 128" className="w-7 h-7">
    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.184H1.408z" />
    <path
      fill="#323330"
      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
    />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 128 128" className="w-7 h-7">
    <g fill="#61DAFB">
      <circle cx="64" cy="64" r="11.4" />
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.3-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.3.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 12.9-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.5zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-12.9 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.5zm9.9-28.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
    </g>
  </svg>
);

const NextjsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
    <path
      d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727zM16.8 7.2h-1.6v9.6h1.6V7.2z"
      fill="#808080"
    />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
    <path
      d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.15-.023.218.017l2.255 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242L12.137 1.607a.278.278 0 0 0-.27 0L3.077 6.68a.28.28 0 0 0-.139.24v10.15c0 .099.053.19.138.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675A1.857 1.857 0 0 1 1.36 17.07V6.921c0-.645.344-1.248.921-1.572L11.076.272a1.927 1.927 0 0 1 1.846 0l8.794 5.077c.577.324.922.927.922 1.572v10.15a1.86 1.86 0 0 1-.922 1.573l-8.794 5.077a1.836 1.836 0 0 1-.924.257z"
      fill="#339933"
    />
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
    <path
      d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.511 4.86 3.556-4.86a1.47 1.47 0 0 1 1.822-.676l-5.22 6.95 5.021 6.597zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933C.6 15.997-.002 14.65.002 13.074V11.576zm1.145-.526h9.334c-.078-3.075-2.001-5.252-4.746-5.28-3.05-.03-4.735 2.074-4.588 5.28z"
      fill="#808080"
    />
  </svg>
);

const MongodbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
    <path
      d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
      fill="#47A248"
    />
  </svg>
);

const technologies = [
  {
    name: "HTML5",
    description:
      "Building semantic, accessible, and SEO-optimized web pages with modern HTML5 standards and best practices.",
    icon: HtmlIcon,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    description:
      "Crafting responsive, visually stunning layouts with Flexbox, Grid, animations, and modern CSS features.",
    icon: CssIcon,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    description:
      "Writing clean, efficient JavaScript with ES6+ features, DOM manipulation, and asynchronous programming.",
    icon: JsIcon,
    color: "#F7DF1E",
  },
  {
    name: "React",
    description:
      "Building dynamic, component-based user interfaces with hooks, state management, and modern React patterns.",
    icon: ReactIcon,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    description:
      "Creating fast, SEO-friendly full-stack web applications with server-side rendering and API routes.",
    icon: NextjsIcon,
    color: "#ffffff",
  },
  {
    name: "Node.js",
    description:
      "Developing robust server-side applications and RESTful APIs with Node.js runtime environment.",
    icon: NodeIcon,
    color: "#339933",
  },
  {
    name: "Express.js",
    description:
      "Building scalable backend services with Express.js middleware, routing, and authentication patterns.",
    icon: ExpressIcon,
    color: "#ffffff",
  },
  {
    name: "MongoDB",
    description:
      "Designing flexible NoSQL database schemas with Mongoose ODM, aggregation pipelines, and indexing strategies.",
    icon: MongodbIcon,
    color: "#47A248",
  },
];

export default function TechStack() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="techstack"
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#00b4d8]/3 blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#f72585]/3 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#00b4d8] font-medium mb-3">
            What I work with
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Technologies and tools I use to bring ideas to life, from concept to
            production-ready applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-secondary/20 border border-border hover:border-transparent transition-all duration-500 cursor-default overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${tech.color}15, transparent 70%)`,
                  }}
                />
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${tech.color}15` }}
                >
                  <IconComponent />
                </div>
                <h4 className="relative text-base font-semibold text-foreground mb-2 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </h4>
                <p className="relative text-sm text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{
                    background: `linear-gradient(90deg, ${tech.color}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
