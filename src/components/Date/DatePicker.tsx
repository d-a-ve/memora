import { ReactNode, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { DatePickerHeader } from "./DatePickerHeader";
import "./date-styles.css";

export function DatePickerComponent({
  inline,
  isReadOnly,
  customInput,
  dates,
}: {
  inline: boolean;
  isReadOnly: boolean;
  customInput?: ReactNode;
  dates?: Date[];
}) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      highlightDates={dates}
      // injectTimes={dates}
      // closeOnScroll={true}
      inline={inline}
      readOnly={isReadOnly}
      // minDate={new Date(1900)}
      className="input"
      yearDropdownItemNumber={12}
      showYearDropdown
      dateFormat="dd/MM"
      dateFormatCalendar="LLLL"
      fixedHeight={true}
      scrollableYearDropdown={true}
      customInput={customInput}
      // calendarclassName="bg-red-500"
      // dayclassName={(date) => {
      // 	return isSameMonth(date, new Date()) ? "text-black" : "text-gray-300";
      // }}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <DatePickerHeader
          date={date}
          changeYear={changeYear}
          changeMonth={changeMonth}
          decreaseMonth={decreaseMonth}
          increaseMonth={increaseMonth}
          prevMonthButtonDisabled={prevMonthButtonDisabled}
          nextMonthButtonDisabled={nextMonthButtonDisabled}
        />
      )}
    />
  );
}
