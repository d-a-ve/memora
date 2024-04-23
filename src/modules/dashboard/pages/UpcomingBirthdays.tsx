import { useParams } from "react-router-dom";

import { listUserDocFromBirthdaysCol } from "@appwrite/utils/database";

import AddBirthday from "../components/AddBirthday/AddBirthday";
import { UpcomingBirthdaySection } from "../components/UpcomingBirthday/UpcomingBirthdaySection";
import { useBirthdayQuery } from "../hooks/useBirthdayQuery";

export default function UpcomingBirthdays() {
  const { userId } = useParams();
  const { data: birthdays, isLoading: isBirthdaysLoading } = useBirthdayQuery({
    queryFn: () => listUserDocFromBirthdaysCol(userId),
    queryKey: ["birthdays", userId],
    refetchOnWindowFocus: false,
  });

  if (isBirthdaysLoading) return <div>Loading...</div>;
  return (
    <div>
      <UpcomingBirthdaySection birthdays={birthdays} />
      <AddBirthday showMode={{ mode: "button" }} />
    </div>
  );
}
