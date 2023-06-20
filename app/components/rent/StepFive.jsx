import { useRentForm } from "@/app/hooks/useRentForm";
import { Heading } from "../Heading";
import { steps } from "@/app/lib/steps";
import { Input } from "../inputs/Input";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export const StepFive = () => {
  const { formData, currentStep, setFormData } = useRentForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      title: formData.title,
      description: formData.description,
    },
  });

  const titulo = watch("title");
  const descripcion = watch("description");

  useEffect(() => {
    setFormData({
      ...formData,
      title: titulo,
      description: descripcion,
    });
  }, [titulo, descripcion]);

  return (
    <div>
      <Heading
        title={steps[currentStep - 1].title}
        subtitle={steps[currentStep - 1].description}
      />
      <div className="py-4 flex flex-col gap-4">
        <Input
          label="Titulo"
          placeholder="Ej: Casa en la playa"
          id="title"
          errors={errors}
          register={register}
        />
        <Input
          label="Descripción"
          placeholder="Preciosa casa en la playa con vista al mar..."
          id="description"
          errors={errors}
          register={register}
        />
      </div>
    </div>
  );
};
