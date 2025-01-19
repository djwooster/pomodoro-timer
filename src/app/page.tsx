"use client";

import ProgressBar from "@/components/ui/ProgressBar";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timer from "@/components/ui/Timer";
import { formatTime } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [initialTime, setInitialTime] = useState(25 * 60);
  const [displayTime, setDisplayTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [sliderValue, setSliderValue] = useState([25]);

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
    setSliderValue(value);
  };

  return (
    <div
      id="main-container"
      className="flex bg-[#111111] flex-col w-full items-center  p-8 gap-6 font-[family-name:var(--font-geist-sans)]"
    >
      <Timer
        displayTime={displayTime}
        setDisplayTime={setDisplayTime}
        initialTime={initialTime}
        setInitialTime={setInitialTime}
        isActive={isActive}
        setIsActive={setIsActive}
        setSliderValue={setSliderValue}
      >
        <Slider
          defaultValue={[25]}
          value={sliderValue}
          max={60}
          min={5}
          step={5}
          onValueChange={handleSliderChange}
        />
      </Timer>
      <p className="text-white text-2xl font-bold">{formatTime(initialTime)}</p>

      {/* <Goal /> */}
    </div>
  );
}
