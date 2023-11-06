import { ReactNode } from "react";

export function ModalLayout({ isModalOpen, children }: { isModalOpen: boolean, children:ReactNode }) {
	return (
		<div className="fixed inset-0"> {/* to make the div full the entire screen, making the absolute position work well. */}
			<div className={`fixed inset-0 ${isModalOpen} ? opaque : "" `} /> {/* To make the background when the modal is open, dark */}
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[567px] max-w-full">
				<div className="px-4">{children}</div> {/* Used padding here and not margin is the immediate parent because mx was not taking effect, only ml was taking effect. */}
			</div>
		</div>
	);
}
