import { ChangeEvent, FormEvent, useState } from "react";

import { updateUserName } from "@/appwrite/utils/userSession";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { FormWrapper } from "@/components/Form";
import { Input } from "@/components/Input/Input";
import useUserMutation from "@/hooks/useUserMutation";
import { useUserQuery } from "@/hooks/useUserQuery";
import { ErrorType } from "@/types";
import { toastError } from "@/utils/toastNotifs";
import { useQueryClient } from "@tanstack/react-query";

type UpdateCurrentUserNameMutationFn = { name: string };

export default function Settings() {
  const queryClient = useQueryClient();
  const { data: currentUser } = useUserQuery();
  const [isFormEditable, setIsFormEditable] = useState(false);
  const [nameInputValue, setNameInputValue] = useState(
    currentUser ? currentUser.name : ""
  );
  const {
    mutate: updateCurrentUserName,
    isPending: isCurrentUserNameUpdating,
  } = useUserMutation<unknown, ErrorType, UpdateCurrentUserNameMutationFn>({
    mutationFn: ({ name }) => updateUserName(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current-user"] });
      setIsFormEditable(false);
    },
    onError: () => {
      toastError("Something went wrong, please try again");
    },
  });

  const hasUserNameChanged = nameInputValue !== currentUser?.name;

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormEditable) {
      setIsFormEditable(true);
      return;
    }

    // there is really no need for this as the button will be disabled if there is no change but for the future
    if (!hasUserNameChanged) return;

    updateCurrentUserName({ name: nameInputValue });
  };

  return (
    <>
      <h1 className="text-fs-1 mb-1">Profile</h1>
      <p className="text-fs--2">Manage settings for your account</p>
      <div className="mt-8 relative before:w-full before:h-[1px] before:bg-gray-400 before:absolute before:-top-4">
        <div className="max-w-lg">
          <FormWrapper submitFunction={submitHandler}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name-input" className="input-label">
                Name
              </label>
              <Input
                inputType="text"
                inputValue={nameInputValue}
                disabled={!isFormEditable}
                labelFor="name"
                required={false}
                changeHandler={(e: ChangeEvent<HTMLInputElement>) =>
                  setNameInputValue(e.target.value)
                }
              />
            </div>
            <div className="flex gap-2">
              <PrimaryButton
                classname="disabled:bg-gray-400 disabled:cursor-not-allowed"
                buttonType={"submit"}
                buttonText={
                  isFormEditable
                    ? isCurrentUserNameUpdating
                      ? "Saving..."
                      : "Save Changes"
                    : "Edit"
                }
                disabled={isFormEditable && !hasUserNameChanged}
              />
              {isFormEditable && (
                <SecondaryButton
                  buttonType="button"
                  buttonText="Cancel"
                  clickFunction={() => setIsFormEditable(false)}
                />
              )}
            </div>
          </FormWrapper>
        </div>
      </div>
    </>
  );
}
