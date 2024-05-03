import { ChangeEvent } from "react";

type DatePickerHeaderSelectorPropsType = {
  onChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: string[] | number[];
  selectValue: number | string;
};

export default function DatePickerHeaderSelector({
  onChangeHandler,
  selectValue,
  options,
}: DatePickerHeaderSelectorPropsType) {
  return (
    <div>
      <select
        className="text-fs--1 font-medium bg-transparent text-primary border-b-2 border-b-primary focus:outline-primary focus:border-transparent"
        value={selectValue}
        onChange={onChangeHandler}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
