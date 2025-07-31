import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";
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
  return (
    <div>
      <div className="flex justify-between p-10">
        <div className="flex gap-3">
          <div>
            <img
              src={"https://i.pravatar.cc/100"}
              className="rounded-full mx-auto border-4 object-cover"
            ></img>
          </div>
          <div>
            <div>Jake</div>
            <div>jkrhe,msb dikjsd.gmail.com</div>
          </div>
        </div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Share Page Link</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <AlertDialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Anyone who has this link will be able to view this.
                </DialogDescription>
              </AlertDialogHeader>
              <div className="flex items-center gap-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    defaultValue="https://ui.shadcn.com/docs/installation"
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
