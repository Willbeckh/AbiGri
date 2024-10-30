import React from "react";

export default function loader() {
  return (
    <div className="flex min-h-screen w-screen justify-center items-center  ">
      <span className="loading loading-dots loading-sm"></span>
      <span className="loading loading-dots loading-md"></span>
    </div>
  );
}
