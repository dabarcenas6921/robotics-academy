"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    require("preline");
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
