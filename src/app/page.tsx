"use client";

import CountdownTimer from "@/components/ui/CountdownTimer";
import Pomodoro from "@/components/ui/pomodoro";
import { useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [initialTime, setInitialTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex flex-col w-full items-center justify-center p-8 gap-6 font-[family-name:var(--font-geist-sans)]">
      <CountdownTimer
        timeLeft={timeLeft}
        initialTime={initialTime}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Pomodoro
        initialTime={initialTime}
        setInitialTime={setInitialTime}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}
