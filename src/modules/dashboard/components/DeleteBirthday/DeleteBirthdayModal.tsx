import { useEffect, useRef } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { toastSuccess } from "helpers/toastNotifs";

import useBodyOverflow from "@hooks/useBodyOverflow";
import { useUserQuery } from "@hooks/useUserQuery";

import { deleteBirthdayDocument } from "@appwrite/utils/database";

import Button from "@components/Button";
import { ModalLayout } from "@components/Layout";

import useBirthdayMutation from "../../hooks/useBirthdayMutation";

type DeleteBirthdayModalProps = {
  docId: string;
  modal: {
    isOpen: boolean;
    close: () => void;
  };
};
export default function DeleteBirthdayModal({
  modal,
  docId,
}: DeleteBirthdayModalProps) {
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

  const { mutate: handleDelete, isPending: isBirthdayDeleting } =
    useBirthdayMutation({
      mutationFn: () => deleteBirthdayDocument(docId),
      onSuccess: () => {
        query.invalidateQueries({ queryKey: ["birthdays", currentUser?.$id] });
        modal.close();
        toastSuccess("Birthday has been deleted successfully!!");
      },
    });

  return (
    <ModalLayout isModalOpen={modal.isOpen}>
      <div className="bg-white py-12 px-8 rounded-lg" ref={containerRef}>
        <h2 className="mb-6 font-semibold text-fs-1">Delete Birthday</h2>
        <p>
          Are you sure you want to delete this birthday? This action cannot be
          undone.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-1">
          <Button
            intent="danger"
            isLoading={isBirthdayDeleting}
            label="Delete"
            onClick={() => handleDelete()}
          />
          <Button
            intent="secondary"
            label="Cancel"
            onClick={() => modal.close()}
          />
        </div>
      </div>
    </ModalLayout>
  );
}
