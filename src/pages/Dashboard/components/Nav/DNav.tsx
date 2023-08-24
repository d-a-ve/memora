import DNavLinks from "./DNavLinks";
import DNavLogoutBtn from "./DNavLogoutBtn";

export default function DNav({ isNavOpen }: { isNavOpen: boolean }) {
	return (
		<div
			className={`dashboard-nav nav-height ${
				isNavOpen ? "lg:z-10" : "lg:-translate-x-full"
			}`}>
			<nav className="py-8 flex flex-col h-4/5 justify-between">
				<DNavLinks />
				<DNavLogoutBtn />
			</nav>
		</div>
	);
}
