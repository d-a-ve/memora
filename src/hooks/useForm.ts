import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useQueryClient } from "@tanstack/react-query";

import {
  createUserAccount,
  createUserSession,
  getUserAccount,
} from "@appwrite/utils/userSession";

import getValidFormData from "@utils/getValidFormData";
import { toastError } from "@utils/toastNotifs";

import useAuthApi from "./useAuthApi";

export default function useForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { setCurrentUser } = useAuthApi();
  // const { currentUser } = useAuth();
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
        await createUserAccount(
          emailField[1] as string,
          passwordField[1] as string,
          nameField[1] as string
        );
        await createUserSession(
          emailField[1] as string,
          passwordField[1] as string
        );
        const userAccount = await getUserAccount();
        navigate(`/dashboard/${userAccount.$id}?query_limit=15`);
      } else {
        toastError(
          "Cannot submit the form. Please check the highlighted fields for errors and try again."
        );
      }
    } catch (error: any) {
      toastError(error.message);
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
        await createUserSession(
          emailField[1] as string,
          passwordField[1] as string
        );
        const userAccount = await getUserAccount();
        queryClient.invalidateQueries({ queryKey: ["current-user"] });
        setCurrentUser(userAccount);
        navigate(`/dashboard/${userAccount.$id}/`);
      } else {
        toastError(
          "Cannot submit the form. Please check the highlighted fields for errors and try again."
        );
      }
    } catch (error: any) {
      toastError(error.message);
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
