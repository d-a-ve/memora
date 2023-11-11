import { forwardRef, LegacyRef } from "react";

export const DateInput = forwardRef(function DateInput(
  {
    value,
    onClick,
    onChange,
    className,
    id,
  }: {
    value?: string;
    onClick?: () => void;
    className?: string;
    id: string;
    onChange?: () => void;
  },
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <input
      name="Date"
      className={className || "input"}
      value={value}
      onClick={onClick}
      onChange={onChange}
      type="text"
      id={id}
      required={true}
      ref={ref}
      // value={inputValue}
      // placeholder={placeHolder}
    />
  );
});

// export function DateInput({
// 	id,
// 	className,
// }: {
// 	id: string;
// 	className?: string;
// }) {
// 	return (
// 		<input
// 			name="Date"
// 			className={className || "input"}
// 			type="text"
// 			id={id}
// 			required={true}
// 			// value={inputValue}
// 			// placeholder={placeHolder}
// 		/>
// 	);
// }
