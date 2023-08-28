import { FormWrapperType } from "./types";

export function FormWrapper({ submitFunction, children }:FormWrapperType) {
	return (
		<div className="mb-8 md:mb-6">
			<form className="flex flex-col gap-6" onSubmit={submitFunction}>
				{children}
			</form>
		</div>
	);
}
