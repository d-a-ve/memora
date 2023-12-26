import { documentType } from "@/types";

export default function filterUpcomingBirthdaysFromCurrentDate(
  arr: documentType[] | undefined
): documentType[] | undefined {
  if (arr === undefined) return;

  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();

  return arr.filter((birthday) => {
    const birthdayMonth = new Date(birthday.person_birthday).getMonth();
    const birthdayDay = new Date(birthday.person_birthday).getDate();

    return birthdayMonth >= currentMonth && birthdayDay >= currentDay;
  });
}
