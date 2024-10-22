"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
  className?: string;
  variant?: "link" | "outline" | "default" | "secondary" | "ghost";
}

export const NavButton = ({
  label,
  href,
  className,
  variant,
}: BackButtonProps) => {
  return (
    <Button variant={variant} className={`${className} font-normal w-full`}>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
