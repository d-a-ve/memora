import { useContext } from "react";

import { BirthdaysSetterContext } from "../context/BirthdaysContext";

export default function useBirthdayApi() {
  const setBirthdays = useContext(BirthdaysSetterContext);

  return { setBirthdays };
}
