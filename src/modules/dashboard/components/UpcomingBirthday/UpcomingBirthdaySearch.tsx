import {
  Dispatch,
  SetStateAction, // FormEvent,
  useEffect,
  useState, // FormEvent,
} from "react";

import useDebounce from "@hooks/useDebounce";

import { searchForBirthday } from "@appwrite/utils/database";

import getSVGFromString from "@utils/getSVGFromString";

import { birthdayDataType } from "@myTypes/index";

import { Input } from "@components/Input/Input";

export function UpcomingBirthdaySearch({
  setSearchedBirthday,
}: {
  setSearchedBirthday: Dispatch<SetStateAction<birthdayDataType | undefined>>;
}) {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce<string>(searchValue);

  useEffect(() => {
    const searchBirthdays = async () => {
      const birthdays = await searchForBirthday(debouncedValue);

      setSearchedBirthday(birthdays);
    };

    searchBirthdays();
  }, [debouncedValue, setSearchedBirthday]);

  return (
    <div>
      <form className="flex gap-1 relative">
        <Input
          inputType="text"
          inputValue={searchValue}
          changeHandler={(e) => setSearchValue(e.target.value)}
          required={false}
          labelFor="searchBirthday"
          placeHolder="Search..."
          className="search-input"
        />
        {searchValue.length > 0 && (
          <span
            className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
            title="Clear search input"
            onClick={() => setSearchValue("")}
          >
            {getSVGFromString("close", 14, 14)}
          </span>
        )}
      </form>
    </div>
  );
}
