"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { BsGithub, BsRocketTakeoff } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 761 541 638",
    subtext: "Open for internship and collaboration discussions",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "harshanaeshan2002@gmail.com",
    subtext: "Best place to send opportunities and project ideas",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Ambalangoda & Malabe, Sri Lanka",
    subtext: "Available for remote and growing career opportunities",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/202320020818",
    icon: <BsGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eshan-harshana-dev/",
    icon: <FaLinkedin />,
  },
];

const opportunityOptions = [
  "Internship Opportunity",
  "Junior Developer Role",
  "Freelance Project",
  "Collaboration",
  "Mentorship",
  "Project Discussion",
  "General Inquiry",
];

const opportunityCards = [
  {
    title: "Internships",
    description:
      "Looking for opportunities to learn from real teams and contribute to meaningful software work.",
    icon: <FaUserGraduate />,
    value: "Internship Opportunity",
  },
  {
    title: "Entry-Level Roles",
    description:
      "Interested in junior developer pathways that can grow into permanent positions over time.",
    icon: <FaBriefcase />,
    value: "Junior Developer Role",
  },
  {
    title: "Projects and Freelance",
    description:
      "Open to practical work where I can help build, improve, and support digital solutions.",
    icon: <BsRocketTakeoff />,
    value: "Freelance Project",
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleOpportunityCardClick = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("");
    setStatusType("");

    const recipient =
      info.find((item) => item.title === "Email")?.description ||
      "harshanaeshan2002@gmail.com";

    const subject = `${formData.firstname || ""} ${
      formData.lastname || ""
    } - ${formData.service || "Opportunity"}`.trim();

    const bodyLines = [
      `Name: ${formData.firstname || ""} ${formData.lastname || ""}`.trim(),
      `Email: ${formData.email || ""}`,
      `Phone: ${formData.phone || ""}`,
      `Opportunity Type: ${formData.service || ""}`,
      "",
      "Message:",
      formData.message || "",
    ];

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;

    setStatusType("success");
    setStatusMessage("Opening your mail app...");
  };

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,180,151,0.24),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.09),_transparent_22%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-[38px] border border-white/10 bg-[#0f1219]/90 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          <div className="grid gap-0 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 xl:border-b-0 xl:border-r">
              <p className="text-sm uppercase tracking-[0.35em] text-accent/85">
                Open to Opportunities
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Looking for internships,
                <span className="block text-accent">
                  jobs, and collaborations
                </span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
                I am currently seeking internship opportunities, entry-level
                software roles, freelance projects, and meaningful
                collaborations. If you think I could be a good fit, I would be
                happy to connect.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {opportunityCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * index, duration: 0.45 }}
                    className="h-full"
                  >
                    <button
                      type="button"
                      onClick={() => handleOpportunityCardClick(card.value)}
                      className={`flex h-full w-full flex-col rounded-[28px] border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_20px_50px_rgba(56,180,151,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 ${
                        formData.service === card.value
                          ? "border-accent/45 bg-accent/12"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-xl text-accent">
                        {card.icon}
                      </div>
                      <h2 className="mt-4 text-xl font-semibold text-white">
                        {card.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {card.description}
                      </p>
                      <span className="mt-4 text-xs uppercase tracking-[0.28em] text-accent/85">
                        Choose and continue
                      </span>
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-[30px] border border-accent/20 bg-accent/10 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/85">
                  Why Reach Out
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Internship opportunities",
                    "Junior developer roles",
                    "Project collaboration",
                    "Freelance work",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/78"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.5 }}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(56,180,151,0.10)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                  Send Opportunity
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Let&apos;s connect
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Share the role, company, project, or idea and I&apos;ll open
                  it in your mail app with the message ready to send.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 flex flex-col gap-5"
                >
                  {statusMessage ? (
                    <div
                      className={`rounded-2xl border px-4 py-3 text-sm ${
                        statusType === "success"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                          : "border-red-500/30 bg-red-500/10 text-red-200"
                      }`}
                    >
                      {statusMessage}
                    </div>
                  ) : null}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      name="firstname"
                      value={formData.firstname}
                      placeholder="First name"
                      onChange={handleChange}
                      required
                      className="rounded-2xl transition-all duration-300 hover:border-accent/35 focus:border-accent/50"
                    />
                    <Input
                      name="lastname"
                      value={formData.lastname}
                      placeholder="Last name"
                      onChange={handleChange}
                      required
                      className="rounded-2xl transition-all duration-300 hover:border-accent/35 focus:border-accent/50"
                    />
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      placeholder="Email address"
                      onChange={handleChange}
                      required
                      className="rounded-2xl transition-all duration-300 hover:border-accent/35 focus:border-accent/50"
                    />
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      placeholder="Phone number"
                      onChange={handleChange}
                      className="rounded-2xl transition-all duration-300 hover:border-accent/35 focus:border-accent/50"
                    />
                  </div>

                  <Select
                    onValueChange={handleSelectChange}
                    value={formData.service}
                  >
                    <SelectTrigger className="h-[54px] w-full rounded-2xl border border-white/10 bg-primary px-4 text-white/60 transition-all duration-300 hover:border-accent/35 focus:border-accent/50">
                      <SelectValue placeholder="Select opportunity type" />
                    </SelectTrigger>

                    <SelectContent className="border border-white/10 bg-primary text-white/60">
                      <SelectGroup>
                        <SelectLabel className="text-white/60">
                          Opportunity Types
                        </SelectLabel>
                        {opportunityOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Textarea
                    name="message"
                    value={formData.message}
                    className="h-[170px] rounded-2xl transition-all duration-300 hover:border-accent/35 focus:border-accent/50"
                    placeholder="Tell me about the role, company, project, or collaboration..."
                    onChange={handleChange}
                    required
                  />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-7 text-white/55">
                      This form prepares your message in the default mail app.
                    </p>

                    <Button
                      type="submit"
                      className="h-12 w-full rounded-full bg-accent px-8 text-primary transition-all duration-300 hover:scale-[1.03] hover:bg-accent/90 sm:w-auto"
                    >
                      Send Opportunity
                    </Button>
                  </div>
                </form>
              </motion.div>

              <div className="mt-5 grid gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.45 }}
                  className="rounded-[30px] border border-white/10 bg-gradient-to-br from-accent/18 via-white/5 to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-accent/85">
                    Quick Connect
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    Explore my profiles
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/82 transition-all duration-300 hover:border-accent/40 hover:bg-accent hover:text-black"
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {info.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 + index * 0.07, duration: 0.45 }}
                    className="rounded-[30px] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/12 text-xl text-accent">
                        {item.icon}
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                          {item.title}
                        </p>
                        <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
                          {item.description}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-white/62">
                          {item.subtext}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
