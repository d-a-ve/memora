import { PasswordInput } from "./PasswordInput";
import { ConfirmPasswordInput } from "./ConfirmPasswordInput";
import { PasswordProvider } from "./PasswordProvider";

export function Password() {
	return (
		<PasswordProvider>
			<PasswordInput />
			<ConfirmPasswordInput />
		</PasswordProvider>
	);
}
