import { useState } from "react";
import { Link } from "react-router-dom";

import filterUpcomingBirthdaysFromCurrentDate from "helpers/filterUpcomingBirthdays";

import { birthdayDataType } from "@myTypes/index";

import { UpcomingBirthdayCard } from "./UpcomingBirthdayCard";
import { UpcomingBirthdaySearch } from "./UpcomingBirthdaySearch";

type ShowMoreBirthdays = {
  numOfBirthdaysToShow: number;
  linkToSeeMoreBirthdays: string;
};

type UpcomingBirthdaySectionProps = {
  birthdays: birthdayDataType | undefined;
  showMoreBirthdays?: ShowMoreBirthdays;
};

export function UpcomingBirthdaySection({
  birthdays,
  showMoreBirthdays,
}: UpcomingBirthdaySectionProps) {
  const [searchedBirthday, setSearchedBirthday] = useState<birthdayDataType>();
  const filteredBirthdays = filterUpcomingBirthdaysFromCurrentDate(
    birthdays?.documents
  );
  const filteredSearchedBirthdays = filterUpcomingBirthdaysFromCurrentDate(
    searchedBirthday?.documents
  );

  // If the number of searched birthdays is greater than the number of birthdays to show, show the "See more birthdays" link
  const shouldSeeMoreSearchedBirthdaysLinkShow =
    filteredSearchedBirthdays &&
    showMoreBirthdays &&
    filteredSearchedBirthdays.length > showMoreBirthdays.numOfBirthdaysToShow;

  const shouldSeeMoreBirthdaysLinkShow =
    filteredBirthdays &&
    showMoreBirthdays &&
    filteredBirthdays.length > showMoreBirthdays.numOfBirthdaysToShow;

  return (
    <>
      <div className="mb-4 flex items-center justify-between sm:flex-col sm:gap-2 sm:items-start">
        <p className="font-semibold text-fs-1">Upcoming Birthdays</p>
        <UpcomingBirthdaySearch setSearchedBirthday={setSearchedBirthday} />
      </div>
      <div>
        {/* When user is searching, map using the searchedBirthdays instead of default birthdays */}
        {(filteredSearchedBirthdays || filteredBirthdays)
          ?.slice(
            0,
            // if undefined, show all birthdays
            showMoreBirthdays && showMoreBirthdays.numOfBirthdaysToShow
          )
          ?.map((doc) => {
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

        {/* If no birthdays are found when searching, show this message */}
        {filteredBirthdays && filteredBirthdays.length === 0 && (
          <div>No birthdays found</div>
        )}

        {(shouldSeeMoreSearchedBirthdaysLinkShow ||
          shouldSeeMoreBirthdaysLinkShow) && (
          <p className="mt-8 text-center">
            <Link
              className="btn-primary text-fs--1"
              to={showMoreBirthdays.linkToSeeMoreBirthdays}
            >
              See more birthdays...
            </Link>
          </p>
        )}
      </div>
    </>
  );
}
