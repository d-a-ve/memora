import { useState } from "react";

import filterUpcomingBirthdaysFromCurrentDate from "helpers/filterUpcomingBirthdays";

import { birthdayDataType } from "@myTypes/index";

import { LinkButton } from "@components/Link";
import { InlineLoader } from "@components/Loader";

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
  const [isSearching, setIsSearching] = useState(false);
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
    <section className="bg-white p-6 rounded-md shadow-sm border border-gray-300 sm:p-4">
      <div className="mb-4 mt-2 flex items-center justify-between sm:flex-col sm:gap-2 sm:items-start">
        <h2 className="font-semibold text-fs-1 sm:mb-1">Upcoming Birthdays</h2>
        <UpcomingBirthdaySearch
          setSearchedBirthday={setSearchedBirthday}
          setIsSearching={setIsSearching}
        />
      </div>
      {isSearching && (
        <div className="fill-primary text-background flex justify-center py-6">
          <InlineLoader />
        </div>
      )}
      {!isSearching && (
        <div>
          <div className="space-y-3 divide-y divide-y-grey-300">
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
          </div>

          {/* If no birthdays are found when searching, show this message */}
          {filteredSearchedBirthdays &&
            filteredSearchedBirthdays.length === 0 && (
              <div>No birthdays found after searching</div>
            )}

          {/* If no birthdays are found, show this message */}
          {filteredBirthdays && filteredBirthdays.length === 0 && (
            <div>No birthdays found</div>
          )}

          {(shouldSeeMoreSearchedBirthdaysLinkShow ||
            shouldSeeMoreBirthdaysLinkShow) && (
            <p className="mt-8 text-center">
              <LinkButton
                className="text-fs--1"
                href={showMoreBirthdays.linkToSeeMoreBirthdays}
                label="See more birthdays..."
              />
            </p>
          )}
        </div>
      )}
    </section>
  );
}
