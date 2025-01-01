import React from "react";

const PausedBadge = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex items-center justify-center gap-4 px-4 py-1 bg-[#FCE0C8] bg-opacity-30 rounded-xl border-solid ${className} transition-opacity top-[150px]`}
    >
      <div
        id="circles"
        className="flex flex-col justify-center items-center relative w-[24px] h-[24px]"
      >
        <div
          id="outer"
          className="z-2 absolute w-[24px] h-[24px] bg-[#F8D4B1] rounded-full "
        />
        <div
          id="middle"
          className="z-9 absolute w-[16px] h-[16px] bg-[#EEB476] rounded-full "
        />

        <div
          id="inner"
          className="z-10 relative w-[8px] h-[8px] bg-[#E08724] rounded-full shadow-[0px_0px_0.75px_#00000030,0.75px_0.75px_0.75px_#00000003]"
        />
      </div>

      <div className="relative w-fit font-semibold text-[#E5860B] text-sm tracking-[-.5%] leading-[normal]">
        Paused
      </div>
    </div>
  );
};

export default PausedBadge;
