import { FormEvent, useEffect, useRef } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { getDateFromSlashSeparatedString } from "helpers/getDate";
import getValidFormData from "helpers/getValidFormData";
import { toastSuccess } from "helpers/toastNotifs";

import useBodyOverflow from "@hooks/useBodyOverflow";
import { useUserQuery } from "@hooks/useUserQuery";

import { uniqueId } from "@appwrite/config";
import { createDocInBirthdaysCol } from "@appwrite/utils/database";

import { ErrorType } from "@myTypes/index";

import Button from "@components/Button";
import { CustomDateInput } from "@components/Date";
import { FormWrapper } from "@components/Form";
import { InputWithLabel } from "@components/Input";
import { DateInput } from "@components/Input/DateInput";
import { ModalLayout } from "@components/Layout";

import useBirthdayMutation from "../../hooks/useBirthdayMutation";

type MutationFnType = {
  name: [string, FormDataEntryValue];
  birthdayDate: [string, FormDataEntryValue];
};

type BirthdaysDataType = Awaited<ReturnType<typeof createDocInBirthdaysCol>>;

export default function AddBirthdayModal({
  modal,
}: {
  modal: {
    isOpen: boolean;
    open: () => void;
    close: () => void;
  };
}) {
  const { data: currentUser } = useUserQuery();
  const query = useQueryClient();
  const containerRef = useRef<HTMLDivElement>(null);
  const { resetBodyOverflow } = useBodyOverflow();

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        modal.isOpen
      ) {
        modal.close();
        resetBodyOverflow();
      }
    };

    document.addEventListener("pointerup", handleClickOutside);
    return () => {
      document.removeEventListener("pointerup", handleClickOutside);
    };
  }, [modal.isOpen, resetBodyOverflow]);

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
        modal.close();
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
    <ModalLayout isModalOpen={modal.isOpen}>
      <div className="bg-white py-12 px-8 rounded-lg" ref={containerRef}>
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
            <DateInput customInput={<CustomDateInput id="birthdayDate" />} />
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-1">
            <Button
              isLoading={isBirthdayAdding}
              label="Add Birthday"
              type="submit"
            />
            <Button
              intent="secondary"
              label="Cancel"
              onClick={() => modal.close()}
            />
          </div>
        </FormWrapper>
      </div>
    </ModalLayout>
  );
}
