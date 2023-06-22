"use client";

import { Button } from "./Button";
import { useRentModal } from "../hooks/useRentModal";

export const RentModalButton = () => {
  const rentModal = useRentModal();

  return (
    <Button
      onClick={() => {
        rentModal.onOpen();
      }}
    >
      Añadir propiedad
    </Button>
  );
};
