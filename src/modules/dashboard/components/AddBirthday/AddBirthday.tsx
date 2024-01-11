import { useState } from "react";

import { ShowMode } from "../../types";
import AddBirthdayModal from "./AddBirthdayModal";
import ShowAddBirthday from "./ShowAddBirthday";

export default function AddBirthday({ showMode }: { showMode: ShowMode }) {
  const [isBirthdayModalOpen, setIsBirthdayModalOpen] = useState(false);
  return (
    <div>
      {isBirthdayModalOpen ? (
        <AddBirthdayModal
          setModalOpen={setIsBirthdayModalOpen}
          isModalOpen={isBirthdayModalOpen}
        />
      ) : (
        <ShowAddBirthday
          showMode={showMode}
          setModalOpen={setIsBirthdayModalOpen}
        />
      )}
    </div>
  );
}
