// import { listUserDocFromBirthdaysCol } from "@appwrite/utils/database";
import { useEffect } from "react";

import { enableRealtimeForBirthdaysCol } from "@/appwrite/utils/realtime";
import useBirthdayApi from "@/modules/dashboard/hooks/useBirthdayApi";
import useSetupBirthdayWithLoader from "@/modules/dashboard/hooks/useSetupBirthdayWithLoader";

import AddBirthday from "../components/Birthday/AddBirthday";
import { DashboardBirthdayCalender } from "../components/Calender/DashboardBirthdayCalender";
import { UpcomingBirthdaySection } from "../components/UpcomingBirthday/UpcomingBirthdaySection";

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
