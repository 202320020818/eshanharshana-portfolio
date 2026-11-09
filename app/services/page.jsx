"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const githubProfile = "https://github.com/202320020818";

const services = [
  {
    num: "01",
    title: "Front-End Development",
    description:
      "Building polished, responsive interfaces with React, Next.js, HTML, CSS, and modern interaction design.",
    github: "https://github.com/202320020818/sleep-tracker-next-2",
    image: "/assets/front2.png",
    stack: ["React", "Next.js", "Tailwind"],
    highlights: ["Responsive layouts", "Interactive UI", "Modern component design"],
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Designing clean, user-focused interfaces that balance usability, clarity, and visual identity.",
    github: "https://github.com/202320020818/Mobile_App_UI_figma-4",
    image: "/assets/UIUX.png",
    stack: ["Wireframing", "Visual Design", "User Flows"],
    highlights: ["User-centered thinking", "Visual hierarchy", "Smooth experiences"],
  },
  {
    num: "03",
    title: "Back-End Development",
    description:
      "Creating secure server-side logic, APIs, authentication flows, and database-driven systems for scalable apps.",
    github: "https://github.com/202320020818/Fruit-and-sweets_Only_my_Part-1",
    image: "/assets/backend.png",
    stack: ["Node.js", "Express", "MongoDB"],
    highlights: ["REST APIs", "Authentication", "Database integration"],
  },
  {
    num: "04",
    title: "Web Development",
    description:
      "Delivering complete web applications from concept to deployment with modern tools and production-ready structure.",
    github: "https://github.com/202320020818/sleep-tracker-next-2",
    image: "/assets/development.png",
    stack: ["Frontend", "Backend", "Deployment"],
    highlights: ["End-to-end builds", "Fast performance", "Practical solutions"],
  },
  {
    num: "05",
    title: "Project Management",
    description:
      "Organizing features, timelines, and collaboration so projects move clearly and efficiently from idea to delivery.",
    github: "https://github.com/202320020818",
    image: "/assets/projectM2.png",
    stack: ["Planning", "Coordination", "Delivery"],
    highlights: ["Clear milestones", "Task ownership", "Reliable execution"],
  },
  {
    num: "06",
    title: "Full-Stack Development",
    description:
      "Handling both client and server layers to build complete applications that are functional, scalable, and user-friendly.",
    github: "https://github.com/202320020818/ai-image-editor-saas-app-9",
    image: "/assets/full.png",
    stack: ["Next.js", "Node.js", "SQL"],
    highlights: ["Integrated systems", "Clean architecture", "Production mindset"],
  },
  {
    num: "07",
    title: "Software Engineering",
    description:
      "Applying engineering principles to build maintainable software with clean structure, testing awareness, and long-term quality.",
    github: "https://github.com/202320020818/Portfolio-App",
    image: "/assets/software.png",
    stack: ["Architecture", "Maintainability", "Quality"],
    highlights: ["Structured code", "Reliable patterns", "Scalable thinking"],
  },
  {
    num: "08",
    title: "Mobile App Development",
    description:
      "Building efficient Android experiences with Kotlin and mobile-first thinking focused on performance and usability.",
    github: "https://github.com/202320020818/Finance_Tracker-3",
    image: "/assets/mobile.jpg",
    stack: ["Kotlin", "Android", "Mobile UI"],
    highlights: ["Android apps", "Practical flows", "Smooth mobile UX"],
  },
  {
    num: "09",
    title: "Data Science Related",
    description:
      "Exploring data analysis, insight extraction, and predictive thinking using programming and analytical workflows.",
    github: "https://github.com/202320020818",
    image: "/assets/PowerBI.png",
    stack: ["Python", "Data Analysis", "ML Basics"],
    highlights: ["Insight discovery", "Pattern analysis", "Model experimentation"],
  },
  {
    num: "10",
    title: "IT Related",
    description:
      "Supporting broader IT needs including troubleshooting, tool setup, system understanding, and practical tech problem-solving.",
    github: "https://github.com/202320020818/Spring_java_7",
    showGithub: false,
    image: "/assets/IT.png",
    stack: ["Troubleshooting", "Support", "Systems"],
    highlights: ["Technical support", "System setup", "Problem resolution"],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,180,151,0.22),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_22%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[36px] border border-white/10 bg-[#0f1219]/85 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8"
        >
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -14, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-12 top-10 h-24 w-24 rounded-full bg-accent/10 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -18, 0], y: [0, 16, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute bottom-10 left-10 h-28 w-28 rounded-full bg-white/5 blur-3xl"
          />

          <div className="grid gap-8 border-b border-white/10 pb-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="text-sm uppercase tracking-[0.35em] text-accent/80"
              >
                Services
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.55 }}
                className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl"
              >
                Beautiful service cards with
                <motion.span
                  animate={{ opacity: [0.75, 1, 0.75] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="block text-accent"
                >
                  real work showcase
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.55 }}
                className="mt-5 max-w-2xl text-base leading-8 text-white/70"
              >
                This section now highlights what you do, links visitors to your
                GitHub, and gives space to show screenshots or photos from the
                projects related to each service.
              </motion.p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                  Portfolio Link
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  GitHub Profile Connected
                </p>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  Every action button now navigates to your GitHub profile.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[28px] border border-accent/25 bg-accent/10 p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-accent/90">
                  Showcase Ready
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Add your project screenshots
                </p>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Replace the preview images later with real screenshots from
                  your work for each service.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.article
                key={service.num}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/45 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.05))] hover:shadow-[0_20px_60px_rgba(56,180,151,0.12)]"
              >
                <div className="relative h-40 overflow-hidden border-b border-white/10">
                  <Image
                    src={service.image}
                    alt={`${service.title} preview`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12]/55 via-[#0f1219]/20 to-transparent" />
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.1 }}
                    className="absolute left-4 top-4 inline-flex rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm"
                  >
                    {service.num}
                  </motion.div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <div className="max-w-[calc(100%-4.5rem)] rounded-2xl border border-white/12 bg-black/18 px-4 py-2.5 backdrop-blur-sm">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-accent/80">
                        Work Preview
                      </p>
                      <h2 className="mt-1.5 line-clamp-2 text-[1.25rem] font-semibold leading-tight text-white">
                        {service.title}
                      </h2>
                    </div>

                    <Link
                      href={service.github || githubProfile}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/95 text-black shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105 hover:border-accent hover:bg-accent"
                    >
                      <motion.span
                        whileHover={{ rotate: 45, scale: 1.05 }}
                        className="flex"
                      >
                        <BsArrowUpRight className="text-lg" />
                      </motion.span>
                    </Link>
                  </div>
                </div>

                <div className="p-4">
                  <p className="line-clamp-2 text-sm leading-6 text-white/66">
                    {service.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.stack.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ y: -2 }}
                        className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-white/76"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  {service.showGithub !== false && (
                    <div className="mt-4 border-t border-white/10 pt-3">
                      <Link
                        href={service.github || githubProfile}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all duration-300 hover:border-accent hover:bg-accent hover:text-black"
                      >
                        <BsGithub className="text-sm" />
                        View on GitHub
                      </Link>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
