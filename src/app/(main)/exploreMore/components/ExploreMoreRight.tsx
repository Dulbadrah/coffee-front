import Image from "next/legacy/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QRCode from "react-qr-code";
import { ProfileType } from "@/lib/types";

export const ExploreMoreRight = () => {
  const items = Array.from({ length: 4 });
  return (
    <div className="w-full h-[509px]  border bg-white p-4 rounded-sm overflow-hidden ">
      <h2 className="text-lg font-semibold">Buy Space ranger a Coffee</h2>
      <p className="mt-6">Select amount:</p>
      <div className="flex gap-2 mt-2">
        {items.map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center border rounded-sm bg-[rgba(244,244,245,0.8)] cursor-pointer w-full h-[40px]"
          >
            <div className="flex items-center gap-1">
              <Image src="/coffee.png" alt="coffee" width={16} height={16} />
              <p className="text-sm font-medium">$1</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2>Enter BuyMeCoffee or social acount URL:</h2>
        <input
          className="w-full h-10 border mt-2 rounded-sm px-3"
          type="text"
          placeholder="buymeacoffee.com/"
        />
      </div>
      <div className="mt-8">
        <h2>Special message:</h2>
        <input
          className="w-full h-[131px] mt-2 border rounded-sm pb-16 px-3 placeholder-gray-500"
          type="text"
          placeholder="Thank you for being so awesome everyday!"
        />
      </div>

      <Dialog>
        <form>
          <DialogTrigger asChild>
            <button className="w-full  bg-black text-white rounded- text-sm p-2 rounded-[4px] mt-4">
              Support
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
            </DialogHeader>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={"hhha"}
              viewBox={`0 0 256 256`}
            />
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};