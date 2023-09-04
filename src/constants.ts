import { signInWithOAuth } from "@appwrite/utils/userSession";

export const AUTHMETHODS = [
	{
		id: 1,
		name: "Google",
		icon: "./assets/google.svg",
		clickFunction: () => signInWithOAuth("google"),
	},
	{
		id: 2,
		name: "Facebook",
		icon: "./assets/facebook.svg",
		clickFunction: () => signInWithOAuth("facebook"),
	},
];

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
