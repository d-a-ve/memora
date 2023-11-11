import { Dispatch, SetStateAction } from "react";

import useForm from "@hooks/useForm";

import { toastSuccess } from "@utils/toastNotifs";

import { PrimaryButton, SecondaryButton } from "@components/Button";
import { DatePickerComponent } from "@components/Date";
import { DateInput } from "@components/Date/DateInput";
import { FormWrapper } from "@components/Form";
import { InputWithLabel } from "@components/Input";
import { ModalLayout } from "@components/Layout";

export default function AddBirthdayModal({
  setModalOpen,
  isModalOpen,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}) {
  const { addBirthdaySubmit } = useForm();
  return (
    <>
      <ModalLayout isModalOpen={isModalOpen}>
        <div className="bg-white py-12 px-8 rounded-lg">
          <h2 className="mb-6 font-semibold text-fs-1">Add birthday </h2>
          <FormWrapper
            submitFunction={async (e) => {
              await addBirthdaySubmit(e);
              setModalOpen(false);
              toastSuccess("Yay, birthday has been added successfully!!");
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
              <PrimaryButton buttonText="Add Birthday" buttonType="submit" />
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
