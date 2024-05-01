import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useQueryClient } from "@tanstack/react-query";
import getValidFormData from "helpers/getValidFormData";
import { toastError } from "helpers/toastNotifs";

import {
  createUserAccount,
  createUserSession,
} from "@appwrite/utils/userSession";

import { extractErrorMessage } from "@helpers/index";

export default function useForm() {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const signupSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData, isFormValid } = getValidFormData(e);
    const [nameField, emailField, passwordField, confirmPasswordField] =
      formData;
    const doesPasswordMatch = passwordField[1] === confirmPasswordField[1];

    try {
      if (isFormValid && doesPasswordMatch) {
        setIsLoading(true);
        const account = await createUserAccount(
          emailField[1] as string,
          passwordField[1] as string,
          nameField[1] as string
        );
        await createUserSession(
          emailField[1] as string,
          passwordField[1] as string
        );
        queryClient.invalidateQueries({ queryKey: ["current-user"] });
        navigate(`/dashboard/${account.$id}?query_limit=15`);
      } else {
        toastError(
          "Cannot submit the form. Please check the highlighted fields for errors and try again."
        );
      }
    } catch (error: any) {
      toastError(extractErrorMessage(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  const loginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData, isFormValid } = getValidFormData(e);
    const [emailField, passwordField] = formData;

    try {
      if (isFormValid) {
        setIsLoading(true);
        const session = await createUserSession(
          emailField[1] as string,
          passwordField[1] as string
        );
        queryClient.invalidateQueries({ queryKey: ["current-user"] });
        navigate(`/dashboard/${session.userId}/`);
      } else {
        toastError(
          "Cannot submit the form. Please check the highlighted fields for errors and try again."
        );
      }
    } catch (error: any) {
      toastError(extractErrorMessage(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signupSubmit,
    loginSubmit,
    isLoading,
  };
}
