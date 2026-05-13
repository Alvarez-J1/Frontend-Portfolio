"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GitBranch,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Send,
  Sparkles,
  X,
  Zap,
  LinkIcon
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";


const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    title: "Core Stack",
    icon: Code2,
    items: [ "HTML5", "CSS3","JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Framework Stack",
    icon: Sparkles,
    items: ["React", "Next.js", "SCSS", "Material UI", "React Router", "Redux"
],
  },
  {
    title: "Backend & Tools",
    icon: Layers3,
    items: ["Node.js", "Express", "MongoDB", "FireBase", "Git/Github", "Postman", "Vercel", "Render", "Chrome DevTools", "VS Code"],
  },
];

const projects = [
  {
    name: "SalesForce Dashboard",
    type: "Sales Analytics Dashboard",
    summary:
      "Datara is a responsive front-end sales analytics dashboard focused on clean UI, dashboard-style layouts, interactive data visualization, responsive design, and modern front-end architecture.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Chart.js",
      "Sass/SCSS",
      "NextAuth",
    ],
    accent: "from-blue-500 to-cyan-300",
    screenshot: "/datara-dashboard.png",
    screenshotAlt: "Datara sales analytics dashboard screenshot",
    actions: [
      {
        label: "Live Demo",
        href: "https://react-dashboard-murex.vercel.app/auth/signin?callbackUrl=%2F",
        primary: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/Alvarez-J1/React-Dashboard",
      },
    ],
  },
  {
    name: "WTWR",
    type: "Weather Clothing App",
    summary:
      "WTWR is a weather-based clothing recommendation application. It displays the user's current location, date, and temperature, then suggests appropriate clothing items based on current weather conditions.",
    stack: [
      "React",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js v4.21.2",
      "MongoDB",
      "Mongoose",
    ],
    accent: "from-cyan-300 to-emerald-300",
    screenshot: "/WTWR.png",
    screenshotAlt: "WTWR weather wardrobe app preview",
    actions: [
      {
        label: "Live Demo",
        href: "https://se-project-wtwr.onrender.com/",
        primary: true,
      },
      {
        label: "Frontend Repo",
        href: "https://github.com/Alvarez-J1/se_project_react",
      },
      {
        label: "Backend Repo",
        href: "https://github.com/Alvarez-J1/se_project_express",
      },
    ],
  },
   {
    name: "Code Switcher",
    type: "Marketing Website",
    summary:
      "A modern SaaS-inspired landing page built with HTML, CSS, and JavaScript. Code Switcher showcases a polished developer-focused interface featuring responsive layouts, animated UI elements, interactive code tabs, syntax highlighting, and a mobile-first navigation experience.",
    stack: [
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
    ],
    accent: "from-cyan-300 to-emerald-300",
    screenshot: "/codeswitch.png",
    screenshotAlt: "WTWR weather wardrobe app preview",
    actions: [
      {
        label: "Live Demo",
        href: "https://codeswitch-sable.vercel.app",
        primary: true,
      },
      {
        label: "Github Repo",
        href: "https://github.com/Alvarez-J1/Code-Switcher",
      },
    ],
  },
  {
    name: "NewsExplorer",
    type: "Search Platform",
    summary:
      "A modern news search product with saved articles, keyword context, and a calm reading-first interface.",
    stack: ["React", "JavaScript ES6+", "HTML5", "CSS3",],
    accent: "from-indigo-400 to-blue-400",
    screenshot: "/news.png",
    screenshotAlt: "NewsExplorer article search app preview",
    actions: [
      {
        label: "Live Demo",
        href: "https://alvarez-j1.github.io/news-explorer-frontend/#/",
        primary: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/Alvarez-J1/news-explorer-frontend",
      },
    ],
  },
];

const metrics = [
  { value: "4", label: "Featured builds" },
  { value: "8+", label: "Core technologies" },
  { value: "100%", label: "Frontend focus" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={fadeUp}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyanline">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          {copy}
        </p>
      ) : null}
    </motion.div>
  );
}

