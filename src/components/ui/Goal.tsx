import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./input";
import Image from "next/image";

const Goal = () => {
  const [goal, setGoal] = useState("");
  const [goalList, setGoalList] = useState<string[]>([]);

  const addGoal = () => {
    setGoalList([...goalList, goal]);
    setGoal("");
  };

  return (
    <section className="flex flex-col gap-8 p-4 items-center w-[800px] bg-[#242424] rounded-lg dark:bg-gray-900">
      <div id="goal" className="w-full flex flex-row items-end gap-2">
        <div className="w-full">
          <h2 className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-200">
            Session Goal
          </h2>
          <form
            className="flex flex-row gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              addGoal();
            }}
          >
            <Input
              value={goal || ""}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="What do you want to accomplish in this session?"
              className="w-full placeholder:text-gray-500 placeholder:text-sm dark:placeholder:text-gray-200 p-2 text-gray-800 dark:text-gray-200 bg-zinc-50 dark:bg-gray-700 rounded-lg"
            />
          </form>
        </div>
        <div className="w-fit">
          <Button
            variant="outline"
            className="w-fit hover:bg-gray-50 hover:text-gray-800 transition-all duration-300"
            onClick={addGoal}
          >
            Save
          </Button>
        </div>
      </div>

      {goalList.length > 0 && <GoalList goalList={goalList} />}
    </section>
  );
};

const EmptyState = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
      <Image src="/alien.svg" alt="Empty state" width={200} height={200} />
      <h1 className="text-2xl font-bold">No goal set</h1>
      <p className="text-sm text-gray-500">
        Set a goal for your timer. This will help you stay focused and
        motivated.
      </p>
    </div>
  );
};

const GoalItem = ({ goal }: { goal: string }) => {
  return <li className="text-sm text-gray-500">{goal}</li>;
};

const GoalList = ({ goalList }: { goalList: string[] }) => {
  return (
    <ul className="flex flex-col items-center justify-center w-full h-full">
      {goalList.map((goal, index) => (
        <GoalItem key={index} goal={goal} />
      ))}
    </ul>
  );
};

export default Goal;
