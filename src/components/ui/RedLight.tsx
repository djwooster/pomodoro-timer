import React from "react";

interface Props {
  isActive: boolean;
  className?: string;
}

const RedLight = ({ isActive, className }: Props) => {
  return (
    <div className={className}>
      <div
        className={`w-[3px] h-[3px] ${isActive ? "blur-[0.7px]" : ""} ${
          isActive ? "rounded-[1.43px]" : ""
        } ${isActive ? "bg-[#ff373770]" : ""}`}
      >
        <div
          className={`w-0.5 h-0.5 rounded-[1.07px] ${
            !isActive
              ? "shadow-[0px_0px_0.15px_0.07px_#6b000040,inset_0px_-0.25px_0px_#7f4f4f,inset_0px_0.25px_0px_#d88a8a1f]"
              : "shadow-[0px_0px_0.15px_0.07px_#6b000040,inset_0px_-0.25px_0px_#88000040,inset_0px_0.25px_0px_#ff929280]"
          } ${!isActive ? "bg-[#985f5f]" : "bg-[#ff0606]"}`}
        >
          {isActive && (
            <div className="relative w-px h-px top-px left-px bg-[#ff9191] rounded-[0.5px] blur-[1px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default RedLight;
