"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Send,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

const techIconClass = "size-7 shrink-0 block";

function TechIcon({
  children,
  className = "size-8",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex ${className} items-center justify-center`}>
      {children}
    </span>
  );
}

function TechLogoImage({
  alt,
  src,
  width = 28,
  height = 28,
  className = "size-7 object-contain",
  wrapperClassName = "size-8",
}: {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  className?: string;
  wrapperClassName?: string;
}) {
  return (
    <TechIcon className={wrapperClassName}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </TechIcon>
  );
}

const heroTechnologies = [
  {
    name: "JavaScript",
    accent: "#f7df1e",
    icon: <TechLogoImage src="/tech/javascript.svg" alt="JavaScript" />,
  },
  {
    name: "React",
    accent: "#61dafb",
    icon: (
      <TechIcon>
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <circle cx="12" cy="12" r="2.15" fill="#61DAFB" />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1.15"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1.15"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1.15"
            transform="rotate(120 12 12)"
          />
        </svg>
      </TechIcon>
    ),
  },
  {
    name: "Next.js",
    accent: "#ffffff",
    icon: (
      <TechLogoImage
        src="/next.webp"
        alt="Next.js"
        width={52}
        height={52}
        className="size-10 scale-[1.38] object-cover object-center"
        wrapperClassName="size-10 overflow-hidden rounded-full bg-black shadow-[0_0_18px_rgba(255,255,255,0.25)]"
      />
    ),
  },
  {
    name: "TypeScript",
    accent: "#3178c6",
    icon: (
      <TechIcon>
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <path
            fill="#3178C6"
            d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
          />
        </svg>
      </TechIcon>
    ),
  },
  {
    name: "HTML",
    accent: "#e34f26",
    icon: <TechLogoImage src="/tech/html5.svg" alt="HTML" />,
  },
  {
    name: "CSS",
    accent: "#1572b6",
    icon: <TechLogoImage src="/tech/css3.svg" alt="CSS" />,
  },
  {
    name: "Sass",
    accent: "#cc6699",
    icon: (
      <TechIcon>
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <circle cx="12" cy="12" r="10.2" fill="#cc6699" />
          <text
            x="12"
            y="15.8"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="10.2"
            fontWeight="800"
            fill="#fff"
          >
            S
          </text>
        </svg>
      </TechIcon>
    ),
  },
  {
    name: "Material UI",
    accent: "#007fff",
    icon: (
      <TechIcon>
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <path
            fill="#007fff"
            d="M2.1 5.2 8 8.6v6.9l3.9 2.3 3.9-2.3v-4.4l2.1 1.2v4.4l4-2.3V7.5l-4 2.3v-4.6L14 7.5l-2.1-1.2L8 4.1 4 6.4 2.1 5.2Z"
          />
          <path
            fill="#5ec8ff"
            d="m8 8.6 3.9-2.3 2.1 1.2-3.9 2.3L8 8.6Zm7.8 2.5 2.1-1.3 4 2.4-4 2.3-2.1-1.2v-2.2Z"
          />
        </svg>
      </TechIcon>
    ),
  },
  {
    name: "Node.js",
    accent: "#68a063",
    icon: (
      <TechIcon>
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <path
            fill="#68a063"
            d="m12 1.8 9 5.1v10.2l-9 5.1-9-5.1V6.9l9-5.1Z"
          />
          <path
            fill="#3c873a"
            d="M12 4.5 18.6 8v7.9L12 19.6 5.4 15.9V8L12 4.5Z"
          />
          <text
            x="12"
            y="14.5"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="6.4"
            fontWeight="800"
            fill="#fff"
          >
            JS
          </text>
        </svg>
      </TechIcon>
    ),
  },
  {
    name: "Express",
    accent: "#f8fafc",
    icon: (
      <TechIcon>
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <rect
            x="2.5"
            y="5"
            width="19"
            height="14"
            rx="4"
            fill="#f8fafc"
          />
          <text
            x="12"
            y="15"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="7.8"
            fontWeight="800"
            fill="#101827"
          >
            ex
          </text>
        </svg>
      </TechIcon>
    ),
  },
  {
    name: "MongoDB",
    accent: "#47a248",
    icon: (
      <TechIcon>
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <path
            fill="#47a248"
            d="M12 2.1c3.4 3.2 5.1 6.2 5.1 9 0 3.7-2.1 6.5-5.1 8.7-3-2.2-5.1-5-5.1-8.7 0-2.8 1.7-5.8 5.1-9Z"
          />
          <path
            fill="#2f6f36"
            d="M12 2.1v17.7c3-2.2 5.1-5 5.1-8.7 0-2.8-1.7-5.8-5.1-9Z"
            opacity=".55"
          />
          <path
            d="M12 6.2v14.9"
            stroke="#d7ffd7"
            strokeLinecap="round"
            strokeWidth="1.05"
          />
        </svg>
      </TechIcon>
    ),
  },
];


const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Alvarez-J1",
    icon: <GithubIcon size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joel-alvarez-software-engineer",
    icon: <LinkedInIcon size={18} />,
  },
];


const projects = [
  {
    name: "Datara",
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
        href: "https://datara-dashboard.vercel.app/",
        primary: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/Alvarez-J1/React-Dashboard",
      },
    ],
  },
  {
    name: "Elevate",
    type: "Premium Ecommerce Storefront",
    summary:
      "Elevate is a responsive front-end ecommerce storefront built with Next.js, React, TypeScript, and Tailwind CSS. The project focuses on modern ecommerce UI design, responsive layouts, product-focused interfaces, cart functionality, and a polished checkout experience.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    accent: "from-blue-500 to-cyan-300",
    screenshot: "/elevate.png",
    screenshotAlt: "Elevate screenshot",
    actions: [
      {
        label: "Live Demo",
        href: "https://elevate-storefront.vercel.app/",
        primary: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/Alvarez-J1/Elevate",
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
    name: "WeatherFit",
    type: "Weather Clothing App",
    summary:
      "WeatherFit is a Full-stack weather-based clothing recommendation application. It displays the user's current location, date, and temperature, then suggests appropriate clothing items based on current weather conditions.",
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
        href: "https://weatherfit-app.onrender.com/",
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
    name: "NewsExplorer",
    type: "Search Platform",
    summary:
      "NewsExplorer is a React application that lets users search for news articles by keyword and save them to their personal account.",
    stack: ["React", "JavaScript ES6+", "HTML5", "CSS3",],
    accent: "from-indigo-400 to-blue-400",
    screenshot: "/news.png",
    screenshotAlt: "NewsExplorer article search app preview",
    actions: [
      {
        label: "Live Demo",
        href: "https://news-explorer-ten.vercel.app/",
        primary: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/Alvarez-J1/news-explorer-frontend",
      },
    ],
  },
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
      <p className="mb-5 text-3xl font-black uppercase tracking-normal text-cyanline sm:text-4xl lg:text-4xl">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-black text-white sm:text-5xl lg:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-5xl">
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
      <nav className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-5 sm:px-8">
        <a href="#home" className="flex items-center" aria-label="Joel Alvarez home">
          <motion.span
            className="relative block h-14 w-56 sm:w-64 lg:h-16 lg:w-96"
            whileHover={{ y: -2, scale: 1.03 }}
          >
            <Image
              src="/joel-alvarez-logo.png"
              alt="Joel Alvarez"
              fill
              priority
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 256px, 224px"
              className="object-contain object-left"
            />
          </motion.span>
        </a>
          <div className="hidden items-center justify-self-center gap-4 md:flex lg:gap-9">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-bold text-slate-300 transition hover:text-white lg:text-[1.05rem]"
              >
                {item.label}
              </a>
            ))}
          </div>
        <div className="hidden items-center gap-2 md:flex lg:gap-3">
          <a
            href="#contact"
            className="whitespace-nowrap rounded-xl bg-white px-3.5 py-2.5 text-sm font-bold text-ink transition hover:bg-cyanline hover:shadow-aura lg:rounded-2xl lg:px-5 lg:py-3 lg:text-base"
          >
            Let&apos;s Connect
          </a>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyanline/40 hover:bg-white/10 hover:text-white lg:h-11 lg:w-11 lg:rounded-2xl"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center justify-self-end rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
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
                className="rounded-2xl px-4 py-3 text-lg font-bold text-slate-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-3 px-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyanline/40 hover:bg-white/10 hover:text-white"
                  aria-label={link.label}
                  onClick={() => setOpen(false)}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

function AnimatedTechStack() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroTechnologies.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="mt-8 max-w-3xl">
      <p className="text-xl font-semibold uppercase tracking-[0.18em] text-cyanline">
        Working with modern technologies
      </p>
      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
        {heroTechnologies.map((tech, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.button
              key={tech.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`group relative flex h-[5.35rem] min-w-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border px-2 text-center backdrop-blur-xl transition-colors ${
                isActive
                  ? "text-white"
                  : "border-white/10 bg-white/[0.035] text-slate-400 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              }`}
              style={
                isActive
                  ? {
                      borderColor: `${tech.accent}99`,
                      background: `linear-gradient(145deg, ${tech.accent}26, rgba(255, 255, 255, 0.055))`,
                      boxShadow: `0 0 28px ${tech.accent}38`,
                    }
                  : undefined
              }
              aria-label={`${tech.name} technology`}
              aria-pressed={isActive}
              initial={false}
              animate={
                isActive && !prefersReducedMotion
                  ? {
                      y: [0, -5, 0],
                      scale: [1, 1.035, 1],
                      rotate: [0, -1.5, 1.5, 0],
                    }
                  : { y: 0, scale: 1, rotate: 0 }
              }
              whileHover={
                prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }
              }
              whileTap={{ scale: 0.98 }}
              transition={
                isActive && !prefersReducedMotion
                  ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.35 }
              }
            >
              <motion.span
                className="pointer-events-none absolute -inset-8 rounded-full opacity-0 blur-xl"
                style={{
                  background: `radial-gradient(circle, ${tech.accent}66 0%, transparent 62%)`,
                }}
                animate={
                  isActive && !prefersReducedMotion
                    ? { opacity: [0.18, 0.34, 0.18], scale: [0.9, 1.08, 0.9] }
                    : { opacity: 0, scale: 0.96 }
                }
                transition={
                  isActive && !prefersReducedMotion
                    ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.25 }
                }
              />
              <span className="relative flex size-10 items-center justify-center">
                {tech.icon}
              </span>
              <motion.span
                className="relative block max-w-full truncate text-[0.72rem] font-bold leading-none sm:text-xs"
                initial={false}
                animate={{ color: isActive ? tech.accent : "currentColor" }}
                transition={{ duration: 0.25 }}
              >
                {tech.name}
              </motion.span>
              <motion.span
                className="absolute bottom-1.5 h-1 w-1 rounded-full"
                style={{ backgroundColor: tech.accent }}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive && !prefersReducedMotion ? [0.8, 1.25, 0.8] : 1,
                }}
                transition={
                  isActive && !prefersReducedMotion
                    ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.2 }
                }
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-8 pt-32 sm:px-8 sm:pb-20 lg:pt-45"
    >
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-balance text-4xl font-black leading-[0.98] text-white sm:text-5xl lg:text-6xl 2xl:text-7xl">
            Front-end Software Engineer 
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
          <AnimatedTechStack />
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
            <span className="block text-cyanline">Next.js + JavaScript</span>
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
                src="/park.png"
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
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a1018]">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-[0.12]`}
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
      />
      
      </div>
  
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.86 2.805 1.335 3.495 1.02.105-.78.42-1.335.765-1.635-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.75 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.71.24 2.85.12 3.75.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.825 1.08.825 2.205 0 1.59-.015 2.85-.015 3.225 0 .315.225.69.825.57A8.34 8.34 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V8.99h3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
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
    ? "inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-electric px-4 py-3 text-sm font-bold text-white transition hover:bg-[#39a2ff]"
    : "inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-[#141c28] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#1a2433]";

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
    <section id="projects" className="px-5 pb-8 pt-12 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Frontend projects focused on clean UI & responsiveness."
        />
        <div className="mx-auto grid max-w-6xl auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group project-card flex h-full flex-col overflow-hidden rounded-2xl p-5 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.62, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <ProjectScreenshot
                accent={project.accent}
                alt={project.screenshotAlt}
                src={project.screenshot}
              />
              <div className="flex flex-1 flex-col pt-5 sm:pt-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanline">
                    {project.type}
                  </p>
                  <span
                    className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br ${project.accent} shadow-[0_0_12px_rgba(94,213,255,0.5)]`}
                  />
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-slate-300">
                  {project.summary}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-[#141c28] px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {project.actions.map((action) => (
                    <ProjectAction
                      key={action.label}
                      href={action.href}
                      icon={
                        action.primary ? (
                          <ArrowUpRight size={16} />
                        ) : (
                          <GithubIcon size={16} />
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
  
    <section id="contact" className="px-4 pb-14 pt-6 sm:px-6 sm:py-14 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel overflow-hidden rounded-[1.5rem] lg:rounded-[2rem]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              className="relative min-h-full p-5 sm:p-7 lg:p-12"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-transparent to-transparent" />
              <div className="relative">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyanline sm:text-base lg:text-lg">
                  Contact
                </p>
                <h2 className="text-balance text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                  Let&apos;s Connect!
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300 lg:mt-6 lg:text-lg lg:leading-8">
                I&apos;m open to developer roles, collaborations, and projects focused on building modern, user-friendly web experiences.
                </p>
                <div className="mt-6 grid gap-3 lg:mt-10 lg:gap-4">
                  <a
                    href="mailto:jge4991@gmail.com"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 transition hover:border-cyanline/40 hover:bg-white/10 lg:gap-4 lg:rounded-2xl lg:p-4"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-electric/20 text-cyanline lg:h-12 lg:w-12 lg:rounded-2xl">
                      <Mail size={19} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400 lg:text-sm">Email</span>
                      <span className="text-sm font-bold text-white lg:text-base">Joel124@outlook.es</span>
                    </span>
                  </a>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 lg:gap-4 lg:rounded-2xl lg:p-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-electric/20 text-cyanline lg:h-12 lg:w-12 lg:rounded-2xl">
                      <MapPin size={19} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400 lg:text-sm">Location</span>
                      <span className="text-sm font-bold text-white lg:text-base">Union City, New Jersey</span>
                    </span>
                  </div>
                  <a
                    href="https://github.com/Alvarez-J1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 transition hover:border-cyanline/40 hover:bg-white/10 lg:gap-4 lg:rounded-2xl lg:p-4"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-ink lg:h-12 lg:w-12 lg:rounded-2xl">
                      <GithubIcon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400 lg:text-sm">GitHub</span>
                      <span className="text-sm font-bold text-white lg:text-base">Alvarez-J1</span>
                    </span>
                    
                  </a>
                   <a
                    href="https://www.linkedin.com/in/joel-alvarez-software-engineer/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 transition hover:border-cyanline/40 hover:bg-white/10 lg:gap-4 lg:rounded-2xl lg:p-4"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0a66c2] text-white lg:h-12 lg:w-12 lg:rounded-2xl">
                      <LinkedInIcon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400 lg:text-sm">LinkedIn</span>
                      <span className="text-sm font-bold text-white lg:text-base">Joel Alvarez</span>
                    </span>
                    
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.form
              className="border-t border-white/10 bg-white/[0.035] p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-12"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65 }}
              onSubmit={handleSubmit}
              
            >
              <label className="mb-4 block lg:mb-5">
                <span className="mb-2 block text-sm font-bold text-white">Your Name</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyanline/60 focus:ring-4 focus:ring-cyanline/10 lg:rounded-2xl lg:py-4 lg:text-base"
                  placeholder="Jane Tyler"
                  type="text"
                  name="name"
                />
              </label>
              <label className="mb-4 block lg:mb-5">
                <span className="mb-2 block text-sm font-bold text-white">
                  Email Address
                </span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyanline/60 focus:ring-4 focus:ring-cyanline/10 lg:rounded-2xl lg:py-4 lg:text-base"
                  placeholder="Jane@company.com"
                  type="email"
                  name="email"
                />
              </label>
              <label className="mb-5 block lg:mb-6">
                <span className="mb-2 block text-sm font-bold text-white">Message</span>
                <textarea
                  className="min-h-28 w-full resize-none rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyanline/60 focus:ring-4 focus:ring-cyanline/10 sm:min-h-32 lg:min-h-40 lg:rounded-2xl lg:py-4 lg:text-base"
                  placeholder="Tell me about the role, team, or project..."
                  name="message"
                />
              </label>
              {sent && (
                <p className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-semibold text-green-400 lg:mb-5 lg:rounded-2xl lg:py-4 lg:text-base">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              <motion.button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-electric px-5 py-3 text-sm font-black text-white shadow-aura transition hover:bg-[#39a2ff] lg:rounded-2xl lg:px-6 lg:py-4 lg:text-base"
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
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Joel Alvarez</p>
          <div className="flex items-center gap-2 text-slate-400">
            <BriefcaseBusiness size={16} />
            Front-end Software Engineer
          </div>
        </div>
      </footer>
    </main>
  );
}
