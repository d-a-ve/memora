import Button from "@components/Button";

import { ShowMode } from "../../types";

export default function ShowAddBirthday({
  modal,
  showMode,
}: {
  modal: { open: () => void };
  showMode: ShowMode;
}) {
  switch (showMode.mode) {
    case "text":
      return (
        <p>
          {showMode.text}{" "}
          <button
            onClick={() => modal.open()}
            className="text-primary cursor-pointer hover:underline"
          >
            {showMode.openModalText}
          </button>
        </p>
      );

    case "button":
      return (
        <div className="fixed right-8 bottom-8">
          <Button size="sm" label="+" onClick={() => modal.open()} />
        </div>
      );

    default:
      return <p>Unknown show mode props passed!!</p>;
  }
}
