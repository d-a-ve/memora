import { useState } from "react";

import { birthdayDataType } from "@/types";
import filterUpcomingBirthdaysFromCurrentDate from "@/utils/filterUpcomingBirthdays";

import { UpcomingBirthdayCard } from "./UpcomingBirthdayCard";
import { UpcomingBirthdaySearch } from "./UpcomingBirthdaySearch";

export function UpcomingBirthdaySection({
  birthdays,
}: {
  birthdays: birthdayDataType | undefined;
}) {
  const [searchedBirthday, setSearchedBirthday] = useState<birthdayDataType>();
  const filteredBirthdays = filterUpcomingBirthdaysFromCurrentDate(
    birthdays?.documents
  );
  const filteredSearchedBirthdays = filterUpcomingBirthdaysFromCurrentDate(
    searchedBirthday?.documents
  );

  return (
    <>
      <div className="mb-4 flex items-center justify-between sm:flex-col sm:gap-2 sm:items-start">
        <p className="font-semibold text-fs-1">Upcoming Birthdays</p>
        <UpcomingBirthdaySearch setSearchedBirthday={setSearchedBirthday} />
      </div>
      <div>
        {/* When user is searching, map using the searchedBirthdays instead of default birthdays */}
        {(filteredSearchedBirthdays || filteredBirthdays)?.map((doc) => {
          return (
            <UpcomingBirthdayCard
              key={doc.$id}
              name={doc.person_name}
              birthday={doc.person_birthday}
            />
          );
        })}

        {/* If no birthdays are found when searching, show this message */}
        {filteredSearchedBirthdays &&
          filteredSearchedBirthdays.length === 0 && (
            <div>No birthdays found</div>
          )}
      </div>
    </>
  );
}
