import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { portfolioData } from "@/lib/data";

export const metadata: Metadata = {
  title: `${portfolioData.name} | Portfolio`,
  description: portfolioData.tagline
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
