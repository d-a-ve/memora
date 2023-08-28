import { ReactNode, useState } from "react";
// import { isSameMonth } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import { DatePickerHeader } from "./DatePickerHeader";

export function DatePickerComponent({
	inline,
	isReadOnly,
	customInput
}: {
	inline: boolean;
	isReadOnly: boolean;
	customInput?: ReactNode
}) {
	const [startDate, setStartDate] = useState<Date | null>(new Date());
	const dates = [
		new Date(2023, 6, 1),
		new Date(2023, 6, 5),
		new Date(2023, 6, 15),
		new Date(2023, 6, 31),
		new Date(2023, 6, 29),
		new Date(2023, 7, 19),
		new Date(2023, 1, 12),
		new Date(2023, 2, 28),
		new Date(2023, 5, 15),
		new Date(2023, 4, 29),
		new Date(2023, 11, 29),
	];

	return (
		<DatePicker

			selected={startDate}
			onChange={(date) => setStartDate(date)}
			highlightDates={dates}
			injectTimes={dates}
			closeOnScroll={true}
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
			// calendarClassName="bg-red-500"
			// dayClassName={(date) => {
			// 	console.log(date);
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
