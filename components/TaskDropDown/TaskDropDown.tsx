import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface TaskDropDownProps {
  value: string;
  onChange: (value: string) => void;
}

export const TaskDropDown = ({ value, onChange }: TaskDropDownProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select the progress" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Not started" defaultChecked>
            Not started
          </SelectItem>
          <SelectItem value="In progress">In progress</SelectItem>
          <SelectItem value="Completed">Completed</SelectItem>
          <SelectItem value="Not completed">Not completed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
