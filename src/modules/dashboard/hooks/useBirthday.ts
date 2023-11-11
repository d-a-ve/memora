import { useContext } from "react";
import { BirthdaysContext } from "../context/BirthdaysContext";

export default function useBirthday() {
	const birthdays = useContext(BirthdaysContext);

	return { birthdays };
}
