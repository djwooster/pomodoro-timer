import React from "react";

const Progressbar = ({
  initialTime,
  timeRemaining,
}: {
  initialTime: number;
  timeRemaining: number;
}) => {
  const progressBarWidth = (timeRemaining / initialTime) * 100;

  return (
    <div
      style={{
        width: "800px",
        height: "12px",
        backgroundColor: "#181818",
        borderRadius: "100px",
      }}
    >
      <div
        style={{
          width: `${progressBarWidth}%`,
          maxWidth: "100%",
          transition: "all 1.5s ease-in-out",
          height: "100%",
          backgroundColor: "#644754 ",
          borderRadius: "100px",
        }}
      />
    </div>
  );
};

export default Progressbar;
