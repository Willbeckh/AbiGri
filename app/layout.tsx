import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import Footer from "./footer/page";
import { menuItems } from "../data/menuData";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "AbiGri",
  description: "Empowering Africa’s Farmers, One Smart Solution at a Time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <Analytics />
        <SpeedInsights />
        <NavBar menuItems={menuItems} />
        <main className="-mt-[74px] ">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
