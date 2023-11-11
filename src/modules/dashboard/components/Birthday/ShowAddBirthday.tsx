import { Dispatch, SetStateAction } from "react";

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
