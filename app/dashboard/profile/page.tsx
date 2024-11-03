import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserProfile } from "@/components/dashboard/user-profile";
import { UserTools } from "@/components/dashboard/user-tools";
import { createClient } from "@/utils/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div className="flex-1 md:space-y-4 py-2 md:p-8 ">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-xl font-semibold">User Information</h3>
          <Separator className="my-4" />
          {data.user && <UserProfile user={data.user} />}
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold">Tools & Equipment</h3>
          <Separator className="my-4" />
          <UserTools />
        </Card>
      </div>
    </div>
  );
}
