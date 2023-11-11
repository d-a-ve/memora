import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { dashboardLoader } from "@/routes/dashboardLoader";
import useBirthdayApi from "./useBirthdayApi";
import useBirthday from "./useBirthday";

export default function useSetupBirthdayWithLoader() {
	const { birthdays } = useBirthday();
	const { setBirthdays } = useBirthdayApi();
	const data = useLoaderData() as Awaited<ReturnType<typeof dashboardLoader>>;

	useEffect(() => {
		// this effect will run on the component that uses it mount and React Router said that the loader data would change if the url is refreshed or a form is submitted.
		// So i am checking if the data has been set before i.e this component has mounted before but the user is revisting this route.
		console.log("birthdays", birthdays);
		if (!birthdays) {
			setBirthdays(data);
			console.log("Effect ran");
		}
	}, [birthdays]);
}
