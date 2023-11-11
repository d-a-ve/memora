import { ChangeEvent, ReactNode } from "react";
import { ReactDatePickerCustomHeaderProps } from "react-datepicker";

export type DatePickerHeaderPropsType = Omit<
  ReactDatePickerCustomHeaderProps,
  | "monthDate"
  | "customHeaderCount"
  | "decreaseYear"
  | "increaseYear"
  | "prevYearButtonDisabled"
  | "nextYearButtonDisabled"
>;

export type DatePickerHeaderSelectorPropsType = {
  onChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: string[] | number[];
  selectValue: number | string;
};

export type DatePickerButtonWithIconPropsType = {
  clickHandler: () => void;
  isDisabled: boolean;
  children: ReactNode;
};
