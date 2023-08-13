import { InputPropsType } from "./types";

export function Input({
	changeHandler,
	blurHandler,
	labelFor,
	inputType,
	required,
	inputValue,
	placeHolder,
  displayError
}: InputPropsType) {
	return (
		<input
			onChange={changeHandler}
			onBlur={blurHandler}
			name={labelFor}
			className="input"
			type={inputType}
			id={`${labelFor}-input`}
			required={required}
			value={inputValue}
			placeholder={placeHolder}
			aria-describedby={displayError ? `${labelFor}-error` : undefined}
		/>
	);
}
