import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { AlertDialogHeader } from "../../../components/ui/alert-dialog";

export const HomeCartSharePageLink = () => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    const getCurrentUser = async () => {
      const userData = await getCurrentUserByAccessToken(accessToken);
      console.log("userData", userData);
      setUser(userData);
    };

    getCurrentUser();
  }, []);

  const getCurrentUserByAccessToken = async (accessToken: string) => {
    try {
      const response = await fetch(
        "http://localhost:4200/profile/current-user",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-between gap-8 p-10">
        <div className="flex gap-3">
          <div>
            <img
              src={"https://i.pravatar.cc/100"}
              className="rounded-full mx-auto border-4 object-cover"
            ></img>
          </div>
          <div>
            <div>{user?.data?.name || "No name"}</div>
            <div>{user?.data?.email || "No email"}</div>
          </div>
        </div>
        <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Share Page Link</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <AlertDialogHeader>     
                </AlertDialogHeader>
                <div className="flex items-center gap-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input
                      id="link"
                      value={`https://yourdomain.com/user/${user?.data?.userId || ""}`}
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
              </DialogContent>
            </Dialog>
        </div>
      </div>
    </div>
  );
};
