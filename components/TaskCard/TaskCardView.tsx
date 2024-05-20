import React from "react";
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TaskDropDown } from "../TaskDropDown/TaskDropDown";

export const TaskCardView = () => {
  return (
    <Card>
      <CardContent className="mt-4">
        <CardDescription className="mb-2">Add task</CardDescription>
        <Input type="text" />
      </CardContent>
      <CardFooter>
        <TaskDropDown value="" onChange={() => null} />
      </CardFooter>
    </Card>
  );
};
