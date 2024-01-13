import { Link, Navigate } from "react-router-dom";

import { useUserQuery } from "@/hooks/useUserQuery";
import { InputFieldType } from "@/types";

import useForm from "@hooks/useForm";

import { FormFooter, FormHeader, FormWrapper } from "@components/Form";
import { InputWithLabel, InputWithLabelWrapper } from "@components/Input";
import { AuthLayout } from "@components/Layout";
import ToastNotif from "@components/Toast";

export const LOGIN_INPUT_FIELDS: InputFieldType[] = [
  {
    id: 1,
    labelText: "Email",
    labelFor: "email",
    inputType: "email",
    isRequired: true,
  },
  {
    id: 2,
    labelText: "Password",
    labelFor: "password",
    inputType: "password",
    twoLabelElements: true,
    isRequired: true,
    isPassword: true,
  },
];

export default function Login() {
  const { loginSubmit, isLoading: isFormSubmitting } = useForm();

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
                  isPassword={isPassword}
                >
                  <Link
                    className="text-fs--2 text-right text-primary-500 font-medium hover:text-primary-300 focus:outline-primary-300"
                    to="/forgot-password"
                  >
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
          <button type="submit" className="btn-primary w-full">
            {isFormSubmitting ? "Logging in..." : "Login"}
          </button>
        </div>
      </FormWrapper>
      <FormFooter />
      <ToastNotif />
    </AuthLayout>
  );
}
