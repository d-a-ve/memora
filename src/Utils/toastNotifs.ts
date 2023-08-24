import { toast } from "react-toastify";

export function toastError(errorMessage: string) {
	toast.error(errorMessage)
}
