import DNavController from "./DNavController";
import getSVGFromString from "../../../../Utils/getSVGFromString";
import { DNavHeaderPropsType } from "./types";

export default function DNavHeader({ setNavOpen }: DNavHeaderPropsType) {
	return (
		<>
			<DNavController
				title="Hide Navigation bar"
				clickFunction={() => setNavOpen(false)}
				icon={getSVGFromString("close", 24, 24)}
			/>
			<div className="mb-12">Logo Image</div>
		</>
	);
}
