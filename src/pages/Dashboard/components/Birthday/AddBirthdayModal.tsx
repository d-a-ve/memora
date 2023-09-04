import { Dispatch, SetStateAction } from "react";
import { createDocInBirthdaysCol } from "@appwrite/utils/database";
import { uniqueId } from "@appwrite/config";
import getDateFromString from "@utils/getDateFromString";
import { PrimaryButton, SecondaryButton } from "@components/Button";
import { FormWrapper } from "@components/Form";
import { InputWithLabel } from "@components/Input";
import { DatePickerComponent } from "@components/Date";
import getValidFormData from "@utils/getValidFormData";
import { DateInput } from "@components/Date/DateInput";

export default function AddBirthdayModal({
	setModalOpen,
	isModalOpen,
}: {
	setModalOpen: Dispatch<SetStateAction<boolean>>;
	isModalOpen: boolean;
}) {
	return (
		<>
			<div className={`fixed inset-0 ${isModalOpen ? "opaque" : ""}`}></div>
			<div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[576px] mx-4 z-10 bg-white py-12 px-8 rounded-lg">
				<h2 className="mb-6 font-semibold text-fs-1">Add birthday </h2>
				<FormWrapper
					submitFunction={async (e) => {
						e.preventDefault();
						const { formData } = getValidFormData(e);
						const [name, birthdayDate] = formData;
						try {
							const birthdayDoc = await createDocInBirthdaysCol(uniqueId, {
								user_id: "64e447cebb60d0ff0bd7",
								person_name: name[1] as string,
								person_birthday: getDateFromString(birthdayDate[1] as string)
							});
							console.log(birthdayDoc);
						} catch (error) {
							console.log(error);
						}
						console.log("Form Submitted", formData);
					}}>
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
					<div className="mt-2 flex items-center justify-end gap-2 sm:flex-col-reverse">
						<SecondaryButton
							buttonText="Cancel"
							clickFunction={() => setModalOpen(false)}
							buttonType="button"
						/>
						<PrimaryButton buttonText="Add Birthday" buttonType="submit" />
					</div>
				</FormWrapper>
			</div>
		</>
	);
}
