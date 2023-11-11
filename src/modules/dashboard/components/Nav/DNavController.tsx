import { DNavControllerPropsType } from "../../dashboard";

export default function DNavController({
	clickFunction,
	title,
	icon,
}: DNavControllerPropsType) {
	return (
		<span
			onClick={clickFunction}
			title={title}
			className="cursor-pointer hidden lg:inline">
			{icon}
		</span>
	);
}