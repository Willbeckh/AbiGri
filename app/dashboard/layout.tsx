import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardNav } from "@/components/dashboard/nav";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <DashboardNav />
      <main className="bg-green-100 w-full px-14">
        <div className="pt-24">
          <div className="flex">
            <div
              className="tooltip tooltip-info tooltip-bottom"
              data-tip="Open sidebar"
            >
              <SidebarTrigger tabIndex={0} size="icon" />
            </div>
            <h1 className="font-bold">Dashboard</h1>
          </div>
          <div className="">{children}</div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default AuthLayout;
