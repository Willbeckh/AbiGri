"use client";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { LogOut } from "lucide-react";
import { logout } from "@/actions/action";

export default function LogoutButton() {
  const { logout: logoutState } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    logoutState();
  };
  
  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      size="sm"
      className="flex items-center gap-3 text-red-600 hover:bg-red-50"
    >
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  );
}
