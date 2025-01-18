"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { formatTime } from "@/lib/utils";
import ProgressBar from "./ProgressBar";
import { Slider } from "@/components/ui/slider";

const Timer = ({
  isActive,
  setIsActive,
  initialTime,
  displayTime,
  setDisplayTime,
  setInitialTime,
  children,
}: {
  isActive: boolean;
  setIsActive: (boolean: boolean) => void;
  initialTime: number;
  displayTime: number;
  setDisplayTime: (time: number) => void;
  setInitialTime: (time: number) => void;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    document.title = `${formatTime(displayTime)}`;
  }, [displayTime]);

  //

  const toggleTimer = () => {
    if (displayTime > 0) {
      setIsActive(!isActive);
    }
  };

  const incrementTime = () => {
    setDisplayTime(displayTime + 60);
    setInitialTime(displayTime + 60);
  };

  const decrementTime = () => {
    setDisplayTime(displayTime - 60);
    setInitialTime(displayTime - 60);
  };

  const resetTimer = () => {
    setIsActive(false);
    setDisplayTime(initialTime);
  };

  return (
    <div className="flex border-2 border-zinc-700 flex-col p-4 items-center w-[800px] bg-[#111111] rounded-lg dark:bg-gray-900 transition-all duration-200">
      <ProgressBar
        initialTime={initialTime}
        timeRemaining={displayTime}
        className="w-full"
      />
      <div className="w-[100%] relative">
        <div className="flex flex-col p-8 w-full items-center justify-center bg-[#111111] dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="items-center justify-center w-full mb-8">
            <div
              id="top-content"
              className="flex flex-col w-full items-center gap-6 justify-center"
            >
              <div className="flex flex-row items-center gap-12">
                <button
                  onClick={decrementTime}
                  className="text-zinc-200 text-2xl p-3 h-12 w-12 font-bold flex items-center justify-center hover:bg-zinc-100 rounded-full transition-all duration-300 hover:shadow-md"
                >
                  -
                </button>
                <h1 className="text-[10rem] font-bold min-w-[500px] tracking-[-.05em] text-center border-none  text-zinc-200 dark:text-gray-200">
                  {formatTime(displayTime)}
                </h1>
                <button
                  onClick={incrementTime}
                  className="text-zinc-200 text-2xl p-3 h-12 w-12 font-bold flex items-center justify-center hover:bg-zinc-100 rounded-full transition-all duration-300 hover:shadow-md"
                >
                  +
                </button>
              </div>

              <div className="flex flex-col w-full items-center justify-between gap-3">
                <div className="flex flex-row  items-center justify-between w-full ">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 flex flex-col  items-center justify-center">
                      <p className="text-zinc-50 text-opacity-50 text-xs">5</p>
                    </div>
                    <div className="flex h-[6px] w-[1px] bg-blue-600 bg-opacity-50  flex-col items-center justify-center" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 flex flex-col  items-center justify-center">
                      <p className="text-zinc-50 text-opacity-50 text-xs">10</p>
                    </div>
                    <div className="flex h-[6px] w-[1px] bg-blue-600 bg-opacity-50  flex-col items-center justify-center" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 flex flex-col  items-center justify-center">
                      <p className="text-zinc-50 text-opacity-50 text-xs">15</p>
                    </div>
                    <div className="flex h-[6px] w-[1px] bg-blue-600 bg-opacity-50  flex-col items-center justify-center" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 flex flex-col  items-center justify-center">
                      <p className="text-zinc-50 text-opacity-50 text-xs">20</p>
                    </div>
                    <div className="flex h-[6px] w-[1px] bg-blue-600 bg-opacity-50  flex-col items-center justify-center" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 flex flex-col  items-center justify-center">
                      <p className="text-zinc-50 text-opacity-50 text-xs">25</p>
                    </div>
                    <div className="flex h-[6px] w-[1px] bg-blue-600 bg-opacity-50  flex-col items-center justify-center" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 flex flex-col  items-center justify-center">
                      <p className="text-zinc-50 text-opacity-50 text-xs">30</p>
                    </div>
                    <div className="flex h-[6px] w-[1px] bg-blue-600 bg-opacity-50  flex-col items-center justify-center" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 flex flex-col  items-center justify-center">
                      <p className="text-zinc-50 text-opacity-50 text-xs">35</p>
                    </div>
                    <div className="flex h-[6px] w-[1px] bg-blue-600 bg-opacity-50  flex-col items-center justify-center" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 flex flex-col  items-center justify-center">
                      <p className="text-zinc-50 text-opacity-50 text-xs">40</p>
                    </div>
                    <div className="flex h-[6px] w-[1px] bg-blue-600 bg-opacity-50  flex-col items-center justify-center" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 flex flex-col  items-center justify-center">
                      <p className="text-zinc-50 text-opacity-50 text-xs">45</p>
                    </div>
                    <div className="flex h-[6px] w-[1px] bg-blue-600 bg-opacity-50  flex-col items-center justify-center" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 flex flex-col  items-center justify-center">
                      <p className="text-zinc-50 text-opacity-50 text-xs">50</p>
                    </div>
                    <div className="flex h-[6px] w-[1px] bg-blue-600 bg-opacity-50  flex-col items-center justify-center" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 flex flex-col  items-center justify-center">
                      <p className="text-zinc-50 text-opacity-50 text-xs">55</p>
                    </div>
                    <div className="flex h-[6px] w-[1px] bg-blue-600 bg-opacity-50  flex-col items-center justify-center" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 flex flex-col  items-center justify-center">
                      <p className="text-zinc-50 text-opacity-50 text-xs">60</p>
                    </div>
                    <div className="flex h-[6px] w-[1px] bg-blue-600 bg-opacity-50  flex-col items-center justify-center" />
                  </div>
                </div>
              </div>
              {children}
              <div className="flex flex-col w-full items-center gap-7 justify-center">
                <div
                  id="timer-buttons"
                  className="flex justify-center w-full gap-4"
                >
                  <Button
                    onClick={toggleTimer}
                    variant={isActive ? "destructive" : "default"}
                    className="w-full bg-[#262626] outline-none hover:bg-zinc-700 hover:text-white  transition-all duration-300"
                  >
                    {isActive ? "Pause" : "Start"}
                  </Button>
                  <Button
                    onClick={resetTimer}
                    variant="ghost"
                    className="w-full text-zinc-200 hover:bg-zinc-900 hover:text-white transition-all duration-300"
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
