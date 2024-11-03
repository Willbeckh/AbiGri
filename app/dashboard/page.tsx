import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | AbiGri",
  description: "AbiGri  farmers dashboard",
};

export default async function Dashboard() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="">
      <p className="font-semibold">
        Hello,
        {data.user.user_metadata.full_name || data.user.user_metadata.name}
      </p>
    </div>
  );
}
