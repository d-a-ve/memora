import { FormEvent } from "react";
import { toast } from "react-toastify";
import {
	createUserWithEmailAndPassword,
	AuthError,
	AuthErrorCodes,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { SIGNUP_INPUT_FIELDS } from "./constants";
import { AUTHMETHODS } from "../../constants";

import { InputWithLabel } from "../../components/Input";
import { FormFooter, FormHeader, FormWrapper } from "../../components/Form";
import { ActionButtonWithIcon } from "../../components/Button/ActionButtonWithIcon";
import { AuthLayout } from "../../components/Layout";
import { Password } from "../../components/Input/Password";
import ToastNotif from "../../components/Toast";
import { getInputError } from "../../Utils/helpers";

export default function Signup() {
	//  const [wasSubmitted, setWasSubmitted] = useState(false);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		const toastError = () =>
			toast.error(
				"Cannot submit the form. Please check the highlighted fields for errors and try again."
			);

		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const formFieldValuesObj = Object.fromEntries(formData.entries());
		const formFieldvaluesArr = Object.entries(formFieldValuesObj);
		const isFormValid = formFieldvaluesArr
			.map((field) => getInputError(field[0], field[1] as string))
			.every((value) => value.isValid);
		const [, emailField, passwordField, confirmPasswordField] =
			formFieldvaluesArr;
		const doesPasswordMatch = passwordField[1] === confirmPasswordField[1];

		// console.log("Password match", isPasswordMatch());
		// setWasSubmitted(true);
		if (isFormValid && doesPasswordMatch) {
			console.log(`Fast Form Submitted`, formFieldvaluesArr);
			createUserWithEmailAndPassword(
				auth,
				emailField[1] as string,
				passwordField[1] as string
			)
				.then((userCredential) => {
					console.log(userCredential);
				})
				.catch((error: AuthError) => {
					let errorMessage;
					switch (error.code) {
						case AuthErrorCodes.EMAIL_EXISTS:
							errorMessage =
								"This email already exists. Please login or try again!";
							break;
						default:
							errorMessage = "Invalid!";
					}
					toast.error(errorMessage);
				});
			return;
		}
		toastError();
		console.log("Error");
	}

	return (
		<AuthLayout>
			<FormHeader
				headerTitle="Sign up for an account"
				subTitle="Already have an account? "
				subTitleCta="Login"
				ctaLinkTo="/login"
			/>
			<FormWrapper
				buttonText="Sign up"
				submitFunction={handleSubmit}
				password={<Password />}>
				{SIGNUP_INPUT_FIELDS.map(
					({ id, labelText, labelFor, inputType, isRequired, placeHolder }) => {
						return (
							<InputWithLabel
								key={id}
								labelText={labelText}
								labelFor={labelFor}
								inputType={inputType}
								required={isRequired}
								placeHolder={placeHolder}
							/>
						);
					}
				)}
			</FormWrapper>
			<FormFooter>
				{AUTHMETHODS.map((method) => (
					<ActionButtonWithIcon
						key={method.id}
						buttonText={method.name}
						clickFunction={method.onClick}
						iconUrl={method.icon}
					/>
				))}
			</FormFooter>
			<ToastNotif />
		</AuthLayout>
	);
}
