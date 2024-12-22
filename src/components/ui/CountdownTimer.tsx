import React, { useState, useEffect } from "react";

const CountdownTimer = ({
  initialTime,
  isActive,
  setIsActive,
}: {
  initialTime: number | null;
  isActive: boolean;
  setIsActive: () => void;
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0 && isActive) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      if (isActive) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const progressBarWidth = (timeLeft / initialTime) * 100;

  return (
    <div
      style={{
        width: "800px",
        height: "12px",
        backgroundColor: "#e0e0e0",
        borderRadius: "100px",
      }}
    >
      <div
        style={{
          width: `${progressBarWidth}%`,
          height: "100%",
          backgroundColor: "black",
          borderRadius: "100px",
        }}
      />
    </div>
  );
};

export default CountdownTimer;
