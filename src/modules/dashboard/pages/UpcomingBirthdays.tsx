import { useEffect } from "react";

import { enableRealtimeForBirthdaysCol } from "@/appwrite/utils/realtime";
import useBirthdayApi from "@/modules/dashboard/hooks/useBirthdayApi";
import useSetupBirthdayWithLoader from "@/modules/dashboard/hooks/useSetupBirthdayWithLoader";

import AddBirthday from "../components/Birthday/AddBirthday";
import { UpcomingBirthdaySection } from "../components/UpcomingBirthday/UpcomingBirthdaySection";

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
