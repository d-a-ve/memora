import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAlWapiSv4k5lQILVrPVeEnnoxcDlcvCwc",
	authDomain: "memora-7a3fe.firebaseapp.com",
	projectId: "memora-7a3fe",
	storageBucket: "memora-7a3fe.appspot.com",
	messagingSenderId: "147701267379",
	appId: "1:147701267379:web:e0852a7a4c209e0e9029c6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
