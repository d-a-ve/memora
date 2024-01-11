import { calenderMonths } from "@constants";
import {
  formatDistanceToNowStrict,
  formatISO,
  getDate,
  getMonth,
  getYear,
  isPast,
  isToday,
  isTomorrow,
} from "date-fns";

export function getDateFromSlashSeparatedString(birthdayDate: string) {
  const d = new Date();
  let year = d.getFullYear();
  const [day, month] = birthdayDate.split("/").map((date) => Number(date));

  if (isPast(new Date(year, month - 1, day))) year = year + 1;

  const formattedDate = formatISO(new Date(year, month - 1, day), {
    representation: "date",
  }); // Output: '2019-09-18'
  return formattedDate;
}

export function getDateFromDateString(date: string) {
  const bdayDate = new Date(date);
  const year = getYear(bdayDate);
  const monthNum = getMonth(bdayDate);
  const day = getDate(bdayDate);
  const monthName = calenderMonths[monthNum];

  return { day, monthName, monthNum, year };
}

export function getDaysLeft(date: string) {
  const bdayDate = new Date(date);
  if (isToday(bdayDate)) return "Today 🎉";

  if (isTomorrow(bdayDate)) return "Tomorrow";

  const left = formatDistanceToNowStrict(bdayDate, {
    addSuffix: true,
    roundingMethod: "ceil",
  });
  return left;
}
