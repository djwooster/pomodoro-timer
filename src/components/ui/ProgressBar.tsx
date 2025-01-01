import React from "react";

const Progressbar = ({
  initialTime,
  isActive,
  timeRemaining,
  setTimeRemaining,
}: {
  initialTime: number;
  isActive: boolean;
  timeRemaining: number;
  setTimeRemaining: (time: number) => void;
}) => {
  const progressBarWidth = (timeRemaining / initialTime) * 100;

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
          maxWidth: "100%",
          transition: "all 1.5s ease-in-out",
          height: "100%",
          backgroundColor: "black",
          borderRadius: "100px",
        }}
      />
    </div>
  );
};

export default Progressbar;