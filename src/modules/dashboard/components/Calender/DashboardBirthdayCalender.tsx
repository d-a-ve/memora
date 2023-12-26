import { birthdayDataType } from "@/types";

import { DatePickerComponent } from "@components/Date";

export function DashboardBirthdayCalender({
  birthdays,
}: {
  birthdays: birthdayDataType | undefined;
}) {
  const birthdayDates = birthdays?.documents.map(
    (doc) => new Date(doc?.person_birthday)
  );

  return (
    <div>
      <DatePickerComponent
        dates={birthdayDates}
        isReadOnly={true}
        inline={true}
      />
    </div>
  );
}
