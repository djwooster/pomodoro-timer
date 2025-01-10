"use client";

import ProgressBar from "@/components/ui/ProgressBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timer from "@/components/ui/Timer";
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
    <div
      id="main-container"
      className="flex bg-[#111111] flex-col w-full items-center  p-8 gap-6 font-[family-name:var(--font-geist-sans)]"
    >
      <ProgressBar
        initialTime={initialTime}
        isActive={isActive}
        setTimeRemaining={setTimeRemaining}
        timeRemaining={timeRemaining}
      />
      <Tabs defaultValue="work" className="w-[800px] flex flex-col gap-4 ">
        <TabsList className="flex justify-center w-full gap-4 bg-zinc-800 rounded-lg">
          <TabsTrigger
            className="text-zinc-200 hover:bg-zinc-800 w-full"
            value="work"
          >
            {" "}
            Work
          </TabsTrigger>
          <TabsTrigger
            className="text-zinc-200 hover:bg-zinc-800 w-full"
            value="break"
          >
            {" "}
            Break
          </TabsTrigger>
        </TabsList>
        <TabsContent value="work" className="text-zinc-200">
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
        </TabsContent>
        <TabsContent value="break" className="text-zinc-200">
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
        </TabsContent>
      </Tabs>

      {/* <Goal /> */}
    </div>
  );
}
