import { useState, ChangeEvent } from "react";
import { LOGIN_DEFAULT_VALUES_TYPE } from "../types";

export default function useForm(defaultValues:LOGIN_DEFAULT_VALUES_TYPE) {
  const [inputValues, setInputValues] = useState(defaultValues)

  const onInputValuesChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValues((prevValue) => ({
			...prevValue,
			[e.target.name]: e.target.value,
		}));
	};

  return {
    inputValues,
    onInputValuesChange
  }
}
