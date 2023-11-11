import { AUTHMETHODS } from "@/constants";
import { ActionButtonWithIcon } from "../Button/ActionButtonWithIcon";

export function FormFooter() {
	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<span className="w-1/5 h-[1px] bg-gray-400"></span>
				<p className="text-fs--1 text-center font-medium">Or continue with</p>
				<span className="w-1/5 h-[1px] bg-gray-400"></span>
			</div>
			<div className="flex flex-col gap-4">
				{AUTHMETHODS.map((method) => (
					<ActionButtonWithIcon
						key={method.id}
						buttonText={method.name}
						clickFunction={method.clickFunction}
						iconUrl={method.icon}
					/>
				))}
			</div>
		</div>
	);
}
