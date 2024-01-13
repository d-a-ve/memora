import { FormEvent, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

import { forgotPassword } from "@/appwrite/utils/userSession";
import { FormHeader, FormWrapper } from "@/components/Form";
import { InputWithLabel } from "@/components/Input";
import { AuthLayout } from "@/components/Layout";
import ToastNotif from "@/components/Toast";
import useCustomMutation from "@/hooks/useCustomMutation";
import { useUserQuery } from "@/hooks/useUserQuery";
import { toastError, toastSuccess } from "@/utils/toastNotifs";

import { PasswordResetResponseType } from "../authTypes";
import PasswordResetLinkSent from "../components/PasswordResetLink";

type MutationFnType = { email: string };

export default function ForgotPassword() {
  const [isResetLinkSent, setIsResetLinkSent] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: currentUser, isLoading: isCurrentUserLoading } =
    useUserQuery(0);
  const { mutateAsync: forgotPasswordMutation, isPending: isSubmitting } =
    useCustomMutation<PasswordResetResponseType, MutationFnType>({
      mutationFn: ({ email }) => forgotPassword(email),
    });

  if (isCurrentUserLoading) return <div>Loading...</div>;

  if (currentUser) {
    console.log("Already logged in");
    return <Navigate to={`/dashboard/${currentUser.$id}/`} />;
  }

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userEmail = new FormData(e.currentTarget).get("email") as string;
    setSearchParams({ email: userEmail });

    try {
      await forgotPasswordMutation({ email: userEmail });
      setIsResetLinkSent(true);
    } catch (error: any) {
      toastError(error.message);
    }
  };

  const resendLink = async () => {
    const userEmail = searchParams.get("email") as string;

    try {
      await forgotPasswordMutation({ email: userEmail });
      toastSuccess("Reset link sent successfully");
    } catch (error: any) {
      toastError(error.message);
    }
  };

  return (
    <AuthLayout>
      {isResetLinkSent ? (
        <PasswordResetLinkSent resendLink={resendLink} />
      ) : (
        <>
          <FormHeader
            headerTitle="Forgot your Password"
            subTitle="If you didn't forget your password "
            subTitleCta="Login"
            ctaLinkTo="/login"
          />
          <FormWrapper submitFunction={submitHandler}>
            <InputWithLabel
              labelText="Enter your email"
              labelFor="email"
              inputType="email"
              required={true}
            />
            <div className="mt-2">
              <button type="submit" className="btn-primary w-full">
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </FormWrapper>
        </>
      )}
      <ToastNotif />
    </AuthLayout>
  );
}
