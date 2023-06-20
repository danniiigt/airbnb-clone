import { useRentForm } from "@/app/hooks/useRentForm";
import { Heading } from "../Heading";
import { steps } from "@/app/lib/steps";
import { ImageUpload } from "../inputs/ImageUpload";

export const StepFour = () => {
  const { formData, currentStep, setFormData } = useRentForm();

  const handleUpload = (imageSrc) => {
    setFormData({ imageSrc });
  };

  return (
    <div>
      <Heading
        title={steps[currentStep - 1].title}
        subtitle={steps[currentStep - 1].description}
      />
      <div className="py-4">
        <ImageUpload onChange={handleUpload} value={formData?.imageSrc} />
      </div>
    </div>
  );
};
