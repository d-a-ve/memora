import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { uniqueId } from "@appwrite/config";
import { createDocInBirthdaysCol } from "@appwrite/utils/database";
import {
  createUserAccount,
  createUserSession,
  getUserAccount,
} from "@appwrite/utils/userSession";

import { getDateFromSlashSeparatedString } from "@utils/getDate";
import getValidFormData from "@utils/getValidFormData";
import { toastError } from "@utils/toastNotifs";

import useAuth from "./useAuth";
import useAuthApi from "./useAuthApi";

export default function useForm() {
  const { setCurrentUser } = useAuthApi();
  const { currentUser } = useAuth();

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
        navigate(`/dashboard/${userAccount.$id}?query_limit=15`);
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
        navigate(`/dashboard/${userAccount.$id}`);
      } else {
        toastError(
          "Cannot submit the form. Please check the highlighted fields for errors and try again."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addBirthdaySubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = getValidFormData(e);
    const [name, birthdayDate] = formData;
    try {
      console.log(currentUser?.email);

      const birthdayDoc = await createDocInBirthdaysCol(uniqueId, {
        user_id: currentUser?.$id,
        person_name: name[1] as string,
        person_birthday: getDateFromSlashSeparatedString(
          birthdayDate[1] as string
        ),
        user_email: currentUser?.email,
      });
      console.log(birthdayDoc);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    signupSubmit,
    loginSubmit,
    addBirthdaySubmit,
  };
}