function AmbientBackground() {
  const prefersReducedMotion = useReducedMotion();
  const particles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        x: (index * 37) % 100,
        y: (index * 53) % 100,
        size: 2 + (index % 4),
        delay: (index % 9) * 0.45,
        duration: 9 + (index % 7),
      })),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-radial-grid bg-[length:48px_48px] opacity-[0.08]" />
      <motion.div
        className="absolute left-[-12rem] top-20 h-[28rem] w-[28rem] rounded-full bg-electric/20 blur-[130px]"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 80, 20, 0], y: [0, 30, 90, 0], scale: [1, 1.15, 0.95, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-cyanline/20 blur-[140px]"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -70, -20, 0], y: [0, 80, 10, 0], scale: [1, 0.92, 1.12, 1] }
        }
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.035)_45%,transparent_60%)] opacity-40" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyanline shadow-[0_0_18px_rgba(94,213,255,0.9)]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.16, 0.85, 0.2], y: [0, -34, 0], scale: [0.9, 1.35, 0.9] }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Joel Alvarez home">
          <motion.span
            className="grid h-11 w-11 place-items-center rounded-2xl bg-electric text-lg font-black text-white shadow-aura"
            whileHover={{ rotate: -8, scale: 1.06 }}
          >
            JA
          </motion.span>
          <span className="hidden text-lg font-bold text-white sm:block">
            Joel Alvarez
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-2xl bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-cyanline hover:shadow-aura md:inline-flex"
        >
          Let&apos;s Connect
        </a>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <motion.div
          className="border-t border-white/10 bg-ink/95 px-5 py-5 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:pt-24"
    >
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyanline/30 bg-cyanline/10 px-4 py-2 text-sm font-semibold text-cyanline shadow-[0_0_30px_rgba(94,213,255,0.12)]">
            <span className="h-2 w-2 rounded-full bg-cyanline shadow-[0_0_16px_rgba(94,213,255,0.9)]" />
            Available for developer roles
          </div>
          <h1 className="text-balance text-4xl font-black leading-[0.98] text-white sm:text-5xl lg:text-6xl 2xl:text-7xl">
            Frontend developer building{" "}
            <span className="bg-gradient-to-r from-electric via-cyanline to-white bg-clip-text text-transparent">
             modern, responsive web experiences.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-300 sm:text-xl">
           I build responsive frontend applications using JavaScript, React, Next.js, and TypeScript with a focus on clean UI, accessibility, and smooth user experience.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-electric px-6 py-4 text-base font-bold text-white shadow-aura transition hover:bg-[#39a2ff]"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowUpRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur-xl transition hover:border-cyanline/50 hover:bg-white/20"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
              <Mail size={19} />
            </motion.a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-7">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-2xl font-black text-white sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-sm">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[26rem] 2xl:max-w-[28rem]"
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-8 rounded-full bg-electric/20 blur-[90px]" />
          <motion.div
            className="absolute -right-3 top-12 z-10 hidden rounded-3xl border border-cyanline/20 bg-ink/80 px-5 py-4 text-sm font-semibold text-white shadow-glass backdrop-blur-2xl sm:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="block text-cyanline">Next.js + TypeScript</span>
            Production-minded UI
          </motion.div>
          <motion.div
            className="absolute -left-5 bottom-12 z-10 rounded-3xl border border-white/20 bg-ink/70 px-5 py-4 shadow-glass backdrop-blur-2xl"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-electric/20 text-cyanline">
                <Zap size={21} />
              </span>
              <div>
                <p className="font-bold text-white">Responsive UI</p>
                <p className="text-sm text-slate-400">Accessibility Focused</p>
              </div>
            </div>
          </motion.div>
          <div className="animated-border rounded-[2rem] p-px">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-glass backdrop-blur-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-electric/10" />
              <Image
                src="/joel-alvarez-headshot.jpg"
                alt="Joel Alvarez portrait"
                width={700}
                height={700}
                priority
                className="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top grayscale-[15%]"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/10 bg-ink/70 p-4 backdrop-blur-2xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Now building</p>
                    <p className="font-bold text-white">Recruiter-ready frontend systems</p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-electric text-white">
                    <MonitorSmartphone size={21} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Clean code, modern interfaces, and responsive user experiences."
          copy="I bring frontend ideas from rough sketches to polished, responsive experiences that feel intuitive and easy to use across devices."
        />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="glass-panel rounded-[1.75rem] p-7 sm:p-9"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
          >
            <p className="text-lg leading-9 text-slate-200">
             I’m a frontend developer focused on building responsive web applications with clean UI, strong usability, and maintainable code. I enjoy creating interfaces that simplify complex workflows and provide smooth user experiences across devices.
            </p>
            <p className="mt-6 text-lg leading-9 text-slate-300">
            My work emphasizes accessibility, responsive design, component structure, and polished frontend interactions using modern technologies like React, JavaScript, Next.js, and TypeScript.
            </p>
          </motion.div>
          <motion.div
            className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              ["Focus", "Responsive frontend applications with clean UI and intuitive interactions."],
              ["Style", "Modern interfaces with thoughtful spacing, smooth interactions, and clear visual hierarchy."],
              ["Mindset", "Accessible, maintainable code that supports real product goals."],
            ].map(([title, text]) => (
              <motion.div
                key={title}
                className="glass-panel rounded-[1.5rem] p-6"
                variants={fadeUp}
                transition={{ duration: 0.55 }}
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyanline">
                  {title}
                </p>
                <p className="leading-7 text-slate-300">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Frontend technologies focused on responsive and modern web applications."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                className="group glass-panel relative overflow-hidden rounded-[1.75rem] p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.58, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-electric/10 blur-3xl transition group-hover:bg-cyanline/20" />
                <div className="relative mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-electric/20 text-cyanline ring-1 ring-cyanline/20">
                  <Icon size={25} />
                </div>
                <h3 className="relative text-2xl font-black text-white">
                  {group.title}
                </h3>
                <div className="relative mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold text-slate-200 transition group-hover:border-cyanline/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectScreenshot({
  accent,
  alt,
  src,
}: {
  accent: string;
  alt: string;
  src: string;
}) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/10 bg-ink">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-20`}
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover object-top transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-ink/75 px-3 py-2 text-xs font-bold text-frost backdrop-blur-xl">
        <span className="h-2 w-2 rounded-full bg-cyanline shadow-[0_0_14px_rgba(94,213,255,0.9)]" />
        Screenshot
      </div>
    </div>
  );
}

