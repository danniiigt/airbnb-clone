"use client";

import { useRentForm } from "@/app/hooks/useRentForm";
import { Heading } from "../Heading";
import { steps } from "@/app/lib/steps";
import { CountrySelect } from "../inputs/CountrySelect";
import { MapClient } from "../MapClient";

export const StepTwo = () => {
  const { formData, currentStep, setFormData } = useRentForm();

  return (
    <div>
      <Heading
        title={steps[currentStep - 1].title}
        subtitle={steps[currentStep - 1].description}
      />
      <div className="py-4 space-y-2">
        <CountrySelect />
        <MapClient />
      </div>
    </div>
  );
};
