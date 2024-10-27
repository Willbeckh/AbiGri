import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen p-8 flex  justify-center mt-20 bg-green-50">
      {children}
    </div>
  );
};

export default AuthLayout;
