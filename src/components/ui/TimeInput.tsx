import React from "react";

const TimeInput = () => {
  return (
    <input
      className="w-5 h-5 p-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700"
      type="number"
      placeholder="Enter time in minutes"
    />
  );
};

export default TimeInput;
