import { SIGNUP_INPUT_FIELDS } from "./constants";
import { AUTHMETHODS } from "../../constants";
import { InputWithLabel } from "../../components/Input";
import { FormFooter, FormHeader, FormWrapper } from "../../components/Form";
import { ActionButtonWithIcon } from "../../components/Button/ActionButtonWithIcon";
import { AuthLayout } from "../../components/Layout";
import { Password } from "../../components/Input/Password";
import ToastNotif from "../../components/Toast";
import useForm from "../../hooks/useForm";
// import { authAccount } from "../../appwrite/config";

export function Signup() {
	const { signupSubmit } = useForm();
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
				submitFunction={signupSubmit}
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
						clickFunction={method.clickFunction}
						iconUrl={method.icon}
					/>
				))}
			</FormFooter>
			<ToastNotif />
		</AuthLayout>
	);
}
