// import { FormEvent } from "react";
import { Link } from "react-router-dom";
// import { authAccount } from "../../appwrite/config";
// import getInputError from "../../Utils/getInputError";
import { LOGIN_INPUT_FIELDS } from "./constants";
import { AUTHMETHODS } from "../../constants";
// import { toast } from "react-toastify";
import { InputWithLabel, InputWithLabelWrapper } from "../../components/Input";
import { FormFooter, FormHeader, FormWrapper } from "../../components/Form";
import { ActionButtonWithIcon } from "../../components/Button/ActionButtonWithIcon";
import { AuthLayout } from "../../components/Layout";
import ToastNotif from "../../components/Toast";
import useForm from "../../hooks/useForm";

export default function Login() {
	const { loginSubmit } = useForm();
	//  const [wasSubmitted, setWasSubmitted] = useState(false);

	// function handleSubmit(e: FormEvent<HTMLFormElement>) {
	// 	const toastError = () =>
	// 		toast.error(
	// 			"Cannot submit the form. Please check the highlighted fields for errors and try again."
	// 		);

	// 	e.preventDefault();
	// 	const formData = new FormData(e.currentTarget);
	// 	const formFieldValuesObj = Object.fromEntries(formData.entries());
	// 	const formFieldvaluesArr = Object.entries(formFieldValuesObj);
	// 	const isFormValid = formFieldvaluesArr
	// 		.map((field) => getInputError(field[0], field[1] as string))
	// 		.every((value) => value.isValid);
	// 	const [emailField, passwordField] = formFieldvaluesArr;

	// 	console.log(
	// 		"formEntries",
	// 		formData.entries(),
	// 		"formFieldValuesArr",
	// 		formFieldvaluesArr
	// 	);
	// 	// setWasSubmitted(true);
	// 	if (isFormValid) {
	// 		console.log("logged in");
	// 		console.time("Begin");
	// 		const createLoginSessionPromise = authAccount.createEmailSession(
	// 			emailField[1] as string,
	// 			passwordField[1] as string
	// 		);
	// 		createLoginSessionPromise
	// 			.then((response) => console.log("Logged in", response))
	// 			.catch((error) => console.log("Something went wrong", error));
	// 		console.timeEnd("Begin");
	// 		return;
	// 	}
	// 	toastError();
	// 	console.log("Error");
	// }
	return (
		<AuthLayout>
			<FormHeader
				headerTitle="Login to your account"
				subTitle="Don't have an account? "
				subTitleCta="Sign up"
				ctaLinkTo="/signup"
			/>
			<FormWrapper submitFunction={loginSubmit}>
				{LOGIN_INPUT_FIELDS.map(
					({
						id,
						labelText,
						labelFor,
						inputType,
						twoLabelElements,
						isRequired,
						placeHolder,
						isPassword,
					}) => {
						if (twoLabelElements) {
							return (
								<InputWithLabelWrapper
									key={id}
									labelText={labelText}
									labelFor={labelFor}
									inputType={inputType}
									placeHolder={placeHolder}
									required={isRequired}
									isPassword={isPassword}>
									<Link
										className="text-fs--2 text-right text-primary-500 font-medium hover:text-primary-300 focus:outline-primary-300"
										to="xoxo">
										Forgot password?
									</Link>
								</InputWithLabelWrapper>
							);
						}
						return (
							<InputWithLabel
								key={id}
								labelText={labelText}
								labelFor={labelFor}
								inputType={inputType}
								placeHolder={placeHolder}
								required={isRequired}
							/>
						);
					}
				)}
				<div className="mt-2">
					<button type="submit" className="btn-primary w-full">Login</button>
				</div>
			</FormWrapper>
			<FormFooter>
				{AUTHMETHODS.map((method) => (
					<ActionButtonWithIcon
						key={method.id}
						buttonText={method.name}
						clickFunction={method.clickFunction}
						iconUrl={method.icon}
					/>
				))}
			</FormFooter>
			<ToastNotif />
		</AuthLayout>
	);
}
