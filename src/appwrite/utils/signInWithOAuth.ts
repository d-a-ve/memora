import { BASE_URL } from "@/config";

import { authAccount } from "../config";

export default function signInWithOAuth(providerName: "facebook" | "google") {
  authAccount.createOAuth2Session(
    providerName,
    `${BASE_URL}/dashboard/`,
    `${BASE_URL}/login`
  );
}
