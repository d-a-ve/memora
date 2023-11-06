import User from "./User";
import { ReactElement } from "react";

export default function Header({
	logoComponent,
}: {
	logoComponent: ReactElement;
}) {
	return (
		<div className="sticky top-0 left-0 z-10">
			<div className="col-start-1 col-end-13 flex items-center justify-between py-3 px-4 h-16 bg-secondary-300">
				{logoComponent}
				<User />
			</div>
		</div>
	);
}
