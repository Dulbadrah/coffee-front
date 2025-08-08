"use client";
import { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SetPass } from "./SetPass";
import { PaymentSection } from "@/app/payment/components/PaymentSection";
import { UserContext } from "@/providers/UserProvider";
import axios from "axios";

export default function AccountPage() {
  const { user } = useContext(UserContext);
  const { profile } = useContext(UserContext);
  console.log(user);

  const [name, setName] = useState(profile?.name || "");
  const [about, setAbout] = useState(profile?.about || "");
  const [url, setUrl] = useState(profile?.socialMediaURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!profile?.id) {
      console.error("User ID not found");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/update/${user?.id}`,
        {
          name,
          about,
          socialMediaURL: url,
        }
      );

      if (response.status === 200) {
        console.log("Profile updated successfully:", response.data);
      } else {
        console.error("Failed to update profile:", response.status);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-2xl font-bold">My account</h1>

      <div className="border p-6 rounded-lg space-y-4">
        <h2 className="font-semibold text-lg">Personal Info</h2>

        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <Avatar className="w-24 h-24">
              <AvatarImage src={profile?.avatarImage || "/avatar.jpg"} />
              <AvatarFallback>
                {name ? name.charAt(0).toUpperCase() : "?"}
              </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full border">
              <Camera className="w-4 h-4" />
            </div>
          </div>
          <span className="text-sm text-muted-foreground">Add photo</span>
        </div>

        <div className="space-y-2">
          <Label>Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label>About</Label>
          <Textarea
            rows={3}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Social media URL</Label>
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <Button className="w-full" onClick={handleUpdate} disabled={loading}>
          {loading ? "Saving..." : "Save changes"}
        </Button>
      </div>

      <SetPass />
      <PaymentSection />
    </div>
  );
}
