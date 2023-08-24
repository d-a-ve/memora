import { FormEvent } from "react";
import useAuthApi from "./useAuthApi";
import getValidFormData from "../Utils/getValidFormData";
import { toastError } from "../Utils/toastNotifs";
import { useNavigate } from "react-router-dom";
import {
	createUserAccount,
	createUserSession,
	getUserAccount,
} from "../appwrite/utils/userSession";

export default function useForm() {
	const { setCurrentUser } = useAuthApi();
	const navigate = useNavigate();

	const signupSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { formData, isFormValid } = getValidFormData(e);
		const [nameField, emailField, passwordField, confirmPasswordField] =
			formData;
		const doesPasswordMatch = passwordField[1] === confirmPasswordField[1];

		try {
			if (isFormValid && doesPasswordMatch) {
				await createUserAccount(
					emailField[1] as string,
					passwordField[1] as string,
					nameField[1] as string
				);
				await createUserSession(
					emailField[1] as string,
					passwordField[1] as string
				);
				console.log(setCurrentUser);
				const userAccount = await getUserAccount();
				console.log("User Account", userAccount);
				setCurrentUser(userAccount);
				navigate("/dashboard");
			} else {
        toastError(
          "Cannot submit the form. Please check the highlighted fields for errors and try again."
        );
      }
		} catch (error) {
			console.log(error);
		}
	};

	const loginSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { formData, isFormValid } = getValidFormData(e);
		const [emailField, passwordField] = formData;

		try {
			if (isFormValid) {
				await createUserSession(
					emailField[1] as string,
					passwordField[1] as string
				);
				const userAccount = await getUserAccount();
				console.log("User Account", userAccount);
				setCurrentUser(userAccount);
				navigate("/dashboard");
			} else {
        toastError(
          "Cannot submit the form. Please check the highlighted fields for errors and try again."
        );
      }
		} catch (error) {
			console.log(error);
		}
	};

	return {
		signupSubmit,
		loginSubmit,
	};
}
