"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Pomodoro = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [editableTime, setEditableTime] = useState("25:00");
  const [log, setLog] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60);
    setEditableTime("25:00");
  };

  const handleEditableTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableTime(e.target.value);
  };

  const handleEditableTimeBlur = () => {
    const [minutes, seconds] = editableTime.split(":").map(Number);
    if (!isNaN(minutes) && !isNaN(seconds)) {
      setTime(minutes * 60 + seconds);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col p-8 justify-start w-[1280px] bg-gray-100 rounded-lg dark:bg-gray-900">
      <div className="flex flex-col p-8 w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-xl w-full font-semibold mb-8 text-center text-gray-600 dark:text-gray-200">
          Pomodoro Timer
        </h1>
        <div className="items-center justify-center w-fit mb-8">
          <div
            id="timer-inputs"
            className="flex flex-col w-6/12items-center gap-3 justify-center"
          >
            <div className="flex justify-center">
              <h1 className="text-8xl font-semibold min-w-8 text-center border-none  text-zinc-800 dark:text-gray-200">
                {isActive ? formatTime(time) : editableTime}
              </h1>
            </div>
            <Input
              type="text"
              value={isActive ? formatTime(time) : editableTime}
              onChange={handleEditableTimeChange}
              onBlur={handleEditableTimeBlur}
              className="font-semibold font-8xl min-w-8 text-center border-none  text-zinc-800 dark:text-gray-200"
              readOnly={isActive}
            />
            <div className="flex justify-center gap-4">
              <Button
                onClick={toggleTimer}
                variant={isActive ? "destructive" : "default"}
                className="w-full"
              >
                {isActive ? "Pause" : "Start"}
              </Button>
              <Button onClick={resetTimer} variant="outline" className="w-full">
                Reset
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Session Log
          </h2>
          <Textarea
            value={log}
            onChange={(e) => setLog(e.target.value)}
            placeholder="What did you accomplish in this session?"
            className="w-full h-32 p-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
