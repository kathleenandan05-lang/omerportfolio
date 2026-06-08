import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Omer El Awad — Operations & Automation Specialist",
  description:
    "Industrial Engineer and Automation Specialist who builds CRM systems, Zapier/Make workflows, dashboards, and SOPs that help businesses eliminate manual work and scale operations.",
  keywords: [
    "Operations Specialist",
    "Automation",
    "CRM",
    "Zapier",
    "Make",
    "GoHighLevel",
    "SOP",
    "Process Improvement",
    "Virtual Assistant",
  ],
  authors: [{ name: "Omer El Awad" }],
  openGraph: {
    title: "Omer El Awad — Operations & Automation Specialist",
    description:
      "Building CRM systems, automation workflows, and operations infrastructure that eliminates manual work and scales businesses.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Omer El Awad — Operations & Automation Specialist",
    description:
      "Building CRM systems, automation workflows, and operations infrastructure that eliminates manual work and scales businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}
