import { InputPropsType } from "./types";

export function Input({
  changeHandler,
  blurHandler,
  labelFor,
  inputType,
  required,
  inputValue,
  placeHolder,
  displayError,
  className,
  disabled,
  inputRef,
}: InputPropsType) {
  return (
    <input
      onChange={changeHandler}
      onBlur={blurHandler}
      name={labelFor}
      className={className || "input"}
      type={inputType}
      id={`${labelFor}-input`}
      required={required}
      disabled={disabled}
      value={inputValue}
      placeholder={placeHolder}
      ref={inputRef}
      aria-describedby={displayError ? `${labelFor}-error` : undefined}
    />
  );
}
