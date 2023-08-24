import { Dispatch, SetStateAction } from "react";
import { authAccount } from "../config";
import { toastError } from "../../Utils/toastNotifs";
import { UserType } from "../../types";

export default async function logout(
	setCurrentUser: Dispatch<SetStateAction<UserType | undefined>>,
	navigateFunction: () => void
) {
	try {
		await authAccount.deleteSession("current");
		console.log("Logged out successful");
		setCurrentUser(undefined);
		navigateFunction();
	} catch (error) {
		toastError("Something went wrong. Could not log out!");
		console.log(error);
	}
}
