import { FormEvent, Dispatch, SetStateAction } from "react";
import { authAccount, uniqueId } from "../../appwrite/config";
// import { toastSubmitError } from "../../Utils/toastNotifMessages";
import getValidFormData from "../../Utils/getValidFormData";
import { UserType } from "../../types";

export async function handleSignupSubmit(
	e: FormEvent<HTMLFormElement>,
	setCurrentUser: Dispatch<SetStateAction<UserType | undefined>>,
	navigateFunction: () => void
) {
	e.preventDefault();
	const { formData, isFormValid } = getValidFormData(e);
	const [nameField, emailField, passwordField, confirmPasswordField] = formData;
	const doesPasswordMatch = passwordField[1] === confirmPasswordField[1];

	try {
		if (isFormValid && doesPasswordMatch) {
			const userAccount = await authAccount.create(
				uniqueId,
				emailField[1] as string,
				passwordField[1] as string,
				nameField[1] as string
			);
			const userSession = await authAccount.createEmailSession(
				emailField[1] as string,
				passwordField[1] as string
			);
			console.log("User Session", userSession);
			console.log("User Account", userAccount);
			// navigateFunction()
		}
	} catch (error) {
		console.log(error);
	}
}
