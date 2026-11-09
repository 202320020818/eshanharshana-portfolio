import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import CursorTrail from "@/components/CursorTrail";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Better metadata */
export const metadata = {
  title: "Eshan Harshana | Software Developer",
  description:
    "Portfolio of Eshan Harshana, Software Developer specializing in modern web technologies.",
};

/* Important for Chrome responsive mode */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full overflow-x-hidden bg-primary">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden bg-primary text-white antialiased`}
      >
        <CursorTrail />
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Header />
          <StairTransition />
          <main className="flex-grow overflow-x-hidden">
            <PageTransition>{children}</PageTransition>
          </main>
          <footer className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/60 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-[1600px]">
              {"\u00A9"} 2026 Eshan Harshana. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
