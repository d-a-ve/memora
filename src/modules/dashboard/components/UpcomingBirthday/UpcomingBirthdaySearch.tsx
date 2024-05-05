import {
  Dispatch,
  SetStateAction, // FormEvent,
  useEffect,
  useState, // FormEvent,
} from "react";

import getSVGFromString from "helpers/getSVGFromString";

import useDebounce from "@hooks/useDebounce";

import { searchForBirthday } from "@appwrite/utils/database";

import { birthdayDataType } from "@myTypes/index";

import { Input } from "@components/Input/Input";

export function UpcomingBirthdaySearch({
  setSearchedBirthday,
  setIsSearching,
}: {
  setSearchedBirthday: Dispatch<SetStateAction<birthdayDataType | undefined>>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}) {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce<string>(searchValue);

  useEffect(() => {
    if (searchValue.length > 0) {
      setIsSearching(true);
    }
  }, [searchValue]);

  useEffect(() => {
    const searchBirthdays = async () => {
      const birthdays = await searchForBirthday(debouncedValue);

      setSearchedBirthday(birthdays);
      setIsSearching(false);
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
          <button
            className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer outline-none focus-ring-visible focus-visible:rounded"
            title="Clear search input"
            onClick={() => setSearchValue("")}
          >
            {getSVGFromString("close", 12, 12)}
          </button>
        )}
      </form>
    </div>
  );
}
