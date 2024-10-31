"use client";

import Link from "next/link";
import { LayoutDashboard, BarChart3, UserCircle, Settings } from "lucide-react";
import Image from "next/image";
import LogoutButton from "@/components/Logout";
import {
  Sidebar,
  SidebarContent,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

const navRoutes = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
    color: "text-violet-500",
  },
  {
    label: "Profile",
    icon: UserCircle,
    href: "/dashboard/profile",
    color: "text-pink-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
    color: "text-gray-500",
  },
];

export function DashboardNav() {
  return (
    <Sidebar>
      <SidebarContent className="p-4 pt-10">
        <SidebarGroupContent>
          <Image
            src="/images/Abigrilogo.png"
            alt="AbiGri logo"
            width={100}
            height={100}
          />
          <p className="text-sm text-muted-foreground mb-6">
            Farm Management Dashboard
          </p>
        </SidebarGroupContent>
        <SidebarContent className="">
          <SidebarMenu>
            {navRoutes.map((route) => (
              <SidebarMenuItem key={route.label} className="space-y-4">
                <SidebarMenuButton asChild className="font-semibold text-lg">
                  <Link href={route.href}>
                    <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
                    {route.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <LogoutButton />
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
