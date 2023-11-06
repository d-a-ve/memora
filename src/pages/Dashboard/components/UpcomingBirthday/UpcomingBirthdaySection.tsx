import useBirthday from "@hooks/useBirthday";
import { UpcomingBirthdayCard } from "./UpcomingBirthdayCard";
import { UpcomingBirthdaySearch } from "./UpcomingBirthdaySearch";
import { useState } from "react";
import { birthdayDataType } from "@/types";

export function UpcomingBirthdaySection() {
	const { birthdays } = useBirthday();
	const [searchedBirthday, setSearchedBirthday] = useState<birthdayDataType>();
	console.log(birthdays)

	return (
		<div>
			<div className="mb-4 flex items-center justify-between sm:flex-col sm:gap-2 sm:items-start">
				<p className="font-semibold text-fs-1">Upcoming Birthdays</p>
				<UpcomingBirthdaySearch setSearchedBirthday={setSearchedBirthday} />
			</div>
			<div>
				{/* When user is searching, map using the birthdays that was fetched instead of the one in context */}
				{(searchedBirthday || birthdays)?.documents.map((doc) => {
					return (
						<UpcomingBirthdayCard
							key={doc.$id}
							name={doc.person_name}
							birthday={doc.person_birthday}
						/>
					);
				})}
			</div>
		</div>
	);
}
