// import { listUserDocFromBirthdaysCol } from "@appwrite/utils/database";
import { useParams } from "react-router-dom";

import { listUserDocFromBirthdaysCol } from "@/appwrite/utils/database";

import AddBirthday from "../components/Birthday/AddBirthday";
import { DashboardBirthdayCalender } from "../components/Calender/DashboardBirthdayCalender";
import { UpcomingBirthdaySection } from "../components/UpcomingBirthday/UpcomingBirthdaySection";
import { useBirthdayQuery } from "../hooks/useBirthdayQuery";

export default function Overview() {
  const { userId } = useParams();
  console.log({ userId });
  const {
    data: birthdays,
    isLoading: isBirthdaysLoading,
    error: birthdaysError,
  } = useBirthdayQuery({
    queryFn: () => listUserDocFromBirthdaysCol(userId),
    queryKey: ["birthdays", userId],
  });

  console.log({ birthdaysError: birthdaysError?.message, birthdays });

  if (isBirthdaysLoading) return <div>Loading...</div>;

  if (birthdaysError) return <div>Something went wrong!!</div>;

  return (
    <>
      <div className="mb-6">
        Date section
        <DashboardBirthdayCalender birthdays={birthdays} />
      </div>

      <UpcomingBirthdaySection birthdays={birthdays} />
      <AddBirthday />
    </>
  );
}
