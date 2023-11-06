import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import DLayout from "../components/Layout/DLayout";
import BirthdaysContextProvider from "@context/BirthdaysContext";

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
