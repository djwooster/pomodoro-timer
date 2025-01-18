import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (timeInSeconds: number) => {
  // format the time in minutes and secondse
  const minutes = Math.floor(timeInSeconds / 60); // get the minutes
  const seconds = timeInSeconds % 60; // get the seconds
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString() // convert the seconds to a string
    .padStart(2, "0")}`; // return the time in the format of minutes:seconds:milliseconds
};
