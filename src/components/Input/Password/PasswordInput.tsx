import { useState } from "react";

import getInputError from "@utils/getInputError";

import { InputWithEyeIcon } from "../InputWithEyeIcon";
import InputError from "./../InputError";
import { usePassword } from "./hooks/usePassword";
import { useSetPassword } from "./hooks/useSetPassword";

export function PasswordInput() {
  const [inputValue, setInputValue] = [usePassword(), useSetPassword()];
  const [touched, setTouched] = useState(false);
  const { isValid, errorMessage } = getInputError("password", inputValue);
  const displayError = touched && !isValid;

  return (
    <div className="flex flex-col gap-2">
      <label className="input-label" htmlFor="password-input">
        Password
      </label>
      <InputWithEyeIcon
        changeHandler={(e) => setInputValue(e.target.value)}
        blurHandler={() => setTouched(true)}
        labelFor="password"
        inputType="password"
        required={true}
        inputValue={inputValue}
        displayError={displayError}
      />
      {displayError && (
        <InputError name="password" errorMessage={errorMessage} />
      )}
    </div>
  );
}
