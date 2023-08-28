import AddBirthday from "../components/Birthday/AddBirthday";
import { DashboardBirthdayCalender } from "../components/Calender/DashboardBirthdayCalender";
import { UpcomingBirthdaySection } from "../components/UpcomingBirthday/UpcomingBirthdaySection";

export default function Overview() {
	return (
		<div className="px-4 mx-auto max-w-3xl">
			<div className="mb-6">
				Date section
				<DashboardBirthdayCalender />
			</div>
			<div>
        <UpcomingBirthdaySection />
      </div>
      <AddBirthday />
		</div>
	);
}
