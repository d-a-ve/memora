import DNavLinks from "./DNavLinks";
import DNavLogoutBtn from "./DNavLogoutBtn";

export default function DNavBody() {
	return (
		<nav className="flex flex-col h-4/5 justify-between">
			<DNavLinks />
			<DNavLogoutBtn />
		</nav>
	);
}
