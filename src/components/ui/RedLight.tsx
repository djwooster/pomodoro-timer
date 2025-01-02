import React from "react";

interface Props {
  isActive: boolean;
  className?: string;
}

const RedLight = ({ isActive, className }: Props) => {
  return <div className={className}></div>;
};

export default RedLight;
