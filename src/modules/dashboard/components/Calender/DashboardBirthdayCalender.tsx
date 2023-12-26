import { useParams } from "react-router-dom";

import { listUserDocFromBirthdaysCol } from "@/appwrite/utils/database";
import useBirthday from "@/modules/dashboard/hooks/useBirthday";

import { DatePickerComponent } from "@components/Date";

import { useBirthdayQuery } from "../../hooks/useBirthdayQuery";

// import { birthdayDataType } from "@/types";

export function DashboardBirthdayCalender() {
  const { userId } = useParams();
  console.log({ userId });
  // const { birthdays } = useBirthday();
  const { data: birthdays, isLoading: isBirthdayLoading } = useBirthdayQuery({
    queryFn: () => listUserDocFromBirthdaysCol(userId),
    queryKey: ["birthdays", userId],
  });
  const birthdayDates = birthdays?.documents.map(
    (doc) => new Date(doc?.person_birthday)
  );

  if (isBirthdayLoading) return <div>Loading...</div>;

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
