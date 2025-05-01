import { ReturnApiSelect } from "../intefaces/ReturnApiSelect";
import { Select } from "./Utilities";

export type SelectEnumProps = {
    register: any; 
    options: ReturnApiSelect[];
    title: string;
}

export function SelectReturnApiComponent({ register, options, title }: SelectEnumProps) {
    return (
      <Select {...register}>
        <option id="">{title}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    );
  }