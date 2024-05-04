import { getDateFromDateString, getDaysLeft } from "helpers/getDate";

import { getInitials } from "@appwrite/utils/avatar";

import { cn } from "@helpers/cn";

export function UpcomingBirthdayCard({
  name,
  birthday,
}: {
  name: string;
  birthday: string;
}) {
  const { day, monthName } = getDateFromDateString(birthday);
  const timeLeft = getDaysLeft(birthday);
  const initials = getInitials(name);

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 text-fs--1 py-2 px-3",
        {
          "bg-accent text-background rounded-md": timeLeft === "Today 🎉",
        }
      )}
    >
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-lg overflow-hidden bg-background">
          <img src={initials.href} alt={`${name} initials`} />
        </div>
        <div className="ml-2">
          <p className="font-semibold leading-tight mb-1">{name}</p>
          <p>
            <span className="text-fs-1">{day}</span>.{monthName}
          </p>
        </div>
      </div>

      <p className="capitalize font-medium text-right">{timeLeft}</p>
    </div>
  );
}
