import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import BirthdaysContextProvider from "@/modules/dashboard/context/BirthdaysContext";

import DLayout from "../components/Layout/DLayout";

export default function Dashboard() {
  return (
    <BirthdaysContextProvider>
      <DLayout>
        <Suspense>
          <Outlet />
        </Suspense>
      </DLayout>
    </BirthdaysContextProvider>
  );
}
