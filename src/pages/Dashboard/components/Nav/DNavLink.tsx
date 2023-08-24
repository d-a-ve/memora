import { NavLink } from "react-router-dom";
import getSVGFromString from "../../../../Utils/getSVGFromString";
import { DNavLinkPropsType } from "./types";

export default function DNavLink({ icon, text, to }: DNavLinkPropsType) {
	return (
		<NavLink
			to={`/dashboard/${to}`}
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
