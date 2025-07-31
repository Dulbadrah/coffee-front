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

  const [errors, setErrors] = useState({
    name: "",
    about: "",
    url: "",
  });

  const handleCoverSaveProfile = (imageUrl: string) => {
    console.log("Saved image URL:", imageUrl);
  };

  const validateFields = () => {
    let hasError = false;
    const newErrors = {
      name: "",
      about: "",
      url: "",
    };

    if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      hasError = true;
    }

    if (about.trim().length < 3) {
      newErrors.about = "About must be at least 3 characters";
      hasError = true;
    }

    if (url.trim().length < 3) {
      newErrors.url = "URL must be at least 3 characters";
      hasError = true;
    }

    setErrors(newErrors);
    return !hasError;
  };

  const handleSave = () => {
    if (validateFields()) {
      // Validation passed
      console.log("Profile saved:", { name, about, url });
      setOpen(false);
    }
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

          <div className="flex mb-4 relative">
            <div className="flex flex-col gap-4">
              <CoverImageUploaderProfile onSave={handleCoverSaveProfile} />
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
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="grid gap-1">
              <Label htmlFor="about">About</Label>
              <Textarea
                id="about"
                rows={4}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
              {errors.about && (
                <p className="text-sm text-red-500">{errors.about}</p>
              )}
            </div>

            <div className="grid gap-1">
              <Label htmlFor="url">Social media URL</Label>
              <Input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              {errors.url && (
                <p className="text-sm text-red-500">{errors.url}</p>
              )}
            </div>
          </div>

          <DialogFooter className="mt-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
