import { useRentForm } from "@/app/hooks/useRentForm";
import { Heading } from "../Heading";
import { steps } from "@/app/lib/steps";
import { Input } from "../inputs/Input";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export const StepSix = () => {
  const { formData, currentStep, setFormData } = useRentForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      price: formData.price,
    },
  });

  const price = watch("price");

  useEffect(() => {
    setFormData({
      ...formData,
      price: Number(price),
    });
  }, [price]);

  return (
    <div>
      <Heading
        title={steps[currentStep - 1].title}
        subtitle={steps[currentStep - 1].description}
      />
      <div className="py-4">
        <Input
          id="price"
          label="Precio (€)"
          placeholder="Precio por noche"
          errors={errors}
          register={register}
          rules={{
            required: "El precio es requerido",
            min: {
              value: 1,
              message: "El precio debe ser mayor a 0",
            },
          }}
          min={1}
          type="number"
        />
      </div>
      <h1 className="text-neutral-500 text-sm">
        *El precio establecido es por cada noche en el alojamiento
      </h1>
    </div>
  );
};
