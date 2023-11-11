import { useEffect } from "react";
import useSetupBirthdayWithLoader from "@/modules/dashboard/hooks/useSetupBirthdayWithLoader";
import { UpcomingBirthdaySection } from "../components/UpcomingBirthday/UpcomingBirthdaySection";
import useBirthdayApi from "@/modules/dashboard/hooks/useBirthdayApi";
import { enableRealtimeForBirthdaysCol } from "@/appwrite/utils/realtime";
import AddBirthday from "../components/Birthday/AddBirthday";

export default function UpcomingBirthdays() {
	const { setBirthdays } = useBirthdayApi();
	useSetupBirthdayWithLoader();

	useEffect(() => {
		const unsubscribe = enableRealtimeForBirthdaysCol(setBirthdays);

		return () => unsubscribe();
	}, []);
	return (
		<div>
			<UpcomingBirthdaySection />
			<AddBirthday />
		</div>
	);
}
