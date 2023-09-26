import { useRentForm } from "@/app/hooks/useRentForm";
import { Heading } from "../Heading";
import { CategoryInput } from "../categories/CategoryInput";
import { steps } from "@/app/lib/steps";
import { categoryItems } from "@/app/lib/category-items";

export const StepOne = () => {
  const { formData, currentStep, setFormData } = useRentForm();

  const setCategory = (category) => {
    setFormData({ category: category });
  };

  return (
    <div>
      <Heading
        title={steps[currentStep - 1].title}
        subtitle={steps[currentStep - 1].description}
      />
      <div
        className="grid 
        grid-cols-1 
        md:grid-cols-2 
        gap-3 
        max-h-[50vh] 
        overflow-y-auto
        py-4 
        mt-2
      "
      >
        {categoryItems.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={() => setCategory(item.label)}
              selected={item.label === formData.category}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
