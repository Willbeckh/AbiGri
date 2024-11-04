import { createClient } from "./client";

const supabase = createClient();

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.log("Error fetching profile:", error);
    return null;
  }
  return data;
}
