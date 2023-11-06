import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
