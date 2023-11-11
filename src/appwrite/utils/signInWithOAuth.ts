import { authAccount } from "../config";

export default function signInWithOAuth(providerName: "facebook" | "google") {
  authAccount.createOAuth2Session(
    providerName,
    "http://localhost:5173/dashboard/",
    "http://localhost:5173/login"
  );
}
