import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joel Alvarez | Full-Stack Software Engineer",
  description:
    "A modern software engineer portfolio showcasing full-stack applications, responsive user interfaces, and projects built with React, Next.js, TypeScript, Node.js, Express, and MongoDB.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
