import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
// import { Button } from "@/components/ui/button";
import LogoutButton from "./Logout";

export default async function Dashboard() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <>
      <div>Dashboard</div>
      <br />
      <p>Hello {data.user.email}</p>
      <br />
      <p>user id: {data.user.id}</p>

      <LogoutButton />
    </>
  );
}
