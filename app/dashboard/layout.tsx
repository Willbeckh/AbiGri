import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen p-8 flex bg-green-50">
      <div className="mt-20">{children}</div>
    </div>
  );
};

export default AuthLayout;
