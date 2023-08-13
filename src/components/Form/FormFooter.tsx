import { ReactNode } from "react";

export function FormFooter({ children }: { children: ReactNode }) {
	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<span className="w-1/5 h-[1px] bg-gray-400"></span>
				<p className="text-fs--1 text-center font-medium">Or continue with</p>
				<span className="w-1/5 h-[1px] bg-gray-400"></span>
			</div>
			<div className="flex flex-col gap-4">{children}</div>
		</div>
	);
}
