import React, { useState } from "react";
import { Check } from "lucide-react";

const TimeSetter = ({
  setDisplayTime,
}: {
  setDisplayTime: (time: number) => void;
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
              ? "p-2 flex-1 bg-zinc-300 rounded-md outline-zinc-600 text-sm font-semibold text-zinc-900 hover:bg-blue-50 transition-all outline-offset-4 duration-300 ease-in-out"
              : "p-2 flex-1 bg-[#262626]  rounded-md text-sm text-blue-100 font-semibold "
          }
        >
          {timeItem / 60 + ":" + 0 + 0}
        </button>
      ))}
      <div className="flex flex-col gap-3 w-fit relative">
        <div className="flex flex-row gap-2 absolute top-[-28px] right-0"></div>
        <input
          type="text"
          value={customTime}
          className="w-16  text-center placeholder:font-normal outline-none  focus:outline-dashed focus:outline-zinc-500 focus:bg-white h-full   bg-zinc-100 placeholder:text-zinc-400 rounded-md text-sm text-zinc-900 font-semibold hover:bg-blue-50 transition-all ease-in-out duration-700 ease-in-out cursor-text"
          placeholder="Custom"
          onChange={(e) => setCustomTime(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TimeSetter;
