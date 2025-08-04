import Image from "next/legacy/image";

export const ExploreMoreRight = () => {
  const items = Array.from({ length: 4 });
  return (
    <div className="w-[632px] h-[509px] absolute top-[369px] right-[50px] border bg-white p-4 rounded-sm">
      <h2 className="text-lg font-semibold mb-1">Buy Space ranger a Coffee</h2>
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
        <input className="w-[580px] h-10 border rounded-sm" type="text" placeholder="buymeacoffee.com/" />
      </div>
      <div>
        <h2>Special message:</h2>
        <input className="w-[580px] h-[131px] border rounded-sm" type="text" placeholder="Please write your message here" />
        </div>
        <div>
            <button>Support</button>
        </div>
    </div>
  );
};
