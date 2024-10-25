import React from "react";
import { auth, signOut } from "@/auth";

const Dashboard = async () => {
  const session = await auth();
  return (
    <div>
      <h1>Dashboard</h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit" className="btn btn-error">
          signout
        </button>
      </form>
      {JSON.stringify(session)}
    </div>
  );
};

export default Dashboard;
