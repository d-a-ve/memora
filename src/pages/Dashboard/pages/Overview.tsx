import { listUserDocFromBirthdaysCol } from "@appwrite/utils/database";
import useBirthdayApi from "@hooks/useBirthdayApi";
import AddBirthday from "@Dashboard/components/Birthday/AddBirthday";
import { DashboardBirthdayCalender } from "@Dashboard/components/Calender/DashboardBirthdayCalender";
import { UpcomingBirthdaySection } from "@Dashboard/components/UpcomingBirthday/UpcomingBirthdaySection";

export default function Overview() {
	const { setBirthdays } = useBirthdayApi();

	const listDocs = async () => {
		try {
			const docs = await listUserDocFromBirthdaysCol();
			console.log("Data from appwrite: ", docs);
			setBirthdays(docs);
		} catch (error) {
			console.log("Error: ", error)
		}
	}
	listDocs()

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
