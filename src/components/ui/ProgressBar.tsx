import React from "react";

const Progressbar = ({
  initialTime,
  timeRemaining,
  className,
}: {
  initialTime: number;
  timeRemaining: number;
  className: string;
}) => {
  const progressBarWidth = (timeRemaining / initialTime) * 100;

  return (
    <div
      className={`${className} w-full bg-[#262626] rounded-full transition-all duration-300 ease-in-out h-[12px]`}
    >
      <div
        className={`${className} w-[${progressBarWidth}%] h-[12px] bg-[#FFFFFF] rounded-full`}
      />
    </div>
  );
};

export default Progressbar;
