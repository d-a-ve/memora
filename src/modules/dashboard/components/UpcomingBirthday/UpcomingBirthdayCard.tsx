import { getDateFromDateString, getDaysLeft } from "helpers/getDate";

import { getInitials } from "@appwrite/utils/avatar";

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
    <div className="flex items-center justify-between bg-secondary rounded-xl p-3 pr-4 text-fs--1 mb-3">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-lg overflow-hidden">
          <img src={initials.href} alt={`${name} initials`} />
        </div>
        <div className="ml-2">
          <p className=" mb-1">{name}</p>
          <p>
            <span className="text-fs-1">{day}</span>.{monthName}
          </p>
        </div>
      </div>
      <div>
        <p className="capitalize font-semibold">{timeLeft}</p>
      </div>
    </div>
  );
}
