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

const TECH_LOGO_SIZE = 44;

const techIconClass = "h-full w-full shrink-0 overflow-visible";

function TechIcon({
  children,
  className = "size-11",
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

function TechLogoSlot({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className="flex size-11 shrink-0 items-center justify-center">
      <span
        className={`flex items-center justify-center drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)] ${className}`}
      >
        {children}
      </span>
    </span>
  );
}

function TechLogoImage({
  alt,
  src,
  className = "size-10",
}: {
  alt: string;
  src: string;
  className?: string;
}) {
  return (
    <TechIcon>
      <TechLogoSlot className={className}>
        <Image
          src={src}
          alt={alt}
          width={TECH_LOGO_SIZE}
          height={TECH_LOGO_SIZE}
          className="h-full w-full object-contain object-center"
        />
      </TechLogoSlot>
    </TechIcon>
  );
}

function TechLogoSvg({
  children,
  className = "size-10",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <TechIcon>
      <TechLogoSlot className={className}>{children}</TechLogoSlot>
    </TechIcon>
  );
}

function NextTechLogo() {
  return (
    <TechIcon className="size-11">
      <Image
        src="/tech/nextjs.svg"
        alt="Next.js"
        width={44}
        height={44}
        className="size-10 object-contain object-center drop-shadow-[0_0_16px_rgba(255,255,255,0.16)]"
      />
    </TechIcon>
  );
}

const heroTechnologies = [
  {
    name: "JavaScript",
    accent: "#F7DF1E",
    icon: <TechLogoImage src="/tech/javascript.svg" alt="JavaScript" />,
  },
  {
    name: "React",
    accent: "#61DAFB",
    icon: (
      <TechLogoSvg className="h-10 w-11">
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
      </TechLogoSvg>
    ),
  },
  {
    name: "Next.js",
    accent: "#F8FAFC",
    icon: <NextTechLogo />,
  },
  {
    name: "TypeScript",
    accent: "#3178C6",
    icon: (
      <TechLogoSvg className="size-10">
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <path
            fill="#3178C6"
            d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
          />
        </svg>
      </TechLogoSvg>
    ),
  },
  {
    name: "HTML",
    accent: "#E34F26",
    icon: (
      <TechLogoImage
        src="/tech/html5.svg"
        alt="HTML"
        className="h-[2.7rem] w-[2.45rem]"
      />
    ),
  },
  {
    name: "CSS",
    accent: "#1572B6",
    icon: (
      <TechLogoImage
        src="/tech/css3.svg"
        alt="CSS"
        className="h-[2.7rem] w-[2.45rem]"
      />
    ),
  },
  {
    name: "Sass",
    accent: "#CC6699",
    icon: (
      <TechLogoSvg className="size-10">
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
      </TechLogoSvg>
    ),
  },
  {
    name: "Material UI",
    accent: "#007FFF",
    icon: (
      <TechLogoSvg className="size-10">
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
      </TechLogoSvg>
    ),
  },
  {
    name: "Node.js",
    accent: "#68A063",
    icon: (
      <TechLogoSvg className="size-10">
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
      </TechLogoSvg>
    ),
  },
  {
    name: "Express",
    accent: "#D1D5DB",
    icon: (
      <TechLogoSvg className="size-10">
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <rect
            x="1.25"
            y="1.25"
            width="21.5"
            height="21.5"
            rx="5"
            fill="#f8fafc"
          />
          <text
            x="12"
            y="15.4"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="8.8"
            fontWeight="800"
            fill="#101827"
          >
            ex
          </text>
        </svg>
      </TechLogoSvg>
    ),
  },
  {
    name: "MongoDB",
    accent: "#47A248",
    icon: (
      <TechLogoSvg className="h-11 w-9">
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
      </TechLogoSvg>
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
    icon: <GithubIcon size={21} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joel-alvarez-software-engineer",
    icon: <LinkedInIcon size={21} />,
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
    accent: "from-teal-300 to-slate-400",
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
    type: "Electronics E-commerce Storefront",
    summary:
      "Elevate is a responsive front-end ecommerce storefront built with Next.js, React, TypeScript, and Tailwind CSS. The project focuses on modern ecommerce UI design, responsive layouts, product-focused interfaces, cart functionality, and a polished checkout experience.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    accent: "from-teal-300 to-emerald-200",
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
    accent: "from-teal-300 to-slate-300",
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
    accent: "from-emerald-300 to-teal-200",
    screenshot: "/weatherfit.png",
    screenshotAlt: "WTWR weather wardrobe app preview",
    actions: [
      {
        label: "Live Demo",
        href: "https://weatherfit-app.onrender.com/",
        primary: true,
      },
      {
        label: "Github Repo",
        href: "https://github.com/Alvarez-J1/se_project_react",
      },
    ],
  },
  {
    name: "NewsExplorer",
    type: "Search Platform",
    summary:
      "NewsExplorer is a React application that lets users search for news articles by keyword and save them to their personal account.",
    stack: ["React", "JavaScript ES6+", "HTML5", "CSS3",],
    accent: "from-slate-300 to-teal-300",
    screenshot: "/newsE.png",
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
      <p className="mb-4 font-heading text-[1rem] font-black uppercase tracking-[0.08em] text-cyanline">
        {eyebrow}
      </p>
      <h2 className="text-balance font-heading text-3xl font-black leading-tight text-frost sm:text-4xl lg:text-5xl">
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
        className="absolute left-[-12rem] top-20 h-[28rem] w-[28rem] rounded-full bg-electric/14 blur-[130px]"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 80, 20, 0], y: [0, 30, 90, 0], scale: [1, 1.15, 0.95, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-cyanline/10 blur-[140px]"
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
          className="absolute rounded-full bg-cyanline shadow-[0_0_14px_rgba(154,199,189,0.42)]"
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
      <nav className="mx-auto flex min-h-24 max-w-7xl items-center gap-3 px-5 py-3 sm:px-6 lg:gap-4 lg:px-8 lg:py-3.5">
        <a href="#home" className="flex min-w-0 shrink items-center leading-none" aria-label="Joel Alvarez home">
          <motion.span
            className="flex h-12 w-44 min-w-0 shrink items-center overflow-hidden leading-none sm:h-14 sm:w-56 md:w-[clamp(12rem,24vw,15rem)] lg:h-[4.5rem] lg:w-[21.75rem] lg:shrink-0 xl:w-[22rem]"
            whileHover={{ y: -2, scale: 1.03 }}
          >
            <Image
              src="/joela.png"
              alt="Joel Alvarez"
              width={1536}
              height={1024}
              priority
              sizes="(min-width: 1024px) 340px, (min-width: 768px) 24vw, (min-width: 640px) 224px, 176px"
              className="block h-auto w-full max-w-full translate-y-2 object-contain lg:w-[340px] lg:max-w-none"
            />
          </motion.span>
        </a>
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 md:flex lg:gap-9">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-bold text-slate-300 transition hover:text-frost lg:text-[1.05rem]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden min-w-0 shrink-0 items-center justify-end gap-1.5 md:flex lg:gap-3">
          <a
            href="#contact"
            className="whitespace-nowrap rounded-xl bg-electric px-3 py-2.5 text-sm font-bold text-ink shadow-aura transition hover:bg-[#8ff0d5] lg:rounded-2xl lg:px-5 lg:py-3 lg:text-base"
          >
            Let&apos;s Connect
          </a>
          <div className="flex shrink-0 items-center gap-1.5 lg:gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-xl border border-cyanline/20 bg-white/10 text-frost shadow-[0_0_20px_rgba(110,231,200,0.08)] transition hover:border-electric/50 hover:bg-electric hover:text-ink lg:h-11 lg:w-11 lg:rounded-2xl"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="ml-auto grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-frost md:hidden"
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
                className="rounded-2xl px-4 py-3 text-lg font-bold text-slate-200 hover:bg-white/10 hover:text-frost"
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
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-cyanline/20 bg-white/10 text-frost transition hover:border-electric/50 hover:bg-electric hover:text-ink"
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

function AnimatedTechStack({
  className = "mt-8 lg:mt-10",
}: {
  className?: string;
} = {}) {
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
    <div className={`w-full max-w-none lg:max-w-4xl ${className}`}>
      <p className="font-heading text-base font-black uppercase tracking-[0.18em] text-cyanline sm:text-lg">
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
              className={`group relative flex h-[5.35rem] min-w-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border px-2 text-center backdrop-blur-xl transition-[border-color,background-color,box-shadow,color] duration-300 ${
                isActive
                  ? "text-frost"
                  : "border-white/10 bg-white/[0.035] text-slate-400 hover:border-white/20 hover:bg-white/[0.07] hover:text-frost"
              }`}
              style={
                isActive
                  ? {
                      borderColor: `${tech.accent}66`,
                      background: `linear-gradient(145deg, ${tech.accent}14, rgba(255, 255, 255, 0.05) 44%, rgba(8, 13, 20, 0.82))`,
                      boxShadow: `0 12px 32px ${tech.accent}18, inset 0 1px 0 rgba(255, 255, 255, 0.075)`,
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
                className="pointer-events-none absolute inset-2 rounded-lg opacity-0 blur-lg"
                style={{
                  background: `radial-gradient(circle, ${tech.accent}24 0%, transparent 68%)`,
                }}
                animate={
                  isActive && !prefersReducedMotion
                    ? { opacity: [0.1, 0.18, 0.1], scale: [0.96, 1.04, 0.96] }
                    : { opacity: 0, scale: 0.96 }
                }
                transition={
                  isActive && !prefersReducedMotion
                    ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.25 }
                }
              />
              <span className="relative flex size-11 items-center justify-center">
                {tech.icon}
              </span>
              <motion.span
                className="relative block max-w-full truncate text-[0.72rem] font-bold leading-none sm:text-xs"
                initial={false}
                animate={{ color: isActive ? tech.accent : "#94a3b8" }}
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
      className="relative mx-auto flex min-h-screen w-full max-w-none items-center px-3 pb-10 pt-28 sm:px-4 sm:pb-16 min-[680px]:px-5 lg:min-h-[calc(100vh-1rem)] lg:max-w-7xl lg:px-8 lg:pt-28"
    >
      <div className="grid w-full items-center gap-x-6 gap-y-7 min-[680px]:grid-cols-[minmax(0,1.08fr)_minmax(13.5rem,0.72fr)] min-[680px]:items-start min-[680px]:gap-x-4 min-[680px]:gap-y-0 md:gap-x-5 lg:grid-cols-[minmax(0,1.22fr)_minmax(21rem,0.76fr)] lg:items-center lg:gap-x-4 xl:grid-cols-[minmax(0,1.18fr)_minmax(24rem,0.72fr)] xl:gap-x-5">
        <motion.div
          className="order-2 min-w-0 max-w-none min-[680px]:order-none min-[680px]:col-start-1 min-[680px]:row-start-1 min-[680px]:pt-4 lg:max-w-[58rem] lg:pt-6 xl:pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="max-w-[60rem] font-heading text-5xl font-black leading-[0.94] text-frost sm:text-6xl min-[680px]:text-[3rem] md:text-[3.25rem] lg:max-w-none lg:text-[4rem] xl:text-[4.85rem]">
            <span className="block">Front-end</span>
            <span className="block">Software Engineer</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9 min-[680px]:text-base min-[680px]:leading-7 md:text-lg md:leading-8 lg:max-w-[52rem] lg:text-xl lg:leading-9">
           I build responsive frontend applications using JavaScript, React, Next.js, and TypeScript with a focus on clean UI, accessibility, and smooth user experience.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-electric px-6 py-4 text-base font-black text-ink shadow-aura transition hover:bg-[#8ff0d5]"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowUpRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-electric/25 bg-white/10 px-6 py-4 text-base font-bold text-frost backdrop-blur-xl transition hover:border-cyanline/70 hover:bg-electric/10"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
              <Mail size={19} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="order-1 relative mx-auto w-full max-w-[24rem] min-[680px]:order-none min-[680px]:col-start-2 min-[680px]:row-span-2 min-[680px]:row-start-1 min-[680px]:mx-0 min-[680px]:max-w-[clamp(13.5rem,35vw,22rem)] min-[680px]:justify-self-end lg:max-w-[29rem] xl:max-w-[31rem]"
          initial={{ scale: 0.94, y: 28 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-8 rounded-full bg-electric/14 blur-[90px]" />

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
            </div>
          </div>
        </motion.div>

        <div className="order-3 min-w-0 min-[680px]:order-none min-[680px]:col-start-1 min-[680px]:row-start-2">
          <AnimatedTechStack className="mt-0 min-[680px]:mt-8 lg:mt-10" />
        </div>
      </div>
    </section>
  );
}


function ProjectScreenshot({
  alt,
  src,
}: {
  alt: string;
  src: string;
}) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#0a1018]">
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
    ? "inline-flex min-w-0 flex-1 items-center justify-center gap-2 bg-electric px-4 py-3.5 text-base font-black text-ink transition hover:bg-[#8ff0d5]"
    : "inline-flex min-w-0 flex-1 items-center justify-center gap-2 bg-white/[0.055] px-4 py-3.5 text-base font-bold text-frost transition hover:bg-white/[0.1] hover:text-electric";

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
    <section id="projects" className="px-5 pb-10 pt-12 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Frontend projects focused on clean UI & responsiveness."
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 lg:auto-rows-fr lg:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => {
            const compactProjectCard = project.name === "NewsExplorer";

            return (
            <motion.article
              key={project.name}
              className={`group project-card flex flex-col overflow-hidden rounded-3xl ${
                compactProjectCard ? "lg:h-auto lg:self-start" : "lg:h-full"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.62, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <ProjectScreenshot
                alt={project.screenshotAlt}
                src={project.screenshot}
              />
              <div
                className={`flex flex-col p-5 sm:p-6 lg:p-7 ${
                  compactProjectCard ? "lg:flex-none" : "lg:flex-1"
                }`}
              >
                <div className="mb-4 flex items-start justify-between gap-4 lg:mb-5">
                  <div className="min-w-0">
                    <p className="font-heading text-sm font-black uppercase tracking-[0.2em] text-cyanline">
                      {project.type}
                    </p>
                    <h3 className="mt-3 font-heading text-3xl font-black leading-tight text-frost">
                      {project.name}
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 font-heading text-sm font-black text-cyanline">
                    0{index + 1}
                  </span>
                </div>
                <p
                  className={`text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 ${
                    compactProjectCard ? "" : "lg:flex-1"
                  }`}
                >
                  {project.summary}
                </p>
                <p className="mt-5 font-heading text-sm font-black uppercase tracking-[0.2em] text-cyanline lg:mt-7">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-white/[0.045] px-4 py-2 text-sm font-semibold text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] p-px sm:flex-row">
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
            );
          })}
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
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.04fr)_minmax(26rem,0.96fr)] lg:items-start lg:gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(28rem,0.92fr)] xl:gap-6">
            <motion.div
              className="glass-panel relative overflow-hidden rounded-[1.5rem] p-5 sm:p-7 lg:rounded-[2rem] lg:p-8 xl:p-10"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric/12 via-transparent to-transparent" />
              <div className="relative w-full max-w-[43rem]">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyanline sm:text-base lg:text-lg">
                  Contact
                </p>
                <h2 className="max-w-[34rem] text-balance font-heading text-4xl font-black leading-tight text-frost sm:text-5xl lg:text-6xl">
                  Let&apos;s Connect!
                </h2>
                <p className="mt-4 max-w-[38rem] text-base leading-7 text-slate-300 lg:mt-5 lg:text-lg lg:leading-8">
                I&apos;m open to developer roles, collaborations, and projects focused on building modern, user-friendly web experiences.
                </p>
                <div className="mt-5 grid gap-3 lg:mt-6 lg:gap-3">
                  <a
                    href="mailto:jge4991@gmail.com"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 transition hover:border-electric/40 hover:bg-white/10 lg:gap-3.5 lg:rounded-2xl lg:p-3.5"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-electric/20 text-cyanline lg:h-11 lg:w-11 lg:rounded-2xl xl:h-12 xl:w-12">
                      <Mail size={19} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400 lg:text-sm">Email</span>
                      <span className="text-sm font-bold text-frost lg:text-base">Joel124@outlook.es</span>
                    </span>
                  </a>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 lg:gap-3.5 lg:rounded-2xl lg:p-3.5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-electric/20 text-cyanline lg:h-11 lg:w-11 lg:rounded-2xl xl:h-12 xl:w-12">
                      <MapPin size={19} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400 lg:text-sm">Location</span>
                      <span className="text-sm font-bold text-frost lg:text-base">Union City, New Jersey</span>
                    </span>
                  </div>
                  <a
                    href="https://github.com/Alvarez-J1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 transition hover:border-electric/40 hover:bg-white/10 lg:gap-3.5 lg:rounded-2xl lg:p-3.5"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-ink lg:h-11 lg:w-11 lg:rounded-2xl xl:h-12 xl:w-12">
                      <GithubIcon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400 lg:text-sm">GitHub</span>
                      <span className="text-sm font-bold text-frost lg:text-base">Alvarez-J1</span>
                    </span>
                    
                  </a>
                   <a
                    href="https://www.linkedin.com/in/joel-alvarez-software-engineer/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 transition hover:border-electric/40 hover:bg-white/10 lg:gap-3.5 lg:rounded-2xl lg:p-3.5"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0a66c2] text-frost lg:h-11 lg:w-11 lg:rounded-2xl xl:h-12 xl:w-12">
                      <LinkedInIcon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400 lg:text-sm">LinkedIn</span>
                      <span className="text-sm font-bold text-frost lg:text-base">Joel Alvarez</span>
                    </span>
                    
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.form
              className="glass-panel w-full self-start rounded-[1.5rem] p-5 sm:p-6 lg:rounded-[2rem] lg:p-8 xl:p-9"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65 }}
              onSubmit={handleSubmit}
              
            >
              <label className="mb-4 block lg:mb-5">
                <span className="mb-2 block text-sm font-bold text-frost">Your Name</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-frost outline-none transition placeholder:text-slate-500 focus:border-electric/60 focus:ring-4 focus:ring-electric/10 lg:rounded-2xl lg:py-4 lg:text-base"
                  placeholder="Jane Tyler"
                  type="text"
                  name="name"
                />
              </label>
              <label className="mb-4 block lg:mb-5">
                <span className="mb-2 block text-sm font-bold text-frost">
                  Email Address
                </span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-frost outline-none transition placeholder:text-slate-500 focus:border-electric/60 focus:ring-4 focus:ring-electric/10 lg:rounded-2xl lg:py-4 lg:text-base"
                  placeholder="Jane@company.com"
                  type="email"
                  name="email"
                />
              </label>
              <label className="mb-5 block lg:mb-6">
                <span className="mb-2 block text-sm font-bold text-frost">Message</span>
                <textarea
                  className="min-h-28 w-full resize-none rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-frost outline-none transition placeholder:text-slate-500 focus:border-electric/60 focus:ring-4 focus:ring-electric/10 sm:min-h-32 lg:min-h-44 lg:rounded-2xl lg:py-4 lg:text-base"
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
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-electric px-5 py-3 text-sm font-black text-ink shadow-aura transition hover:bg-[#8ff0d5] lg:rounded-2xl lg:px-6 lg:py-4 lg:text-base"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={19} />
              </motion.button>
            </motion.form>
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
