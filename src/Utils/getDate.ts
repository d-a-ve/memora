import { calenderMonths } from "@constants";
import {
  formatDistanceToNowStrict,
  formatISO,
  getDate,
  getYear,
  getMonth,
} from "date-fns";

export function getDateFromSlashSeparatedString(birthdayDate: string) {
  const d = new Date();
  const year = d.getFullYear();
  const [day, month] = birthdayDate.split("/").map((date) => Number(date));

  const formattedDate = formatISO(new Date(year, month - 1, day), {
    representation: "date",
  }); // Output: '2019-09-18'
  console.log(formattedDate);
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
  const left = formatDistanceToNowStrict(bdayDate, { addSuffix: true });
  return left;
}
