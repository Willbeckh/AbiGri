import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import Footer from "./footer/page";
import { menuItems } from "../data/menuData";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "AbiGri",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning={true}>
      <body className="">
        <Analytics />
        <SpeedInsights />
        <NavBar menuItems={menuItems} />
        <main className="-mt-[74px] ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
