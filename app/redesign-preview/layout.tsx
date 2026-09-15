import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./redesign.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Redesign Preview | Omer El Awad",
  description: "Isolated redesign mockup — not the live site.",
  robots: { index: false, follow: false },
};

export default function RedesignPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${manrope.variable} ${inter.variable} rp-scope min-h-screen`}>
      {children}
    </div>
  );
}
