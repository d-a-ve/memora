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
      "http://localhost:5173/oauth",
      "http://localhost:5173/login"
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
