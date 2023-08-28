import React, { useState } from "react";
import AddBirthdayModal from "./AddBirthdayModal";
import ShowAddBirthday from "./ShowAddBirthday";

export default function AddBirthday() {
	const [isBirthdayModalOpen, setIsBirthdayModalOpen] = useState(false);
	return (
		<div>
			{isBirthdayModalOpen
      ? (
				<AddBirthdayModal setModalOpen={setIsBirthdayModalOpen} isModalOpen={isBirthdayModalOpen} />
			)
      : (
				<ShowAddBirthday setModalOpen={setIsBirthdayModalOpen} />
			)}
		</div>
	);
}
