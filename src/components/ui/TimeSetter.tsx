import React, { useState } from "react";
import { Button } from "./Button";

const TimeSetter = ({
  setDisplayTime,
  isActive,
  setIsActive,
}: {
  setDisplayTime: (time: number) => void;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}) => {
  const [customTime, setCustomTime] = useState("");

  const handleSetTime = (time: number) => {
    setDisplayTime(time);
    setSelectedIndex(timeButtons.findIndex((item) => item === time));
  };

  const handleSetCustomTime = (time: number) => {
    setDisplayTime(time * 60);
    setCustomTime("");
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  const timeButtons = [25 * 60, 30 * 60, 35 * 60, 40 * 60, 45 * 60, 60 * 60];

  return (
    <div className="flex flex-row gap-3 w-full transition-colors duration-1000 ease-in-out">
      {timeButtons.map((timeItem, index) => (
        <button
          key={index}
          onClick={() => handleSetTime(timeItem)}
          className={
            index === selectedIndex
              ? "p-2 flex-1  border-solid border-1 outline outline-zinc-500 rounded-md text-sm text-zinc-900 font-semibold "
              : "p-2 flex-1 bg-zinc-100 rounded-md text-sm font-semibold text-zinc-900 hover:bg-blue-50 transition-all duration-300 ease-in-out"
          }
        >
          {timeItem / 60 + ":" + 0 + 0}
        </button>
      ))}
      <div className="flex flex-col gap-3 w-fit relative">
        <div className="flex flex-row gap-2 absolute top-[-28px] right-0">
          <button className="flex flex-col items-center justify-center hover:bg-zinc-300 transition-all duration-300 text-xs text-zinc-400 font-semibold w-2 h-2 p-2 bg-zinc-200">
            x
          </button>
          <button className="flex flex-col items-center justify-center hover:bg-zinc-300 transition-all duration-300 text-xs text-zinc-400 font-semibold w-2 h-2 p-2 bg-zinc-200">
            +
          </button>
        </div>
        <input
          type="text"
          value={customTime}
          className="w-16  text-center placeholder:font-normal outline-none  focus:outline-dashed focus:outline-zinc-500 focus:bg-white h-full   bg-zinc-100 placeholder:text-zinc-400 rounded-md text-sm text-zinc-900 font-semibold hover:bg-blue-50 transition-all ease-in-out duration-700 ease-in-out cursor-text"
          placeholder="Custom"
          onChange={(e) => setCustomTime(e.target.value)}
        />
      </div>

      {/* <Button
        variant="ghost"
        className={customTime > 0 ? "text-blue-500" : "text-white"}
        onClick={() => handleSetCustomTime(customTime)}
      >
        Set
      </Button> */}
    </div>
  );
};

export default TimeSetter;
