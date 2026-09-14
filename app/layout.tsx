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
  title: "Omer El Awad | Executive Assistant, Operations & Automation Specialist",
  description:
    "Executive Assistant and Operations Specialist with 6+ years building SOPs, CRM pipelines, workflow automations, and KPI dashboards. Skilled in GoHighLevel, Zapier, Make.com, and AI-assisted workflows — helping businesses run leaner and scale smoother.",
  keywords: [
    "Executive Assistant",
    "Virtual Executive Assistant",
    "Operations Specialist",
    "CRM Specialist",
    "GoHighLevel",
    "Business Operations",
    "Process Improvement",
    "Workflow Automation",
    "Project Coordination",
    "SOP Development",
    "KPI Dashboards",
    "Lean Six Sigma",
    "Remote Operations Support",
  ],
  authors: [{ name: "Omer El Awad" }],
  openGraph: {
    title: "Omer El Awad | Executive Assistant, Operations & Automation Specialist",
    description:
      "Executive Assistant and Operations Specialist building SOPs, CRM pipelines, workflow automations, and KPI dashboards for growing businesses — entirely remote.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Omer El Awad | Executive Assistant, Operations & Automation Specialist",
    description:
      "Executive Assistant and Operations Specialist building SOPs, CRM pipelines, workflow automations, and KPI dashboards for growing businesses — entirely remote.",
  },
};

const THEME_SCRIPT = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
