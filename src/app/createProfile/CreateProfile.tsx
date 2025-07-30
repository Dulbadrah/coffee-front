"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "lucide-react";
import CoverImageUploaderProfile from "@/utils/imageCloudinaryProfiile";

export function CreateProfile() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Jake");
  const [about, setAbout] = useState(
    "I’m a typical person who enjoys exploring different things. I also make music art as a hobby. Follow me along."
  );
  const [url, setUrl] = useState(
    "https://api.cloudinary.com/v1_1/dqugs5a11/image/upload"
  );
  const handleCoverSaveProfile = (imageUrl: string) => {
    console.log("Saved image URL:", imageUrl);
    // Энэ хэсэгт API-р хадгалах логик орж болно
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Edit Profile</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <div className=" flex mb-4 relative">
            <div className="flex flex-col gap-4">
              <CoverImageUploaderProfile onSave={handleCoverSaveProfile} />
            </div>
            <div className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow">
              <Camera className="w-4 h-4 text-gray-500" />
              <div></div>
            </div>
          </div>

          <div className="grid gap-4 py-2">
            <div className="grid gap-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="about">About</Label>
              <Textarea
                id="about"
                rows={4}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="url">Social media URL</Label>
              <Input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter className="mt-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
