import {
	GoogleAuthProvider,
  FacebookAuthProvider,
	AuthError,
	AuthErrorCodes,
	signInWithPopup,
} from "firebase/auth";
import { auth } from "./config";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider()

export function googleSignIn() {
	signInWithPopup(auth, googleProvider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential?.accessToken;
			const user = result.user;
			console.log("Signed In", user, token);
		})
		.catch((error: AuthError) => {
			console.log(error.message);
			let errorMessage;
			switch (error.code) {
				case AuthErrorCodes.EMAIL_EXISTS:
					errorMessage =
						"This email already exists. Please login or try again!";
					break;
				default:
					errorMessage = "Invalid!";
			}
			console.log(errorMessage);
		});
}

export function facebookSignIn() {
	signInWithPopup(auth, facebookProvider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = FacebookAuthProvider.credentialFromResult(result);
			const token = credential?.accessToken;
			const user = result.user;
			console.log("Signed In", user, token);
		})
		.catch((error: AuthError) => {
			console.log(error.message);
			let errorMessage;
			switch (error.code) {
				case AuthErrorCodes.EMAIL_EXISTS:
					errorMessage =
						"This email already exists. Please login or try again!";
					break;
				default:
					errorMessage = "Invalid!";
			}
      toast.error(error.code)
			console.log(errorMessage);
		});
}
