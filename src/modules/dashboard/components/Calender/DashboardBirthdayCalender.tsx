import useBirthday from "@/modules/dashboard/hooks/useBirthday";

import { DatePickerComponent } from "@components/Date";

// import { birthdayDataType } from "@/types";

export function DashboardBirthdayCalender() {
  const { birthdays } = useBirthday();
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
