import { ReactNode, useState } from "react";
import DNav from "../Nav/DNav";
import Header, { Logo } from "../Header";
import ToastNotif from "@components/Toast";

export default function DLayout({ children }: { children: ReactNode }) {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="w-full bg-red-500">
			<Header
				logoComponent={
					<Logo isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
				}
			/>
			<div className="dashboard">
				<DNav isNavOpen={isNavOpen} />
				<div className={`dashboard-main pb-16 ${isNavOpen ? "lg:opaque" : ""}`}>
					<div className="max-w-3xl mx-auto mt-4">{children}</div>
				</div>
			</div>
			<ToastNotif />
		</div>
	);
}
