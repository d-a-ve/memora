import { InputFieldType } from "../../types";

export const SIGNUP_INPUT_FIELDS: InputFieldType[] = [
  {
    id: 1,
    labelText: "Name",
    labelFor: "name",
    inputType: "text",
    isRequired: true,
    placeHolder: "John Doe",
  },
  {
    id: 2,
    labelText: "Email",
    labelFor: "email",
    inputType: "email",
    isRequired: true,
    placeHolder: "example@gmail.com",
  },
];
