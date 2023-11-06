// import { listUserDocFromBirthdaysCol } from "@appwrite/utils/database";
import { enableRealtimeForBirthdaysCol } from "@/appwrite/utils/realtime";
import useBirthdayApi from "@/hooks/useBirthdayApi";
import useSetupBirthdayWithLoader from "@/hooks/useSetupBirthdayWithLoader";
import AddBirthday from "@Dashboard/components/Birthday/AddBirthday";
import { DashboardBirthdayCalender } from "@Dashboard/components/Calender/DashboardBirthdayCalender";
import { UpcomingBirthdaySection } from "@Dashboard/components/UpcomingBirthday/UpcomingBirthdaySection";
import { useEffect } from "react";

export default function Overview() {
	const { setBirthdays } = useBirthdayApi();
	useSetupBirthdayWithLoader();
	// const listDocs = async () => {
	// 	try {
	// 		const docs = await listUserDocFromBirthdaysCol();
	// 		console.log("Data from appwrite: ", docs);
	// 		setBirthdays(docs);
	// 	} catch (error) {
	// 		console.log("Error: ", error)
	// 	}
	// }
	// listDocs()
	useEffect(() => {
		const unsubscribe = enableRealtimeForBirthdaysCol(setBirthdays);

		return () => unsubscribe();
	}, []);

	return (
		<>
			<div className="mb-6">
				Date section
				<DashboardBirthdayCalender />
			</div>
			<div>
				<UpcomingBirthdaySection />
			</div>
			<AddBirthday />
		</>
	);
}
