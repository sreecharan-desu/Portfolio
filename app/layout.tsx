import type { Metadata } from "next";
import { Geist, Geist_Mono, Jura } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Sr3x0r",
  description: "CS Junior turned FullStack and DevOps Engineer | AKA Sr3X0r",
  icons: {
    icon: "/sr3x0r-icon.jpeg", // Place favicon.ico in /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <meta name="google-site-verification" content="koNSYWvj-OocClKflR2QfftPUCohXsaExIJ9ZVH0KBQ" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jura.variable} antialiased`}
      >
        {children}
        <Analytics /> 
      </body>
    </html>
  );
}
