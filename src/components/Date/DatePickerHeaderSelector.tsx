import { DatePickerHeaderSelectorPropsType } from "./types";

export default function DatePickerHeaderSelector({
  onChangeHandler,
  selectValue,
  options,
}: DatePickerHeaderSelectorPropsType) {
  return (
    <div>
      <select
        className="text-fs--1 font-medium bg-transparent text-primary-500 border-b-2 border-b-primary-500 focus:outline-primary-500 focus:border-transparent"
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
