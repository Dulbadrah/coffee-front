import Image from "next/legacy/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QRCode from "react-qr-code";

export const ExploreMoreRight = () => {
  const items = Array.from({ length: 4 });
  return (
    <div className="w-full h-[509px]  border bg-white p-4 rounded-sm overflow-hidden ">
      <h2 className="text-lg font-semibold">Buy Space ranger a Coffee</h2>
      <p>Select amount:</p>
      <div className="flex gap-2 mt-2">
        {items.map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center border rounded-sm bg-[rgba(244,244,245,0.8)] cursor-pointer w-[74px] h-[40px]"
          >
            <div className="flex items-center gap-1">
              <Image src="/coffee.png" alt="coffee" width={16} height={16} />
              <p className="text-sm font-medium">$1</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Enter BuyMeCoffee or social acount URL:</h2>
        <input
          className="w-[580px] h-10 border rounded-sm"
          type="text"
          placeholder="buymeacoffee.com/"
        />
      </div>
      <div>
        <h2>Special message:</h2>
        <input
          className="w-[580px] h-[131px] border rounded-sm"
          type="text"
          placeholder="Please write your message here"
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
              value={"asdadnjdsf"}
              viewBox={`0 0 256 256`}
            />
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
