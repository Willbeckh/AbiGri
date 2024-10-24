import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full p-8 flex items-center justify-center bg-green-50">
      {children}
    </div>
  );
};

export default AuthLayout;
