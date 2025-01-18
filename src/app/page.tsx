"use client";

import ProgressBar from "@/components/ui/ProgressBar";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timer from "@/components/ui/Timer";
import { useEffect, useState } from "react";

export default function Home() {
  const [initialTime, setInitialTime] = useState(25 * 60);
  const [displayTime, setDisplayTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [sliderValue, setSliderValue] = useState(25);

  useEffect(() => {
    if (isActive) {
      let interval: NodeJS.Timeout | null = null;

      if (displayTime > 0) {
        console.log("displayTime", displayTime);
        // if the timer is active and the time is greater than 0
        interval = setInterval(() => {
          // start an interval to decrement the time by 1 second
          setDisplayTime((prevTime: number) => prevTime - 1); // decrement the time by 1 second
        }, 1000);
      } else if (displayTime === 0) {
        setIsActive(false); // stop the timer
        setDisplayTime(initialTime); // reset the time to the initial time
      }

      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, [isActive, displayTime]);

  const handleSliderChange = (value: number[]) => {
    setDisplayTime(value[0] * 60);
    setInitialTime(value[0] * 60);
  };

  return (
    <div
      id="main-container"
      className="flex bg-[#111111] flex-col w-full items-center  p-8 gap-6 font-[family-name:var(--font-geist-sans)]"
    >
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
          >
            <Slider
              defaultValue={[25]}
              max={60}
              min={5}
              step={5}
              onValueChange={handleSliderChange}
            />
          </Timer>
        </TabsContent>
        <TabsContent value="break" className="text-zinc-200">
          <Timer
            displayTime={5 * 60}
            setDisplayTime={setDisplayTime}
            initialTime={5 * 60}
            setInitialTime={setInitialTime}
            isActive={isActive}
            setIsActive={setIsActive}
          >
            <Slider
              defaultValue={[25]}
              max={60}
              min={5}
              step={5}
              onValueChange={handleSliderChange}
            />
          </Timer>
        </TabsContent>
      </Tabs>

      {/* <Goal /> */}
    </div>
  );
}
