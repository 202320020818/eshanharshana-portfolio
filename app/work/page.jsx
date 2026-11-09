"use client";

import { motion } from "framer-motion";

const journey = [
  {
    period: "2023 - Present",
    title: "Personal Software Projects",
    type: "Independent Builder",
    description:
      "Building personal and academic apps to sharpen my full-stack, UI, and mobile skills.",
    points: [
      "Built portfolio and project apps with modern web tools",
      "Practiced CRUD, auth, APIs, and responsive design",
      "Turned ideas into clean, usable digital products",
    ],
  },
  {
    period: "Now",
    title: "Seeking Internship Opportunity",
    type: "Career Goal",
    description:
      "Looking for an internship where I can learn fast, contribute well, and grow into a long-term role.",
    points: [
      "Ready to learn fast and adapt to team workflows",
      "Open to frontend, backend, and full-stack roles",
      "Working toward a long-term software career",
    ],
  },
];

const strengths = [
  "Responsible and disciplined",
  "Fast with new tools",
  "Builds practical software",
  "Focused on long-term growth",
];

const focusAreas = [
  {
    title: "What I Bring",
    intro: "How I work.",
    items: ["Consistency", "Ownership", "Fast learning", "Team mindset"],
  },
  
  {
    title: "What I Am Looking For",
    intro: "The kind of opportunity I want next.",
    items: [
      "Internship",
      "Mentorship",
      "Industry exposure",
      "Permanent growth path",
    ],
  },
];

const Work = () => {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,180,151,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_22%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-[36px] border border-white/10 bg-[#10131a]/85 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-8 border-b border-white/10 pb-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-accent/80">
                Experience Journey
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Building experience through
                <span className="block text-accent">
                  real projects and steady growth
                </span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
                I am still growing into my first formal role. This page focuses
                on my software projects, practical skills, and internship goal.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-white/7">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                  Current Status
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Internship Seeker
                </p>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  Looking for a place to learn, contribute, and grow.
                </p>
              </div>

              <div className="rounded-[28px] border border-accent/25 bg-accent/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-accent/15">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/90">
                  Career Direction
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Internship to Permanent Job
                </p>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Turning projects and learning into a strong career path.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_380px]">
            <div className="space-y-5">
              {journey.map((item, index) => (
                <motion.article
                  key={`${item.title}-${item.period}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.45 }}
                  className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(56,180,151,0.10)]"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-transparent" />

                  <div className="pl-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                          {item.type}
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                          {item.title}
                        </h2>
                      </div>

                      <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
                        {item.period}
                      </div>
                    </div>

                    <p className="mt-5 text-base leading-8 text-white/72">
                      {item.description}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm leading-7 text-white/72 transition-all duration-300 hover:border-accent/30 hover:bg-[#11151d]"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}

            </div>

            <div className="space-y-5">
              <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-accent/18 via-white/5 to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/85">
                  Honest Positioning
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Real experience, clearly presented
                </h3>
                <p className="mt-4 text-sm leading-8 text-white/72">
                  This page stays honest and focused on what I have truly done:
                  self-driven projects, practical skills, and a clear next step
                  into an internship.
                </p>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.07]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                      Strengths
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      Core strengths at a glance
                    </h3>
                  </div>
                  <div className="rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-accent/85">
                    Snapshot
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  {strengths.map((item, index) => (
                    <div
                      key={item}
                      className="group rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-4 py-4 transition-all duration-300 hover:border-accent/35 hover:bg-accent/10"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/12 text-sm font-semibold text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-black">
                          0{index + 1}
                        </span>
                        <p className="text-sm font-medium text-white/84">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="rounded-[30px] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.07]"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                      {area.title}
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/62">
                      {area.intro}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2.5">
                      {area.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-[18px] border border-white/10 bg-black/20 px-3 py-3 text-sm font-medium text-white/78 transition-all duration-300 hover:border-accent/30 hover:bg-[#11151d]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
