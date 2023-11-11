import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import { birthdayDataType } from "../../../types";

export const BirthdaysContext = createContext(
  {} as birthdayDataType | undefined
);
export const BirthdaysSetterContext = createContext<
  Dispatch<SetStateAction<birthdayDataType | undefined>>
>(
  undefined as unknown as Dispatch<SetStateAction<birthdayDataType | undefined>>
);

export default function BirthdaysContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [birthdays, setBirthdays] = useState<birthdayDataType>();

  return (
    <BirthdaysContext.Provider value={birthdays}>
      <BirthdaysSetterContext.Provider value={setBirthdays}>
        {children}
      </BirthdaysSetterContext.Provider>
    </BirthdaysContext.Provider>
  );
}
