import { Dispatch, FormEvent, SetStateAction } from "react";

import { uniqueId } from "@/appwrite/config";
import { createDocInBirthdaysCol } from "@/appwrite/utils/database";
import { useUserQuery } from "@/hooks/useUserQuery";
import { ErrorType } from "@/types";
import { getDateFromSlashSeparatedString } from "@/utils/getDate";
import getValidFormData from "@/utils/getValidFormData";
import { useQueryClient } from "@tanstack/react-query";

import { toastSuccess } from "@utils/toastNotifs";

import { PrimaryButton, SecondaryButton } from "@components/Button";
import { DatePickerComponent } from "@components/Date";
import { DateInput } from "@components/Date/DateInput";
import { FormWrapper } from "@components/Form";
import { InputWithLabel } from "@components/Input";
import { ModalLayout } from "@components/Layout";

import useBirthdayMutation from "../../hooks/useBirthdayMutation";

type MutationFnType = {
  name: [string, FormDataEntryValue];
  birthdayDate: [string, FormDataEntryValue];
};

type BirthdaysDataType = Awaited<ReturnType<typeof createDocInBirthdaysCol>>;

export default function AddBirthdayModal({
  setModalOpen,
  isModalOpen,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}) {
  const { data: currentUser } = useUserQuery();
  const query = useQueryClient();

  const { mutate: addBirthday, isPending: isBirthdayAdding } =
    useBirthdayMutation<BirthdaysDataType, ErrorType, MutationFnType>({
      mutationFn: ({ name, birthdayDate }) =>
        createDocInBirthdaysCol(uniqueId, {
          user_id: currentUser?.$id,
          person_name: name[1] as string,
          person_birthday: getDateFromSlashSeparatedString(
            birthdayDate[1] as string
          ),
          user_email: currentUser?.email,
        }),
      onSuccess: () => {
        query.invalidateQueries({ queryKey: ["birthdays", currentUser?.$id] });
        setModalOpen(false);
        toastSuccess("Yay, birthday has been added successfully!!");
      },
    });

  const addBirthdaySubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = getValidFormData(e);
    const [name, birthdayDate] = formData;
    addBirthday({ name, birthdayDate });
  };

  return (
    <>
      <ModalLayout isModalOpen={isModalOpen}>
        <div className="bg-white py-12 px-8 rounded-lg">
          <h2 className="mb-6 font-semibold text-fs-1">Add birthday </h2>
          <FormWrapper
            submitFunction={async (e) => {
              addBirthdaySubmit(e);
            }}
          >
            <InputWithLabel
              labelText="Name"
              labelFor="bday name"
              inputType="text"
              required={true}
              placeHolder="John Doe"
            />
            <div className="flex flex-col gap-2">
              <label className="input-label" htmlFor="birthdayDate">
                Select birthday
              </label>
              <DatePickerComponent
                inline={false}
                isReadOnly={false}
                customInput={<DateInput id="birthdayDate" />}
              />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-1">
              <PrimaryButton
                buttonText={
                  isBirthdayAdding ? "Adding Birthday..." : "Add Birthday"
                }
                buttonType="submit"
              />
              <SecondaryButton
                buttonText="Cancel"
                clickFunction={() => setModalOpen(false)}
                buttonType="button"
              />
            </div>
          </FormWrapper>
        </div>
      </ModalLayout>
    </>
  );
}
