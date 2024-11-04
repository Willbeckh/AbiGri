"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@supabase/supabase-js";
import { Pencil } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { ProfileData } from "@/types/profile";
import { useToast } from "@/hooks/use-toast";

export function UserProfile({
  user,
  profile,
}: {
  user: User;
  profile: ProfileData;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({
    phone: profile?.phone || "",
    location: profile?.location || "",
  });

  const supabase = createClient();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const showToast = (
    message: string,
    state: "default" | "destructive" | "success"
  ) => {
    toast({ description: message, variant: state });
  };

  const handleSave = async () => {
    setIsPending(true);

    try {
      const { error } = await supabase.from("profiles").upsert({
        user_id: user.id,
        phone: formData.phone,
        location: formData.location,
      });

      if (error) throw error;

      showToast("Success, Profile data updated!", "success");
    } catch (error) {
      console.error("Update failed", error);
    } finally {
      setIsEditing(false);
      setIsPending(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={profile.avatar_url} alt="user avatar" />
          <AvatarFallback>
            <User2 />
          </AvatarFallback>
        </Avatar>
        <div className="overflow-hidden">
          <h4 className="text-lg font-semibold">{user?.user_metadata.name}</h4>
          <p className="text-sm text-muted-foreground">
            {user?.user_metadata.email}
          </p>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="ml-auto"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            onChange={handleChange}
            value={formData.location}
            disabled={!isEditing}
          />
        </div>
      </div>

      {isEditing && (
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            className="btn btn-sm"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
          <Button onClick={handleSave}>
            {isPending && <span className="loading loading-ring"></span>}
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
}
