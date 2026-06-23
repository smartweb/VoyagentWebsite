import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Voyagent - AI Travel Concierge",
  description:
    "Tell us where you need to go. Voyagent handles the rest. AI-powered travel planning, booking, and monitoring for global business travelers.",
  openGraph: {
    title: "Voyagent - AI Travel Concierge",
    description:
      "Tell us where you need to go. Voyagent handles the rest. AI-powered travel planning, booking, and monitoring for global business travelers.",
    url: "https://voyagent.pro",
    siteName: "Voyagent",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0B1120] font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
