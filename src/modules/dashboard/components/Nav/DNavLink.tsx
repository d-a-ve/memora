import { NavLink } from "react-router-dom";
import getSVGFromString from "../../../../Utils/getSVGFromString";
import { DNavLinkPropsType } from "../../dashboard";
import useAuth from "@hooks/useAuth";

export default function DNavLink({ icon, text, to }: DNavLinkPropsType) {
	const { currentUser } = useAuth();
	return (
		<NavLink
			to={`/dashboard/${currentUser?.$id || "64e447cebb60d0ff0bd7"}/${to}`}
			className={({ isActive, isPending }) =>
				isActive
					? "nav-link bg-primary-500 text-white"
					: isPending
					? "nav-link bg-secondary-500 text-black"
					: "nav-link"
			}>
			{getSVGFromString(icon, 20, 20)}
			<span>{text}</span>
		</NavLink>
	);
}