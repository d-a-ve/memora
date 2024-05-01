import { Dispatch, SetStateAction } from "react";

import { PrimaryButton } from "@components/Button";

import { ShowMode } from "../../types";

export default function ShowAddBirthday({
  setModalOpen,
  showMode,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  showMode: ShowMode;
}) {
  switch (showMode.mode) {
    case "text":
      return (
        <p>
          {showMode.text}{" "}
          <button
            onClick={() => setModalOpen(true)}
            className="text-primary-500 cursor-pointer hover:underline"
          >
            {showMode.openModalText}
          </button>
        </p>
      );

    case "button":
      return (
        <div className="fixed right-8 bottom-8">
          <PrimaryButton
            buttonType="button"
            clickFunction={() => setModalOpen(true)}
            buttonText="+"
          />
        </div>
      );

    default:
      return <p>Unknown show mode props passed!!</p>;
  }
}
