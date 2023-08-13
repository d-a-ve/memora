import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import DNavBody from "../components/Nav/DNavBody";
import DNavHeader from "../components/Nav/DNavHeader";
import DNavController from "../components/Nav/DNavController";
import { getSVGFromString } from "../../../Utils/getSVGFromString";

export default function DashboardLayout() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<div className="dashboard h-screen w-full bg-red-500">
			<div
				className={`dashboard-nav ${
					isNavOpen ? "lg:z-10" : "lg:-translate-x-full"
				}`}>
				<div className="h-screen py-8">
					<DNavHeader setNavOpen={setIsNavOpen} />
					<DNavBody />
				</div>
			</div>
			<div className={`dashboard-main ${isNavOpen ? "lg:opaque" : ""}`}>
				<div className="flex items-center justify-between py-3 px-4 bg-secondary-300">
					<div>
						<DNavController
							clickFunction={() => setIsNavOpen(true)}
							title="Show Navigation bar"
							icon={getSVGFromString("menu", 24, 24)}
						/>
					</div>
					<div className="flex items-center">
						<p>Welcome, User</p>
						<div className=" ml-2 w-12 h-12 bg-black rounded-full flex items-center justify-center">
							<p className="text-white font-semibold text-fs-1">D</p>
						</div>
					</div>
				</div>
				<div>
					<Suspense>
						<Outlet />
					</Suspense>
				</div>
			</div>
		</div>
	);
}
