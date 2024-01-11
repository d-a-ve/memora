import { documentType } from "@/types";
import { isFuture, isToday } from "date-fns";

export default function filterUpcomingBirthdaysFromCurrentDate(
  arr: documentType[] | undefined
): documentType[] | undefined {
  if (arr === undefined) return;

  return arr.filter((birthday) => {
    const birthdayDate = new Date(birthday.person_birthday);

    return isToday(birthdayDate) || isFuture(birthdayDate);
  });
}
