import type { Metadata } from "next";
import { FloatingNav } from "@/components/ui/floating-navbar"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hermosa",
  description: "Windows sun valley, the way it should've been",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let items = [
    {name: "Home", link: "/"},
    {name:"Meet Hermosa", link: "/about"},
    {name:"Screenshots", link: "/screenshots"},
  ]
  return (
    <html lang="en">
      <body className={inter.className+" dark:bg-dot-white/[0.2]"}>
        <FloatingNav navItems={items}/>
        {children}</body>
    </html>
  );
}
