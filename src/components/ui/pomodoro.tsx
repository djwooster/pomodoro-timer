"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

const Pomodoro = ({
  initialTime,
  setInitialTime,
  isActive,
  setIsActive,
}: {
  initialTime: number;
  setInitialTime: (time: number) => void;
  isActive: boolean;
  setIsActive: () => void;
}) => {
  const [goal, setGoal] = useState("");

  useEffect(() => {
    document.title = `${formatTime(initialTime)}`;
  }, [initialTime]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && initialTime > 0) {
      // if the timer is active and the time is greater than 0
      interval = setInterval(() => {
        // start an interval to decrement the time by 1 second
        setInitialTime((prevTime: number) => prevTime - 1); // decrement the time by 1 second
      }, 1000);
    } else if (initialTime === 0) {
      // if the time is 0
      setIsActive(false); // stop the timer
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, initialTime]);

  const toggleTimer = () => {
    if (isActive && initialTime > 0) {
      // if the timer is active and the time is greater than 0
      setInitialTime(initialTime); // set the time to the current time

      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setInitialTime(25 * 60);
  };

  const formatTime = (timeInSeconds: number) => {
    // format the time in minutes and seconds
    const minutes = Math.floor(timeInSeconds / 60); // get the minutes
    const seconds = timeInSeconds % 60; // get the seconds
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString() // convert the seconds to a string
      .padStart(2, "0")}`; // return the time in the format of minutes:seconds
  };

  return (
    <div className="flex flex-col p-4 items-center w-[800px] bg-gray-100 rounded-lg dark:bg-gray-900">
      <div className="w-[100%]">
        <div className="flex flex-col p-8 w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="items-center justify-center w-full mb-8">
            <div
              id="top-content"
              className="flex flex-col w-full items-center gap-2 justify-center"
            >
              <h1 className="text-lg w-full leading-[140%] font-semibold text-center text-zinc-600 dark:text-gray-200">
                Pomodoro Timer
              </h1>
              <h1 className="text-[12rem] font-bold min-w-8 tracking-[-.05em] text-center border-none  text-zinc-900 dark:text-gray-200">
                {formatTime(initialTime)}
              </h1>

              {/* <Input
              type="text"
              value={time}
              onChange={handleEditableTimeChange}
              onBlur={handleEditableTimeBlur}
              className="font-semibold font-8xl min-w-8 text-center border-none  text-zinc-800 dark:text-gray-200"
              readOnly={isActive}
            /> */}
              <div
                id="timer-buttons"
                className="flex justify-center w-full gap-4"
              >
                <Button
                  onClick={toggleTimer}
                  variant={isActive ? "destructive" : "default"}
                  className="w-full"
                >
                  {isActive ? "Pause" : "Start"}
                </Button>
                <Button
                  onClick={resetTimer}
                  variant="outline"
                  className="w-full"
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row items-end gap-2">
            <div className="w-full">
              <h2 className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-200">
                Session Goal
              </h2>
              <Input
                value={goal || ""}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="What do you want to accomplish in this session?"
                className="w-full placeholder:text-gray-500 placeholder:text-sm dark:placeholder:text-gray-200 p-2 text-gray-800 dark:text-gray-200 bg-zinc-50 dark:bg-gray-700 rounded-lg"
              />
            </div>
            <div className="w-fit">
              <Button
                variant="outline"
                className="w-fit hover:bg-gray-50 hover:text-gray-800 transition-all duration-300"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
