"use client";

import { useRentForm } from "@/app/hooks/useRentForm";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { StepFive } from "./StepFive";
import { StepSix } from "./StepSix";

export const RentBodyContent = () => {
  const { currentStep } = useRentForm();

  const getBodyContent = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      case 5:
        return <StepFive />;
      case 6:
        return <StepSix />;

      default:
        return <StepOne />;
    }
  };

  return getBodyContent();
};
