import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joel Alvarez | Frontend Developer",
  description:
    "A cinematic frontend developer portfolio showcasing modern React, Next.js, TypeScript, and polished product interfaces.",
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
