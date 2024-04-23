import "react-datepicker/dist/react-datepicker.css";

import { DatePickerWrapper } from "@components/Date";

import { InlineBirthdayDatePickerHeader } from "./InlineBirthdayDatePickerHeader";

export function InlineBirthdayDatePicker({
  dates,
}: {
  dates: Date[] | undefined;
}) {
  return (
    <DatePickerWrapper
      highlightDates={dates}
      isReadOnly={true}
      inline={true}
      renderCustomHeader={({ date, changeMonth }) => (
        <InlineBirthdayDatePickerHeader date={date} changeMonth={changeMonth} />
      )}
    />
  );
}