function ProjectAction({
  href,
  icon,
  label,
  primary = false,
}: {
  href?: string;
  icon: ReactNode;
  label: string;
  primary?: boolean;
}) {
  const className = primary
    ? "inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-electric px-4 py-3 text-sm font-black text-white shadow-aura transition hover:bg-[#39a2ff]"
    : "inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white transition hover:border-cyanline/40 hover:bg-white/20";

  if (!href) {
    return (
      <button
        type="button"
        disabled
        className={`${className} cursor-not-allowed opacity-50`}
        title="Link coming soon"
      >
        {label}
        {icon}
      </button>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {label}
      {icon}
    </a>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Frontend projects focused on clean UI, responsiveness, and real-world user experience."
          copy="A collection of responsive applications built with modern frontend technologies, emphasizing polished interfaces, usability, and scalable component structure."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group glass-panel overflow-hidden rounded-[1.75rem] p-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.62, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
            >
              <ProjectScreenshot
                accent={project.accent}
                alt={project.screenshotAlt}
                src={project.screenshot}
              />
              <div className="p-4 pt-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanline">
                    {project.type}
                  </p>
                  <span
                    className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${project.accent} opacity-80 shadow-aura transition group-hover:scale-110`}
                  />
                </div>
                <h3 className="text-2xl font-black text-white">{project.name}</h3>
                <p className="mt-4 min-h-28 leading-7 text-slate-300">
                  {project.summary}
                </p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Tech Stack
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyanline/20 bg-cyanline/10 px-3 py-1.5 text-xs font-bold text-frost"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {project.actions.map((action) => (
                    <ProjectAction
                      key={action.label}
                      href={action.href}
                      icon={
                        action.primary ? (
                          <ArrowUpRight size={17} />
                        ) : (
                          <GitBranch size={17} />
                        )
                      }
                      label={action.label}
                      primary={action.primary}
                    />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  
const [sent, setSent] = useState(false);

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(event.currentTarget);

  const response = await fetch("https://formspree.io/f/mzdokawk", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    setSent(true);
    form.reset();
  }
}
  return (
  
    <section id="contact" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel overflow-hidden rounded-[2rem]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              className="relative min-h-full p-7 sm:p-10 lg:p-12"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-transparent to-transparent" />
              <div className="relative">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyanline">
                  Contact
                </p>
                <h2 className="text-balance text-4xl font-black leading-tight text-white sm:text-5xl">
                  Let&apos;s Connect!
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                I&apos;m open to developer roles, collaborations, and projects focused on building modern, user-friendly web experiences.
                </p>
                <div className="mt-10 grid gap-4">
                  <a
                    href="mailto:jge4991@gmail.com"
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyanline/40 hover:bg-white/10"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/20 text-cyanline">
                      <Mail size={21} />
                    </span>
                    <span>
                      <span className="block text-sm text-slate-400">Email</span>
                      <span className="font-bold text-white">Joel124@outlook.es</span>
                    </span>
                  </a>
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/20 text-cyanline">
                      <MapPin size={21} />
                    </span>
                    <span>
                      <span className="block text-sm text-slate-400">Location</span>
                      <span className="font-bold text-white">Union City, New Jersey</span>
                    </span>
                  </div>
                  <a
                    href="https://github.com/Alvarez-J1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyanline/40 hover:bg-white/10"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/20 text-cyanline">
                      <GitBranch size={21} />
                    </span>
                    <span>
                      <span className="block text-sm text-slate-400">GitHub</span>
                      <span className="font-bold text-white">Alvarez-J1</span>
                    </span>
                    
                  </a>
                   <a
                    href="https://www.linkedin.com/in/joel-alvarez-software-engineer/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyanline/40 hover:bg-white/10"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/20 text-cyanline">
                      <LinkIcon size={21} />
                    </span>
                    <span>
                      <span className="block text-sm text-slate-400">Linkedin</span>
                      <span className="font-bold text-white">Joel Alvarez</span>
                    </span>
                    
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.form
              className="border-t border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65 }}
              onSubmit={handleSubmit}
              
            >
              <label className="mb-5 block">
                <span className="mb-2 block text-sm font-bold text-white">Your Name</span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanline/60 focus:ring-4 focus:ring-cyanline/10"
                  placeholder="Jane Recruiter"
                  type="text"
                  name="name"
                />
              </label>
              <label className="mb-5 block">
                <span className="mb-2 block text-sm font-bold text-white">
                  Email Address
                </span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanline/60 focus:ring-4 focus:ring-cyanline/10"
                  placeholder="jane@company.com"
                  type="email"
                  name="email"
                />
              </label>
              <label className="mb-6 block">
                <span className="mb-2 block text-sm font-bold text-white">Message</span>
                <textarea
                  className="min-h-40 w-full resize-none rounded-2xl border border-white/10 bg-ink/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanline/60 focus:ring-4 focus:ring-cyanline/10"
                  placeholder="Tell me about the role, team, or project..."
                  name="message"
                />
              </label>
              {sent && (
        <p className="mb-5 rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-4 font-semibold text-green-400">
    ✓ Message sent successfully! I'll get back to you soon.
  </p>
)}
              <motion.button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-electric px-6 py-4 text-base font-black text-white shadow-aura transition hover:bg-[#39a2ff]"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={19} />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <AmbientBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Joel Alvarez</p>
          <div className="flex items-center gap-2 text-slate-400">
            <BriefcaseBusiness size={16} />
            Frontend Developer
          </div>
        </div>
      </footer>
    </main>
  );
}
