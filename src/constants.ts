import { googleSignIn, facebookSignIn } from "./firebase/auth";

export const AUTHMETHODS = [
  {
    id: 1,
    name: "Google",
    icon: "./assets/google.svg",
		onClick: () => googleSignIn()
  },
  {
    id: 2,
    name: "Facebook",
    icon: "./assets/facebook.svg",
		onClick: () => facebookSignIn()
  }
]

export const LOGIN_DEFAULT_VALUES = {
	email: "",
	password: "",
};

export const calenderMonths = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
