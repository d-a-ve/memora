import { Dispatch, SetStateAction } from "react";

const ok = {
  userId: "I 67yugc6c7ecgbc",
  birthdays: ["John", "Doe", "testing"],
};
const dates = [
  {
    userId: "I 67yugc6c7ecgbc",
    birthdays: ["John", "Doe", "testing"],
  },
  {},
];

export default function ShowAddBirthday({
  setModalOpen,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed right-8 bottom-8">
      <button
        type="button"
        title="Add Birthday"
        className="btn-primary"
        onClick={() => setModalOpen(true)}
      >
        +
      </button>
    </div>
  );
}
