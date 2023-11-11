import {
	useState,
	// FormEvent,
	useEffect,
	Dispatch,
	SetStateAction,
} from "react";
import { Input } from "@components/Input/Input";
// import getValidFormData from "@utils/getValidFormData";
import useDebounce from "@/hooks/useDebounce";
import { birthdayDataType } from "@/types";
import { searchForBirthday } from "@/appwrite/utils/database";

export function UpcomingBirthdaySearch({
	setSearchedBirthday,
}: {
	setSearchedBirthday: Dispatch<SetStateAction<birthdayDataType | undefined>>;
}) {
	const [searchValue, setSearchValue] = useState("");
	const debouncedValue = useDebounce<string>(searchValue);

	// const searchFunction = (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	const { formData } = getValidFormData(e);
	// 	console.log(formData);
	// 	setSearchValue("");
	// };
	useEffect(() => {
		const fetchBirthdays = async () => {
			const birthdays = await searchForBirthday(debouncedValue);

			setSearchedBirthday(birthdays);
		};

		fetchBirthdays();
	}, [debouncedValue]);

	return (
		<div>
			<form className="flex gap-1">
				<Input
					inputType="text"
					inputValue={searchValue}
					changeHandler={(e) => setSearchValue(e.target.value)}
					required={false}
					labelFor="searchBirthday"
					placeHolder="Search..."
					className="search-input"
				/>
				{/* <button className="btn-primary">Search</button> */}
			</form>
		</div>
	);
}
