import { IconPropsType } from "../../types";

export default function Logout({ width, height }: IconPropsType) {
	return (
		<>
			<svg
				width={width}
				height={height}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M15.2199 20.4L18.9258 20.4C19.4874 20.4 20.0261 20.1788 20.4232 19.7849C20.8203 19.3911 21.0435 18.857 21.0435 18.3L21.0435 5.70003C21.0435 5.14307 20.8203 4.60893 20.4232 4.2151C20.0261 3.82128 19.4874 3.60003 18.9258 3.60003L15.2199 3.60002M14.9567 12L2.95674 12M2.95674 12L7.54189 16.8M2.95674 12L7.54189 7.20002"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</>
	);
}
