import DNavController from "../Nav/DNavController";
import getSVGFromString from "../../../../Utils/getSVGFromString";
import { NavigationOpenPropsType } from "./types";

export function Logo({ isNavOpen, setIsNavOpen }: NavigationOpenPropsType) {
	return (
		<div className="flex gap-4 items-center">
			<DNavController
				title="Hide Navigation bar"
				clickFunction={
					isNavOpen ? () => setIsNavOpen(false) : () => setIsNavOpen(true)
				}
				icon={getSVGFromString(isNavOpen ? "close" : "menu", 20, 20)}
			/>
			<div>Logo Image</div>
		</div>
	);
}
