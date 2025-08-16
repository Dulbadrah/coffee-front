import Image from "next/image";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@radix-ui/react-dialog";

import { UserContext } from "@/providers/UserProvider";

export const HomeCartSharePageLink = () => {
  const { user, profile } = useContext(UserContext);

  return (
    <div>
      <div className="flex justify-between gap-8 p-10">
        <div className="flex gap-3">
          <div className="relative w-24 h-24 rounded-full border-4 overflow-hidden">
            <Image
              src={profile?.avatarImage || "/Profile.png"}
              alt={profile?.name ? `${profile.name}'s avatar` : "User avatar"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div>{profile?.name || "No name"}</div>
            <div>{user?.email || "No email"}</div>
          </div>
        </div>
        <div>
          <Dialog>
            <div className="flex flex-col gap-6">
              <DialogTrigger asChild>
                <Button variant="secondary">Share Page Link</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="flex gap-8">
                  <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        value={`https://yourdomain.com/user/${
                          profile?.id || ""
                        }`}
                        readOnly
                      />
                    </div>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </div>
              </DialogContent>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
