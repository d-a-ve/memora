import { ReactNode } from "react";

export function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className="grid grid-cols-2 min-h-screen lg:grid-cols-1">
			<div className="bg-white py-12">
				<section className="max-w-lg mx-auto flex items-center justify-center h-full">
					<div className="w-full px-8">{children}</div>
				</section>
			</div>
			<div className="bg-red-500 lg:hidden">
				<div>{/* <img src="" alt="" /> */}</div>
			</div>
		</div>
	);
}
