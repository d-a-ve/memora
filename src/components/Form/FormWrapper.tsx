import { FormWrapperType } from "./types";

export function FormWrapper({ buttonText, submitFunction, children, password }:FormWrapperType) {
	return (
		<div className="mb-8 md:mb-6">
			<form className="flex flex-col gap-6" onSubmit={submitFunction}>
				{children}
				{password}
				<div className="mt-2">
					<button className="btn-primary w-full">
						{buttonText}
					</button>
				</div>
			</form>
		</div>
	);
}
