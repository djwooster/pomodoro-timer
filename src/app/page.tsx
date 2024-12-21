"use client";

import CountdownTimer from "@/components/ui/CountdownTimer";
import Pomodoro from "@/components/ui/pomodoro";
import { useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  return (
    <div className="flex flex-col w-full items-center justify-center p-8 gap-6 font-[family-name:var(--font-geist-sans)]">
      <CountdownTimer initialTime={timeLeft} />
      <Pomodoro time={time} setTime={setTime} />
    </div>
  );
}
