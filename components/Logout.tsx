"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { logout } from "@/actions/action";

export default function LogoutButton() {
  return (
    <Button
      onClick={() => logout()}
      variant="ghost"
      size="sm"
      className="flex items-center gap-3 text-red-600 hover:bg-red-50"
    >
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  );
}
