import { EnumsOptions } from "../intefaces/Enums";
import { Select } from "./Utilities";

export type SelectEnumProps = {
    register: any; 
    options: EnumsOptions[];
    title: string;
}

export function SelectEnumComponent({ register, options, title }: SelectEnumProps) {
    return (
      <Select {...register}>
        <option value="">{title}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    );
  }