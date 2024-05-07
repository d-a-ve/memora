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
    <div className="relative">
      <select
        className="text-base text-center font-medium bg-background/50 px-2 py-0.5 rounded border border-gray-300 appearance-none focus-ring-visible outline-none focus-visible:ring-offset-0 rounded-t-none cursor-pointer focus-visible:rounded"
        value={selectValue}
        onChange={onChangeHandler}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        icn
      </select>
    </div>
  );
}
