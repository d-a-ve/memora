import useBirthday from "../../../../hooks/useBirthday";
import { UpcomingBirthdayCard } from "./UpcomingBirthdayCard";
import { UpcomingBirthdaySearch } from "./UpcomingBirthdaySearch";

export function UpcomingBirthdaySection() {
	const { birthdays } = useBirthday();
	return (
		<div>
			<div className="mb-4 flex items-center justify-between sm:flex-col sm:gap-2 sm:items-start">
				<p className="font-semibold text-fs-1">Upcoming Birthdays</p>
				<UpcomingBirthdaySearch />
			</div>
			<div>
				{birthdays?.documents.map((doc) => {
					return <UpcomingBirthdayCard key={doc.$id} />;
				})}
			</div>
		</div>
	);
}
