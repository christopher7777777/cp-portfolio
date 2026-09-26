import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Christopher Pokharel | Full Stack Developer",
  description:
    "Christopher Pokharel is a Full Stack Developer from Nepal specializing in React, Next.js, Node.js, Express.js, MongoDB and modern web application development.",
  keywords: [
    "Christopher Pokharel",
    "Full Stack Developer Nepal",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer Nepal",
    "MERN Stack Developer",
    "Inaruwa Sunsari Developer",
  ],
  authors: [{ name: "Christopher Pokharel" }],
  creator: "Christopher Pokharel",
  openGraph: {
    title: "Christopher Pokharel | Full Stack Developer (MERN)",
    description:
      "Motivated full-stack developer with hands-on experience in React, Next.js, Node.js, Express.js, MongoDB, Prisma, Django, Java, Python, and .NET.",
    url: "https://github.com/christopher7777777",
    siteName: "Christopher Pokharel Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Pokharel | Full Stack Developer",
    description:
      "Building modern, responsive and user-focused web applications with MERN & Next.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased bg-grid-pattern min-h-screen relative`}
      >
        {children}
      </body>
    </html>
  );
}
