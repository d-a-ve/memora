import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import DLayout from "../components/Layout/DLayout";

export default function Dashboard() {
	return (
		<DLayout>
			<Suspense>
				<Outlet />
			</Suspense>
		</DLayout>
	);
}
