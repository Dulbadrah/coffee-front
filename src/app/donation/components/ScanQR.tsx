// App.jsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export function QRDialog() {
  // A static URL for the QR code, since there is no input form
  const qrCodeData = "https://example.com/your-static-qr-code";
  const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrCodeData)}`;

  return (
       <div>
      {/* The main button to open the dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-gray-300 text-white py-2 rounded-md hover:bg-gray-400 transition disabled:opacity-50">Support</Button>
        </DialogTrigger>

        {/* The Dialog content container */}
        <DialogContent className="sm:max-w-[425px] p-8 text-center">
          <DialogHeader>
            <DialogTitle className="mx-auto">Scan QR code</DialogTitle>
            <DialogDescription className="mx-auto">
              Scan the QR code to complete your donation
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center my-6">
            <img
              src={qrCodeImageUrl}
              alt="QR Code"
              className="w-48 h-48 border-2 border-gray-200 p-2 rounded-lg"
            />
          </div>
          <DialogClose asChild>
       
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}
