"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "about", label: "About Me", eyebrow: "Profile Overview" },
  { id: "education", label: "Education", eyebrow: "Academic Journey" },
  { id: "skills", label: "Skills", eyebrow: "Technical Stack" },
];

const stats = [
  { value: "3+", label: "Years learning and building" },
  { value: "20+", label: "Technologies explored" },
  { value: "Full Stack", label: "Development focus" },
];

const educationItems = [
   {
    title: "BSc (Hons) in Information Technology - SLIIT",
    period: "May 2023 - Present",
    subtitle: "Undergraduate",
    detail: "Specializing in Information Technology",
  },
    {
    title: "Dharmasoka College, Ambalangoda",
    period: "2022 (2023)",
    subtitle: "G.C.E. Advanced Level – Physical Science Stream",
    detail: "Grades: Combined Mathematics (C), Chemistry (B), Physics (S)",
  },
  {
    title: "Dharmasoka College, Ambalangoda",
    period: "2021 (2022)",
    subtitle: "G.C.E. Advanced Level – Physical Science Stream",
    detail: "Grades: Combined Mathematics (C), Chemistry (C), Physics (S)",
  },

];

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PHP", "Spring Boot", ".NET"],
  },
  {
    title: "Mobile and Languages",
    items: ["Java", "Kotlin", "TypeScript", "Python"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "Oracle", "SQL", "MongoDB", "Neon"],
  },
  {
    title: "Tools and Platforms",
    items: [
      "Git",
      "Firebase",
      "Clerk",
      "AWS",
      "Azure",
      "Redux",
      "Prisma",
      "VS Code",
      "IntelliJ IDEA",
      "Android Studio",
      "PyCharm",
    ],
  },
];

export default function Resume() {
  const [activeSection, setActiveSection] = useState("about");

  const activeSectionData =
    sections.find((section) => section.id === activeSection) || sections[0];

  const sectionMotion = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.35, ease: "easeOut" },
  };

  return (
    <section className="relative overflow-hidden px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,180,151,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_25%)]" />

      <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
        <motion.aside
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          <motion.div
            animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-accent/80">
                Resume
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Eshan
                <span className="block text-accent">Harshana</span>
              </h1>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
                Information Technology undergraduate focused on building
                elegant, scalable web and mobile experiences with a calm,
                disciplined, problem-solving mindset.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <p className="text-2xl font-semibold text-accent">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-white/65">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-accent/25 bg-accent/10 p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                Core Strengths
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Clean Code",
                  "REST APIs",
                  "Problem Solving",
                  "Full-Stack Apps",
                  "Continuous Learning",
                ].map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ y: -2 }}
                    className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs text-white/80"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <div className="border-t border-white/10 pt-5 text-sm text-white/60">
              <p>Based in Sri Lanka</p>
              <p className="mt-2">
                Passionate about turning ideas into user-friendly digital
                products.
              </p>
            </div>
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="rounded-[32px] border border-white/10 bg-[#11131a]/85 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6"
        >
          <div className="flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-accent/80">
                {activeSectionData.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                {activeSectionData.label}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {sections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-accent bg-accent text-black shadow-[0_12px_30px_rgba(56,180,151,0.35)]"
                        : "border-white/10 bg-white/5 text-white/75 hover:border-white/25 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="block text-xs uppercase tracking-[0.25em]">
                      0
                      {sections.findIndex((item) => item.id === section.id) + 1}
                    </span>
                    <span className="mt-2 block text-base font-semibold">
                      {section.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="pt-6">
            <AnimatePresence mode="wait">
              {activeSection === "about" && (
                <motion.div
                  key="about"
                  {...sectionMotion}
                  className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_320px]"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="space-y-5 rounded-[28px] border border-white/10 bg-white/5 p-6"
                  >
                    <p className="text-base leading-8 text-white/75">
                      I am Eshan Harshana, an Information Technology
                      undergraduate at SLIIT with a disciplined and responsible
                      mindset.
                    </p>
                    <p className="text-base leading-8 text-white/75">
                      I enjoy learning new technologies, solving challenges, and
                      turning ideas into practical digital solutions.
                    </p>
                    <p className="text-base leading-8 text-white/75">
                      My focus includes web and mobile development, full-stack
                      systems, CRUD flows, auth, and REST APIs with clean code.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-[28px] border border-white/10 bg-gradient-to-br from-accent/20 via-white/5 to-transparent p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                      Snapshot
                    </p>
                    <div className="mt-6 space-y-4">
                      {[
                        ["Role", "Software Developer"],
                        ["Degree", "BSc (Hons) IT"],
                        ["Focus", "Web and Mobile Apps"],
                        ["Approach", "Elegant + Practical"],
                      ].map(([label, value], index) => (
                        <motion.div
                          key={label}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 * index, duration: 0.35 }}
                          whileHover={{ x: 4 }}
                          className="rounded-2xl border border-white/10 bg-black/20 p-4"
                        >
                          <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                            {label}
                          </p>
                          <p className="mt-2 text-lg font-semibold text-white">
                            {value}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeSection === "education" && (
                <motion.div
                  key="education"
                  {...sectionMotion}
                  className="space-y-5"
                >
                  {educationItems.map((item, index) => (
                    <motion.div
                      key={`${item.title}-${item.period}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.35 }}
                      whileHover={{ y: -5 }}
                      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-white/7"
                    >
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-transparent" />
                      <div className="flex flex-col gap-4 pl-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                            Step 0{index + 1}
                          </p>
                          <h3 className="mt-3 text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-white/65">{item.subtitle}</p>
                        </div>
                        <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
                          {item.period}
                        </div>
                      </div>
                      <p className="mt-4 pl-4 text-base leading-7 text-white/72">
                        {item.detail}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeSection === "skills" && (
                <motion.div
                  key="skills"
                  {...sectionMotion}
                  className="grid gap-5 xl:grid-cols-2"
                >
                  {skillGroups.map((group, index) => (
                    <motion.div
                      key={group.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.35 }}
                      whileHover={{ y: -4 }}
                      className="rounded-[28px] border border-white/10 bg-white/5 p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                        {group.title}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {group.items.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ y: -3 }}
                            className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-medium text-white/85 transition duration-300 hover:border-accent/40 hover:bg-accent hover:text-black"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
