import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import React from "react"

export const HomeOneSection = () => {
    return (
        <div>
          <div className="flex justify-between px-10">
                    <div className="flex gap-3">
                        <div>image</div>
                        <div>
                            <div>Jake</div>
                            <div>buymeacoffee.com</div>
                        </div>
                    </div>
                    <div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Share</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Share link</DialogTitle>
                                    <DialogDescription>
                                        Anyone who has this link will be able to view this.
                                    </DialogDescription>
                                </DialogHeader>
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


                        <div className="border-1 rounded bg-black text-white"></div>
                    </div>
                </div>
             </div>
    );
}