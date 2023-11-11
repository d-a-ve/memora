import { DatePickerButtonWithIconPropsType } from "./types";

export default function DatePickerButtonWithIcon({
  clickHandler,
  isDisabled,
  children,
}: DatePickerButtonWithIconPropsType) {
  return (
    <button
      type="button"
      className="w-4"
      onClick={clickHandler}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
