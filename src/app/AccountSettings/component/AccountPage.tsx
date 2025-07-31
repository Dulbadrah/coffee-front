// components/AccountPage.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Camera } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SetPass } from "./SetPass";

export default function AccountPage() {
  const [name, setName] = useState("Jake");
  const [about, setAbout] = useState(
    "I’m a typical person who enjoys exploring different things. I also make music art as a hobby. Follow me along."
  );
  const [url, setUrl] = useState("https://buymeacoffee.com/baconpancakes1");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-2xl font-bold">My account</h1>

      {/* Personal Info */}
      <div className="border p-6 rounded-lg space-y-4">
        <h2 className="font-semibold text-lg">Personal Info</h2>

        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>J</AvatarFallback>
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

        <Button className="w-full">Save changes</Button>
      </div>
      <SetPass />

      {/* Set password */}
    </div>
  );
}
