"use client";

import { useSearchModal } from "@/app/hooks/useSearchModal";
import { useParams, useRouter } from "next/navigation";
import { Modal } from "./Modal";
import { useState } from "react";
import { useMemo } from "react";
import dynamic from "next/dynamic";

const steps = {
  ubicacion: 0,
  fecha: 1,
  info: 2,
};

export const SearchModal = () => {
  const router = useRouter();
  const params = useParams();
  const searchModal = useSearchModal();

  const [step, setStep] = useState(steps.ubicacion);
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={searchModal.onOpen}
      title="Filtros"
      actionLabel="Buscar"
    />
  );
};
