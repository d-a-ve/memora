import { SIGNUP_INPUT_FIELDS } from "../constants";
import { InputWithLabel } from "@components/Input";
import { FormFooter, FormHeader, FormWrapper } from "@components/Form";
import { AuthLayout } from "@components/Layout";
import { Password } from "@components/Input/Password";
import ToastNotif from "@components/Toast";
import useForm from "@hooks/useForm";
// import { authAccount } from "../../appwrite/config";

export default function Signup() {
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
				submitFunction={signupSubmit}>
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
				<Password />
				<div className="mt-2">
					<button className="btn-primary w-full">Sign up</button>
				</div>
			</FormWrapper>
			<FormFooter />
			<ToastNotif />
		</AuthLayout>
	);
}
