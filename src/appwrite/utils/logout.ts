import { Dispatch, SetStateAction } from "react";

import { toastError } from "@utils/toastNotifs";

import { UserType } from "../../types";
import { authAccount } from "../config";

export default async function logout(
  setCurrentUser: Dispatch<SetStateAction<UserType | undefined>>,
  navigateFunction: () => void
) {
  try {
    await authAccount.deleteSession("current");
    setCurrentUser(undefined);
    navigateFunction();
  } catch (error) {
    toastError("Something went wrong. Could not log out!");
  }
}
