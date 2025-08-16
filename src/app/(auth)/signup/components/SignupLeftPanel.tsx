import React from "react";
import Image from "next/image";

const SignupLeftPanel = () => {
  return (
    <div className="w-1/2 bg-amber-400 flex flex-col justify-between p-8 text-center">
      {/* Top Coffee label */}
      <div className="text-left text-black font-semibold text-lg flex items-center gap-2">
        <div className="relative h-[20px] w-[20px]">
          <Image src="/img/coffee.png" alt="Coffee" fill className="object-contain" />
        </div>
        Buy Me Coffee
      </div>

      {/* Center illustration */}
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="relative h-[240px] w-[240px] mb-[40px]">
          <Image
            src="/img/illustration.png"
            alt="Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">Fund your creative work</h1>
        <p className="text-sm text-black/70 max-w-xs">
          Accept support. Start a membership. Setup a shop. It&apos;s easier than you think.
        </p>
      </div>
    </div>
  );
};

export default SignupLeftPanel;
