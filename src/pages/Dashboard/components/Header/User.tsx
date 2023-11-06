import { getInitials } from "@/appwrite/utils/avatar";
import useAuth from "@/hooks/useAuth";

export default function User() {
	const { currentUser } = useAuth();
	const avatar = getInitials()
	return (
		<div className="flex items-center">
			<p className="text-fs--1">Welcome back<span className="sm:hidden">, {currentUser?.name || "Guest"}</span></p>
			<div className=" ml-2 w-10 h-10 bg-black overflow-hidden rounded-full flex items-center justify-center">
				<img src={avatar.href} alt={`${currentUser?.name || "Guest"} initials`}/>
			</div>
		</div>
	);
}
