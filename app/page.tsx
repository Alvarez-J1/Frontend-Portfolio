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

const TECH_LOGO_SIZE = 72;

const techIconClass = "h-full w-full shrink-0 overflow-visible";

function TechIcon({
  children,
  className = "h-full w-full",
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
    <span className="flex h-full w-full shrink-0 items-center justify-center">
      <span
        className={`flex h-[88%] w-[88%] items-center justify-center drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)] ${className}`}
      >
        {children}
      </span>
    </span>
  );
}

function TechLogoImage({
  alt,
  src,
  className = "",
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
  className = "",
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
    <TechIcon>
      <Image
        src="/tech/nextjs.svg"
        alt="Next.js"
        width={TECH_LOGO_SIZE}
        height={TECH_LOGO_SIZE}
        className="size-[88%] object-contain object-center drop-shadow-[0_0_16px_rgba(255,255,255,0.16)]"
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
    name: "TypeScript",
    accent: "#3178C6",
    icon: (
      <TechLogoSvg className="size-[88%]">
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
    name: "React",
    accent: "#61DAFB",
    icon: (
      <TechLogoSvg className="h-[78%] w-[96%]">
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
    name: "Angular",
    accent: "#DD0031",
    icon: (
      <TechLogoSvg className="size-[88%]">
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <path
            fill="#DD0031"
            d="M9.93 12.645h4.134L11.996 7.74M11.996.009L.686 4.018l1.725 14.953 9.585 5.32 9.588-5.32 1.725-14.953zm7.058 18.063h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.816z"
          />
        </svg>
      </TechLogoSvg>
    ),
  },
  {
    name: "RxJS",
    accent: "#E6007E",
    icon: <TechLogoImage src="/tech/rxjs.png" alt="RxJS" />,
  },
  {
    name: "HTML5",
    accent: "#E34F26",
    icon: (
      <TechLogoImage
        src="/tech/html5.svg"
        alt="HTML"
        className="h-[92%] w-[76%]"
      />
    ),
  },
  {
    name: "CSS3",
    accent: "#1572B6",
    icon: (
      <TechLogoImage
        src="/tech/css3.svg"
        alt="CSS"
        className="h-[92%] w-[76%]"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    accent: "#38BDF8",
    icon: (
      <TechLogoSvg className="h-[68%] w-[98%]">
        <svg viewBox="0 0 48 29" className={techIconClass} aria-hidden>
          <path
            fill="#38bdf8"
            d="M24 0C17.6 0 13.6 3.2 12 9.6c2.4-3.2 5.2-4.4 8.4-3.6 1.8.45 3.09 1.76 4.52 3.2 2.33 2.35 5.02 5.05 11.08 5.05 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.45-3.09-1.76-4.52-3.2C32.75 2.7 30.06 0 24 0ZM12 14.25c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.45 3.09 1.76 4.52 3.2 2.33 2.35 5.02 5.05 11.08 5.05 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.45-3.09-1.76-4.52-3.2-2.33-2.35-5.02-5.05-11.08-5.05Z"
          />
        </svg>
      </TechLogoSvg>
    ),
  },
  {
    name: "Sass",
    accent: "#CC6699",
    icon: (
      <TechLogoSvg className="size-[88%]">
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <path
            fill="#CC6699"
            d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"
          />
        </svg>
      </TechLogoSvg>
    ),
  },
  {
    name: "MUI",
    accent: "#007FFF",
    icon: (
      <TechLogoSvg className="size-[88%]">
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <path
            fill="#007FFF"
            d="M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z"
          />
        </svg>
      </TechLogoSvg>
    ),
  },
  {
    name: "Node.js",
    accent: "#68A063",
    icon: (
      <TechLogoSvg className="size-[88%]">
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
      <TechLogoSvg className="size-[88%]">
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
    name: "Java",
    accent: "#EA2D2E",
    icon: (
      <TechLogoImage
        src="/tech/java.png"
        alt="Java"
        className="h-full w-[72%]"
      />
    ),
  },
  {
    name: "Spring Boot",
    accent: "#6DB33F",
    icon: (
      <TechLogoImage
        src="/tech/spring-boot.svg"
        alt="Spring Boot"
        className="h-[82%] w-[94%]"
      />
    ),
  },
  {
    name: "Spring Security",
    accent: "#86C440",
    icon: (
      <TechLogoImage
        src="/tech/spring-security.svg"
        alt="Spring Security"
        className="h-[90%] w-[72%]"
      />
    ),
  },
  {
    name: "MongoDB",
    accent: "#47A248",
    icon: (
      <TechLogoSvg className="h-[96%] w-[68%]">
        <svg
          viewBox="8.738 -5.036 17.46 39.406"
          className={techIconClass}
          aria-hidden
        >
          <path
            fill="#599636"
            d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1-1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1-.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z"
          />
          <path
            fill="#6CAC48"
            d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z"
          />
          <path
            fill="#C2BFBF"
            d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1-.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z"
          />
        </svg>
      </TechLogoSvg>
    ),
  },
  {
    name: "PostgreSQL",
    accent: "#4F86C6",
    icon: <TechLogoImage src="/tech/postgresql.svg" alt="PostgreSQL" />,
  },
  {
    name: "Git",
    accent: "#F05032",
    icon: (
      <TechLogoSvg className="size-[88%]">
        <svg viewBox="0 0 24 24" className={techIconClass} aria-hidden>
          <path
            fill="#F05032"
            d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"
          />
        </svg>
      </TechLogoSvg>
    ),
  },
  {
    name: "Vite",
    accent: "#A855F7",
    icon: (
      <TechLogoSvg className="size-[88%]">
        <svg
          viewBox="-1.871 -0.407 259.721 257.849"
          className={techIconClass}
          aria-hidden
        >
          <defs>
            <linearGradient
              id="vite-gradient-base"
              x1="-.828%"
              x2="57.636%"
              y1="7.652%"
              y2="78.411%"
            >
              <stop offset="0" stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient
              id="vite-gradient-bolt"
              x1="43.376%"
              x2="50.316%"
              y1="2.242%"
              y2="89.03%"
            >
              <stop offset="0" stopColor="#FFEA83" />
              <stop offset=".083" stopColor="#FFDD35" />
              <stop offset="1" stopColor="#FFA800" />
            </linearGradient>
          </defs>
          <path
            fill="url(#vite-gradient-base)"
            d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62z"
          />
          <path
            fill="url(#vite-gradient-bolt)"
            d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113z"
          />
        </svg>
      </TechLogoSvg>
    ),
  },
  {
    name: "Docker",
    accent: "#2496ED",
    icon: (
      <TechLogoImage
        src="/tech/docker.svg"
        alt="Docker"
        className="h-[76%] w-[96%]"
      />
    ),
  },
];

const heroMarqueeTechnologies = heroTechnologies;


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
      "Datara is a full-stack sales analytics dashboard that helps teams monitor revenue, customer performance, and business insights through interactive data visualizations. It features secure authentication, customizable dashboard settings, responsive data tables, and dynamic KPI reporting, powered by a Java Spring Boot backend with PostgreSQL and a modern Next.js frontend.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Chart.js",
      "SCSS",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "PostgreSQL",
      "REST API",
      "Docker",
    ],
    accent: "from-teal-300 to-slate-400",
    screenshot: "/dr.png",
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
      "Elevate is a full-stack ecommerce storefront built with Next.js, React, TypeScript, Tailwind CSS, Java, Spring Boot, and PostgreSQL. It features secure authentication, product browsing and filtering, persistent cart management, checkout, order history, account activity, and a responsive interface across desktop and mobile.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "PostgreSQL",
      "REST API",
      "Docker",
    ],
    accent: "from-teal-300 to-emerald-200",
    screenshot: "/ele.png",
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
    name: "AgencyOS",
    type: "AGENCY MANAGEMENT PLATFORM",
    summary:
      "AgencyOS is a full-stack agency management platform that helps teams manage clients, projects, and tasks from a single workspace. It features secure authentication, responsive dashboards, complete CRUD functionality, project status tracking, client management, and task organization, all powered by a Node.js, Express, and MongoDB backend.",
    stack: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
      "SCSS"
    ],
    accent: "from-emerald-300 to-teal-200",
    screenshot: "/aqw.png",
    screenshotAlt: "AgencyOS agency management platform preview",
    actions: [
      {
        label: "Live Demo",
        href: "https://agencyos-saas.vercel.app/login",
        primary: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/Alvarez-J1/agencyos",
      },
    ],
  },
  {
    name: "NewsExplorer",
    type: "Search Platform",
    summary:
      "NewsExplorer is a full-stack application that allows users to search for news articles by keyword and browse the latest headlines through a clean, responsive interface. Users can create an account, save articles to their personal collection, and easily manage their saved stories from a dedicated saved articles page.",
    stack: ["React", "Vite", "JavaScript ES6+", "Java", "Spring Boot", "Spring Security", "PostgreSQL", "JWT", "Docker", "REST API"],
    accent: "from-slate-300 to-teal-300",
    screenshot: "/n.png",
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
  {
    name: "WeatherFit",
    type: "Weather Clothing App",
    summary:
      "WeatherFit is a full-stack weather-based clothing recommendation application that helps users choose appropriate outfits based on current weather conditions. It displays the user's location, date, and real-time temperature, then recommends clothing items tailored to the forecast.",
    stack: [
      "React",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST API",
      "OpenWeather API"
    ],
    accent: "from-emerald-300 to-teal-200",
    screenshot: "/weatherr.png",
    screenshotAlt: "WTWR weather wardrobe app preview",
    actions: [
      {
        label: "Live Demo",
        href: "https://weather-fit-phi.vercel.app/",
        primary: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/Alvarez-J1/se_project_react",
      },
    ],
  },
   {
    name: "Code Switcher",
    type: "Marketing Website",
    summary:
      "Code Switcher is a modern SaaS-inspired landing page built with HTML, CSS, and JavaScript. It features interactive language tabs, syntax highlighted code examples, animated UI components, responsive layouts, and a production-quality interface inspired by modern developer tools and authentication platforms. The project focuses on clean visual hierarchy, smooth animations, accessibility, and responsive design across desktop, tablet, and mobile devices.",
    stack: [
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
    ],
    accent: "from-teal-300 to-slate-300",
    screenshot: "/code.png",
    screenshotAlt: "WTWR weather wardrobe app preview",
    actions: [
      {
        label: "Live Demo",
        href: "https://codeswitch-sable.vercel.app",
        primary: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/Alvarez-J1/Code-Switcher",
      },
    ],
  },
  {
    name: "MacBook Pro Landing Page",
    type: "Product Landing Page",
    summary:
      "A responsive Apple MacBook Pro product landing page clone inspired by Apple’s official website design system. This project focuses on pixel-perfect UI replication, layout consistency, and responsive behavior across breakpoints.",
    stack: [
      "HTML5",
      "CSS3",
    ],
    accent: "from-emerald-300 to-teal-200",
    screenshot: "/Apple.png",
    screenshotAlt: "WTWR weather wardrobe app preview",
    actions: [
      {
        label: "Live Demo",
        href: "https://mac-book-pro-landing-page-clone.vercel.app/",
        primary: true,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/Alvarez-J1/MacBook_Pro_Landing-Page_Clone",
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
          <div className="flex shrink-0 items-center gap-1.5 lg:gap-2 min-[1600px]:gap-2.5 min-[1920px]:gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-xl border border-cyanline/20 bg-white/10 text-frost shadow-[0_0_20px_rgba(110,231,200,0.08)] transition hover:border-electric/50 hover:bg-electric hover:text-ink lg:h-11 lg:w-11 lg:rounded-2xl min-[1600px]:h-[3.25rem] min-[1600px]:w-[3.25rem] min-[1600px]:rounded-[1.25rem] min-[1600px]:[&_svg]:h-7 min-[1600px]:[&_svg]:w-7 min-[1920px]:h-14 min-[1920px]:w-14 min-[1920px]:[&_svg]:h-[1.875rem] min-[1920px]:[&_svg]:w-[1.875rem]"
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

function useCanHover() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return canHover;
}

const TECH_ICON_HOVER_SPRING = {
  type: "spring" as const,
  stiffness: 340,
  damping: 26,
  mass: 0.8,
};

function getTechIconVariants(accent: string, prefersReducedMotion: boolean) {
  const restFilter = `brightness(1) saturate(1) contrast(1) drop-shadow(0 0 0 ${accent}00)`;
  const hoverFilter = `brightness(1.15) saturate(1.18) contrast(1.08) drop-shadow(0 0 12px ${accent})`;

  if (prefersReducedMotion) {
    return {
      rest: { filter: restFilter },
      hover: { filter: hoverFilter, transition: { duration: 0.15 } },
    };
  }

  return {
    rest: { scale: 1, y: 0, filter: restFilter },
    hover: {
      scale: 1.18,
      y: -2,
      filter: hoverFilter,
      transition: TECH_ICON_HOVER_SPRING,
    },
  };
}

function getTechLabelVariants(prefersReducedMotion: boolean) {
  if (prefersReducedMotion) {
    return {
      rest: { opacity: 0 },
      hover: { opacity: 1, transition: { duration: 0.15 } },
    };
  }

  return {
    rest: { opacity: 0, y: 5 },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.18, ease: "easeOut" as const },
    },
  };
}

function AnimatedTechStack({
  className = "",
}: {
  className?: string;
} = {}) {
  const prefersReducedMotion = useReducedMotion();
  const canHover = useCanHover();
  const marqueeSets = [0, 1];
  const [pressedLogoKey, setPressedLogoKey] = useState<string | null>(null);

  useEffect(() => {
    if (pressedLogoKey === null) return;
    const timeout = window.setTimeout(() => setPressedLogoKey(null), 650);
    return () => window.clearTimeout(timeout);
  }, [pressedLogoKey]);

  return (
    <div className={`w-full max-w-none lg:max-w-4xl ${className}`}>
      <div className="tech-marquee" role="list" aria-label="Technologies">
        <div className="tech-marquee__track">
          {marqueeSets.map((setIndex) => (
            <div
              key={setIndex}
              className="tech-marquee__group"
              aria-hidden={setIndex === 1}
            >
              {heroMarqueeTechnologies.map((tech) => {
                const logoKey = `${setIndex}-${tech.name}`;

                return (
                  <motion.div
                    key={logoKey}
                    className="tech-marquee__item"
                    role={setIndex === 0 ? "listitem" : undefined}
                    aria-label={setIndex === 0 ? tech.name : undefined}
                    initial="rest"
                    animate={pressedLogoKey === logoKey ? "hover" : "rest"}
                    whileHover={canHover ? "hover" : undefined}
                    onPointerDown={(event) => {
                      if (event.pointerType === "mouse") return;
                      setPressedLogoKey(logoKey);
                    }}
                  >
                    <motion.span
                      className="tech-marquee__logo"
                      aria-hidden="true"
                      variants={getTechIconVariants(
                        tech.accent,
                        Boolean(prefersReducedMotion),
                      )}
                    >
                      {tech.icon}
                    </motion.span>
                    <motion.span
                      className="tech-marquee__label"
                      aria-hidden="true"
                      style={{ color: tech.accent }}
                      variants={getTechLabelVariants(Boolean(prefersReducedMotion))}
                    >
                      {tech.name}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen w-full max-w-none items-center px-3 pb-10 pt-28 sm:px-4 sm:pb-16 min-[680px]:min-h-0 min-[680px]:px-6 min-[680px]:pb-16 md:px-8 lg:max-w-7xl lg:items-start lg:px-8 lg:pb-8 lg:pt-32 min-[1440px]:pt-40 2xl:pt-44"
    >
      <div className="grid w-full items-center gap-x-6 gap-y-7 min-[680px]:grid-cols-[minmax(0,1.22fr)_minmax(12.25rem,0.68fr)] min-[680px]:items-start min-[680px]:gap-x-5 min-[680px]:gap-y-0 md:grid-cols-[minmax(0,1.28fr)_minmax(13.5rem,0.72fr)] md:gap-x-6 lg:grid-cols-[minmax(0,1.22fr)_minmax(21rem,0.76fr)] lg:items-start lg:gap-x-4 xl:grid-cols-[minmax(0,1.18fr)_minmax(24rem,0.72fr)] xl:gap-x-5">
        <motion.div
          className="order-2 min-w-0 max-w-none min-[680px]:order-none min-[680px]:col-start-1 min-[680px]:row-start-1 min-[680px]:pt-4 lg:max-w-[58rem] lg:pt-6 xl:pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="max-w-[60rem] font-heading text-5xl font-black leading-[0.94] text-frost sm:text-6xl min-[680px]:text-[clamp(2.65rem,6.25vw,3rem)] min-[912px]:text-[3.25rem] lg:max-w-none lg:text-[4rem] xl:text-[4.85rem]">
            <span className="block">Full-Stack</span>
            <span className="block">Software Engineer</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9 min-[680px]:max-w-none min-[680px]:text-base min-[680px]:leading-7 md:text-lg md:leading-8 lg:max-w-[52rem] lg:text-xl lg:leading-9">
           I build responsive full-stack applications using React, Next.js, Angular, Java, Spring Boot, Node.js, Express, PostgreSQL, and MongoDB with a focus on clean UI, accessibility, and smooth user experience.
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
          className="order-1 relative mx-auto w-full max-w-[19rem] sm:max-w-[21rem] min-[680px]:order-none min-[680px]:col-start-2 min-[680px]:row-span-2 min-[680px]:row-start-1 min-[680px]:mx-0 min-[680px]:max-w-[clamp(12rem,31vw,20rem)] min-[680px]:justify-self-end md:max-w-[clamp(13rem,32vw,22rem)] lg:max-w-[29rem] xl:max-w-[31rem]"
          initial={{ scale: 0.94, y: 28 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-8 rounded-full bg-electric/14 blur-[90px]" />

          <div className="animated-border rounded-[2rem] p-px">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-glass backdrop-blur-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-electric/10" />
              <Image
                src="/linkedin.png"
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
  href,
}: {
  alt: string;
  src: string;
  href?: string;
}) {
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
    />
  );

  if (!href) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0a1018]">
        {image}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open live demo: ${alt}`}
      className="relative block aspect-[16/10] cursor-pointer overflow-hidden bg-[#0a1018]"
    >
      {image}
    </a>
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
    <section id="projects" className="px-5 pb-10 pt-12 sm:px-8 sm:py-24 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Projects focused on clean UI & responsiveness."
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
          {projects.map((project, index) => {
            return (
            <motion.article
              key={project.name}
              className="group project-card flex flex-col overflow-hidden rounded-3xl lg:h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.62, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <ProjectScreenshot
                alt={project.screenshotAlt}
                src={project.screenshot}
                href={project.actions.find((action) => action.primary)?.href}
              />
              <div className="flex flex-col p-5 sm:p-6 lg:p-7 lg:flex-1">
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
                <p className="text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:flex-1">
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
                          <ArrowUpRight size={24} />
                        ) : (
                          <GithubIcon size={26} />
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
        <div className="mx-auto grid w-full max-w-[56rem] gap-5 xl:max-w-7xl xl:grid-cols-2 xl:items-start xl:gap-6">
            <motion.div
              className="glass-panel relative overflow-hidden rounded-[1.5rem] p-5 sm:p-7 lg:rounded-[2rem] lg:p-8 xl:p-10"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric/12 via-transparent to-transparent" />
              <div className="relative w-full max-w-none">
                <div className="relative md:min-h-[14rem]">
                  <div className="pointer-events-none absolute right-0 top-[-0.25rem] hidden aspect-square w-[13.25rem] overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-glass md:block xl:w-[13rem]">
                    <Image
                      src="/park.png"
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 208px, (min-width: 768px) 212px"
                      className="object-cover object-top"
                    />
                  </div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyanline sm:text-base lg:text-lg">
                  Contact
                </p>
                <h2 className="max-w-none whitespace-nowrap pr-0 font-heading text-4xl font-black leading-tight text-frost sm:text-[2.85rem] md:pr-[15rem] md:text-[3rem] xl:pr-[14rem] xl:text-[2.25rem]">
                  Let&apos;s Connect!
                </h2>
                <p className="mt-4 w-full max-w-none pr-0 text-base leading-7 text-slate-300 md:max-w-[calc(100%-14.5rem)] xl:max-w-[calc(100%-13.75rem)]">
                  I&apos;m open to developer roles,<span className="xl:max-[1314px]:hidden"> </span>
                  <br className="hidden xl:max-[1314px]:block" />
                  <span className="min-[1315px]:whitespace-nowrap">collaborations,</span>{" "}
                  and projects focused on building modern, user-friendly web experiences.
                </p>
                <div className="relative mx-auto mt-5 aspect-[4/3] w-full max-w-[16rem] overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-glass md:hidden">
                  <Image
                    src="/park.png"
                    alt=""
                    fill
                    sizes="(max-width: 767px) 256px"
                    className="object-cover object-top"
                  />
                </div>
                </div>
                <div className="mt-5 grid auto-rows-fr grid-cols-1 gap-3 sm:gap-4 md:mt-6 lg:grid-cols-2 lg:gap-4 xl:gap-6">
                  <a
                    href="mailto:jge4991@gmail.com"
                    className="flex h-full min-h-[4.5rem] items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 transition hover:border-electric/40 hover:bg-white/10 lg:min-h-[5rem] lg:gap-3.5 lg:rounded-2xl lg:p-3.5"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-electric/20 text-cyanline lg:h-11 lg:w-11 lg:rounded-2xl xl:h-12 xl:w-12">
                      <Mail size={19} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-400 lg:text-sm">Email</span>
                      <span className="text-sm font-bold text-frost lg:text-base">Joel124@outlook.es</span>
                    </span>
                  </a>
                  <a
                    href="https://github.com/Alvarez-J1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full min-h-[4.5rem] items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 transition hover:border-electric/40 hover:bg-white/10 lg:min-h-[5rem] lg:gap-3.5 lg:rounded-2xl lg:p-3.5"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-ink lg:h-11 lg:w-11 lg:rounded-2xl xl:h-12 xl:w-12">
                      <GithubIcon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-400 lg:text-sm">GitHub</span>
                      <span className="text-sm font-bold text-frost lg:text-base">Alvarez-J1</span>
                    </span>
                    
                  </a>
                  <div className="flex h-full min-h-[4.5rem] items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 lg:min-h-[5rem] lg:gap-3.5 lg:rounded-2xl lg:p-3.5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-electric/20 text-cyanline lg:h-11 lg:w-11 lg:rounded-2xl xl:h-12 xl:w-12">
                      <MapPin size={19} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-400 lg:text-sm">Location</span>
                      <span className="text-sm font-bold text-frost lg:text-base">Union City, NJ</span>
                    </span>
                  </div>
                   <a
                    href="https://www.linkedin.com/in/joel-alvarez-software-engineer/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full min-h-[4.5rem] items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 transition hover:border-electric/40 hover:bg-white/10 lg:min-h-[5rem] lg:gap-3.5 lg:rounded-2xl lg:p-3.5"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0a66c2] text-frost lg:h-11 lg:w-11 lg:rounded-2xl xl:h-12 xl:w-12">
                      <LinkedInIcon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-400 lg:text-sm">LinkedIn</span>
                      <span className="text-sm font-bold text-frost lg:text-base">Joel Alvarez</span>
                    </span>
                    
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.form
              className="glass-panel w-full rounded-[1.5rem] p-5 sm:p-6 lg:h-full lg:rounded-[2rem] lg:p-8 xl:p-9"
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
                  className="min-h-28 w-full resize-none rounded-xl border border-white/10 bg-ink/70 px-4 py-3 text-sm text-frost outline-none transition placeholder:text-slate-500 focus:border-electric/60 focus:ring-4 focus:ring-electric/10 sm:min-h-32 lg:min-h-20 lg:rounded-2xl lg:py-4 lg:text-base"
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
    <main className="relative overflow-x-hidden">
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
            Full-Stack Software Engineer
          </div>
        </div>
      </footer>
    </main>
  );
}
