import { BASE_URL } from "@/config";

import { authAccount, uniqueId } from "../config";

export async function createUserSession(email: string, password: string) {
  try {
    await authAccount.createEmailSession(email, password);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function createUserAccount(
  email: string,
  password: string,
  name: string
) {
  try {
    await authAccount.create(uniqueId, email, password, name);
  } catch (error: any) {
    throw new Error(error);
  }
}
export async function getUserAccount() {
  try {
    const userAccount = await authAccount.get();

    return userAccount;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function deleteSession() {
  try {
    await authAccount.deleteSession("current");
  } catch (error: any) {
    throw new Error(error);
  }
}

export function signInWithOAuth(providerName: "facebook" | "google") {
  try {
    authAccount.createOAuth2Session(
      providerName,
      `${BASE_URL}/oauth`,
      `${BASE_URL}/login`
    );
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getOAuthSession() {
  try {
    const OAuthAccountSession = await authAccount.getSession("current");
    return OAuthAccountSession;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function updateUserName(name: string) {
  try {
    const userName = await authAccount.updateName(name);
    return userName;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function forgotPassword(
  email: string,
  redirectUrl = `${BASE_URL}/reset-password`
) {
  // try {
  const res = await authAccount.createRecovery(email, redirectUrl);
  return res;
  // } catch (error: any) {
  //   throw error;
  // }
}

export async function resetPassword(
  userId: string,
  secretKey: string,
  password: string
) {
  try {
    const res = await authAccount.updateRecovery(
      userId,
      secretKey,
      password,
      password
    );
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
}
