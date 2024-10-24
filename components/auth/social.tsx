"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => console.log("Google")}
      >
        Google <FcGoogle size={40} />
      </Button>
    </div>
  );
};
