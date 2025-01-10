"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import TimeSetter from "./TimeSetter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const Timer = ({
  timeRemaining,
  setTimeRemaining,
  isActive,
  setIsActive,
  initialTime,
  displayTime,
  setDisplayTime,
}: {
  timeRemaining: number;
  setTimeRemaining: (time: number) => void;
  isActive: boolean;
  setIsActive: (boolean: boolean) => void;
  initialTime: number;
  setInitialTime: (time: number) => void;
  displayTime: number;
  setDisplayTime: (time: number) => void;
}) => {
  useEffect(() => {
    document.title = `${formatTime(displayTime)}`;
  }, [displayTime]);

  //

  const toggleTimer = () => {
    if (timeRemaining > 0) {
      setIsActive(!isActive);
    }
  };

  const incrementTime = () => {
    setTimeRemaining(timeRemaining + 60);
    setInitialTime(timeRemaining + 60);
  };

  const decrementTime = () => {
    setTimeRemaining(timeRemaining - 60);
    setInitialTime(timeRemaining - 60);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeRemaining(initialTime);
  };

  const formatTime = (timeInSeconds: number) => {
    // format the time in minutes and secondse
    const minutes = Math.floor(timeInSeconds / 60); // get the minutes
    const seconds = timeInSeconds % 60; // get the seconds
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString() // convert the seconds to a string
      .padStart(2, "0")}`; // return the time in the format of minutes:seconds:milliseconds
  };

  return (
    <div className="flex border-2 border-zinc-700 flex-col p-4 items-center w-[800px] bg-[#111111] rounded-lg dark:bg-gray-900 transition-all duration-200">
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
              <div className="flex flex-col w-full items-center gap-7 justify-center">
                <TimeSetter
                  className="w-full"
                  isActive={isActive}
                  setIsActive={setIsActive}
                  setDisplayTime={setDisplayTime}
                  displayTime={displayTime}
                />
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
