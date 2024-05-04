import { FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { toastError, toastSuccess } from "helpers/toastNotifs";

import useCustomMutation from "@hooks/useCustomMutation";

import { resetPassword } from "@appwrite/utils/userSession";

import { extractErrorMessage } from "@helpers/index";

import Button from "@components/Button";
import { FormHeader, FormWrapper } from "@components/Form";
import { Password } from "@components/Input/Password";
import { AuthLayout } from "@components/Layout";
import ToastNotif from "@components/Toast";

import { PasswordResetResponseType } from "../authTypes";

type ResetPasswordMutationFnType = {
  userId: string;
  secret: string;
  password: string;
};

export default function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // used mutateASync instead of mutate because toast notification was not working with mutate in the onSuccess and onError callback
  const { mutateAsync: resetPasswordMutate, isPending: isPasswordResetting } =
    useCustomMutation<PasswordResetResponseType, ResetPasswordMutationFnType>({
      mutationFn: ({ userId, secret, password }) =>
        resetPassword(userId, secret, password),
    });

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = searchParams.get("userId");
    const secret = searchParams.get("secret");
    const password = new FormData(e.currentTarget).get("password") as string;
    const cPassword = new FormData(e.currentTarget).get("c-password") as string;

    if (password !== cPassword) {
      toastError("Passwords do not match, please check the passwords!!");
      return;
    }

    if (!userId || !secret) {
      toastError(
        "Something went wrong. Please click the link sent to your email again."
      );
      return;
    }

    try {
      // I used this method because the toast notification was not showing up; both errors and success
      await resetPasswordMutate({ userId, secret, password });
      toastSuccess(
        "Password reset successfully, Please log in with new password"
      );
      navigate("/login");
    } catch (error: any) {
      toastError(extractErrorMessage(error.message));
    }
  };

  return (
    <AuthLayout
      sidePanel={{
        title: "Set a new password",
        subtitle: "Choose a strong password and continue your Memora journey.",
      }}
    >
      <FormHeader
        headerTitle="Reset your Password"
        subTitle=""
        subTitleCta=""
        ctaLinkTo=""
      />
      <FormWrapper submitFunction={submitHandler}>
        <Password />
        <div className="mt-2">
          <Button type="submit" isLoading={isPasswordResetting} label="Reset" />
        </div>
      </FormWrapper>
      <ToastNotif />
    </AuthLayout>
  );
}
