"use client";

import { useRentForm } from "@/app/hooks/useRentForm";
import { Heading } from "../Heading";
import { steps } from "@/app/lib/steps";
import { CountrySelect } from "../inputs/CountrySelect";
import { MapClient } from "../MapClient";
import { useMemo } from "react";
import dynamic from "next/dynamic";

export const StepTwo = () => {
  const { formData, currentStep, setFormData } = useRentForm();

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    []
  );

  return (
    <div>
      <Heading
        title={steps[currentStep - 1].title}
        subtitle={steps[currentStep - 1].description}
      />
      <div className="py-4 space-y-2">
        <CountrySelect />
        <Map />
      </div>
    </div>
  );
};
