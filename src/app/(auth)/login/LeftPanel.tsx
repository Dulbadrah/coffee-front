import React from "react";
 
const LeftPanel = () => {
  return (
    <div className="w-1/2 bg-amber-400 flex flex-col justify-between p-8 text-center">
      <div className="text-left text-black font-semibold text-lg flex items-center gap-2"><img className="h-[20px] w-[20px]" src="/img/coffee.png" alt="" /> Buy Me Coffee</div>
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="">
          <div className="h-[240px] w-[240px] mb-[40px]"><img src="/img/illustration.png" alt="" /></div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Fund your creative work</h1>
        <p className="text-sm text-black/70 max-w-xs">
          Accept support. Start a membership. Setup a shop. It's easier than you think.
        </p>
      </div>
    </div>
  );
};
 
export default LeftPanel;