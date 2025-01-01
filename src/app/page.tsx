"use client";

import ProgressBar from "@/components/ui/ProgressBar";
import Timer from "@/components/ui/Timer";
import Goal from "@/components/ui/Goal";
import { useEffect, useState } from "react";

export default function Home() {
  const [initialTime, setInitialTime] = useState(25 * 60);
  const [displayTime, setDisplayTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeRemaining > 0) {
      setIsActive(true);

      // if the timer is active and the time is greater than 0
      interval = setInterval(() => {
        // start an interval to decrement the time by 1 second
        setTimeRemaining((prevTime: number) => prevTime - 1); // decrement the time by 1 second
      }, 1000);
      setDisplayTime((prevTime: number) => prevTime - 1); // decrement the time by 1 second
    } else if (timeRemaining === 0) {
      setIsActive(false); // stop the timer
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeRemaining]);

  return (
    <div className="flex flex-col w-full items-center justify-center p-8 gap-6 font-[family-name:var(--font-geist-sans)]">
      <ProgressBar
        initialTime={initialTime}
        isActive={isActive}
        setTimeRemaining={setTimeRemaining}
        timeRemaining={timeRemaining}
      />
      <Timer
        displayTime={displayTime}
        setDisplayTime={setDisplayTime}
        initialTime={initialTime}
        setInitialTime={setInitialTime}
        isActive={isActive}
        setIsActive={setIsActive}
        timeRemaining={timeRemaining}
        setTimeRemaining={setTimeRemaining}
      />
      <Goal />
    </div>
  );
}
