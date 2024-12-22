import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
const page = () => {
  return (
    <div className="flex w-[1080px] flex-col items-start justify-start mt-16 m-auto h-screen gap-4">
      <h1 className="text-4xl px-2 font-bold">Stats</h1>
      <Table className="w-full">
        <TableCaption>A list of your recent timers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Activity</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Goals</TableHead>
            <TableHead className="text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="cursor-pointer">
            <TableCell className="font-medium">
              <Badge variant="outline" className="bg-pink-50 text">
                Pomodoro{" "}
              </Badge>
            </TableCell>
            <TableCell>12-22-2024</TableCell>
            <TableCell>12:00</TableCell>
            <TableCell>4</TableCell>
            <TableCell className="text-right">25 min</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
