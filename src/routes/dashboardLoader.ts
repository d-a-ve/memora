import { LoaderFunctionArgs } from "react-router-dom";

import { listUserDocFromBirthdaysCol } from "@/appwrite/utils/database";

export async function dashboardLoader({ params }: LoaderFunctionArgs) {
  const user = await listUserDocFromBirthdaysCol(
    params.userId,
    // params.queryLimit
  );
  return user;
}
