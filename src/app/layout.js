import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md Abrar Hasan | Full Stack Developer",
  description:
    "Full Stack Developer Portfolio of Md Abrar Hasan - Building modern web experiences with React, Next.js, Node.js and cutting-edge technologies",
  keywords: [
    "Md Abrar Hasan",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Md Abrar Hasan" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
