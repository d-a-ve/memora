import { ReactDatePickerCustomHeaderProps } from "react-datepicker";

import {
  DatePickerHeaderSelector,
  DatePickerHeaderWrapper,
} from "@/components/Date";
import { calenderMonths } from "@/constants";
import { getMonth } from "date-fns";

type InlineBirthdayDatePickerHeaderPropsType = Pick<
  ReactDatePickerCustomHeaderProps,
  "date" | "changeMonth"
>;

export function InlineBirthdayDatePickerHeader({
  date,
  changeMonth,
}: InlineBirthdayDatePickerHeaderPropsType) {
  return (
    <DatePickerHeaderWrapper>
      <div className="flex items-center justify-center">
        <p className="text-fs--1 font-medium text-primary-500">
          Birthdays in{"  "}
        </p>
        <DatePickerHeaderSelector
          selectValue={calenderMonths[getMonth(date)]}
          options={calenderMonths}
          onChangeHandler={({ target: { value } }) =>
            changeMonth(calenderMonths.indexOf(value))
          }
        />
      </div>
    </DatePickerHeaderWrapper>
  );
}
