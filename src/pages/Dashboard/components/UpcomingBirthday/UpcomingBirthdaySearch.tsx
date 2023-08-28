import { useState, FormEvent } from "react";
import { Input } from "../../../../components/Input/Input";
import getValidFormData from "../../../../Utils/getValidFormData";

export function UpcomingBirthdaySearch() {
	const [searchValue, setSearchValue] = useState("");

	const searchFunction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
		const { formData } = getValidFormData(e);
		console.log(formData);
    setSearchValue("")
	};

	return (
		<div>
			<form className="flex gap-1" onSubmit={searchFunction}>
				<Input
					inputType="text"
					inputValue={searchValue}
					changeHandler={(e) => setSearchValue(e.target.value)}
					required={false}
					labelFor="searchBirthday"
					placeHolder="Search..."
          className="search-input"
				/>
				<button className="btn-primary">Search</button>
			</form>
		</div>
	);
}
