"use client";

import { useMemo } from "react";
import { Modal } from "./Modal";
import { useRentModal } from "@/app/hooks/useRentModal";
import { useRentForm } from "@/app/hooks/useRentForm";
import { steps } from "@/app/lib/steps";
import { RentBodyContent } from "../rent/RentBodyContent";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export const RentModal = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const rentModal = useRentModal();
  const {
    currentStep,
    onIncrementStep,
    onDecrementStep,
    formData,
    onResetRentForm,
  } = useRentForm();

  const actionLabel = useMemo(() => {
    if (currentStep === 1) return "Continuar";
    if (currentStep === steps.length) return "Publicar";
    return "Siguiente";
  }, [currentStep]);

  const secondaryActionLabel = useMemo(() => {
    if (currentStep === 1) return "Cancelar";
    return "Anterior";
  }, [currentStep]);

  const handleSubmit = () => {
    if (currentStep === steps.length) return handleCreateRent();
    onIncrementStep();
  };

  const handleCreateRent = async () => {
    setLoading(true);

    try {
      const res = await axios.post("/api/listings", { ...formData });
      if (res.status === 200) {
        toast.success("Alojamiento publicado");
        rentModal.onClose();
        onResetRentForm();
        router.refresh();
      }
    } catch (error) {
      toast.error(
        "Error al publicar el alojamiento. Revisa que todos los campos estén completos y vuelve a intentarlo."
      );
    }

    setLoading(false);
  };

  const handleSecondaryAction = () => {
    if (currentStep === 1) return rentModal.onClose();
    onDecrementStep();
  };

  return (
    <Modal
      title={"Aloja tu espacio"}
      actionLabel={actionLabel}
      secondaryLabel={secondaryActionLabel}
      onSubmit={handleSubmit}
      secondaryAction={handleSecondaryAction}
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      body={<RentBodyContent />}
      disabled={loading}
      loading={loading}
    />
  );
};
