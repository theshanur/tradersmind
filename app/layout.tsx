import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TradersMind",
  description: "Next.js app with TypeScript, Tailwind CSS, and shadcn/ui",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col ">
        <Header />
        {children}
      </body>
    </html>
  );
}
