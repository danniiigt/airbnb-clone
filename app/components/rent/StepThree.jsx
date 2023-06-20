import { useRentForm } from "@/app/hooks/useRentForm";
import { Heading } from "../Heading";
import { steps } from "@/app/lib/steps";
import { Counter } from "../inputs/Counter";

export const StepThree = () => {
  const {
    formData,
    currentStep,
    setFormData,
    onIncrementGuestCount,
    onDecrementGuestCount,
    onIncrementRoomCount,
    onDecrementRoomCount,
    onIncrementBathRoomCount,
    onDecrementBathRoomCount,
  } = useRentForm();

  return (
    <div>
      <Heading
        title={steps[currentStep - 1].title}
        subtitle={steps[currentStep - 1].description}
      />
      <div className="py-8 space-y-6">
        <Counter
          title="Numero de invitados"
          subtitle="¿Cuántas personas pueden hospedarse?"
          value={formData.guestCount}
          onIncrement={onIncrementGuestCount}
          onDecrement={formData.guestCount > 1 ? onDecrementGuestCount : null}
        />
        <hr />
        <Counter
          title="Numero de habitaciones"
          subtitle="¿Cuántas habitaciones tiene tu hospedaje?"
          value={formData.roomCount}
          onIncrement={onIncrementRoomCount}
          onDecrement={formData.roomCount > 1 ? onDecrementRoomCount : null}
        />
        <hr />
        <Counter
          title="Numero de baños"
          subtitle="¿Cuántos baños tiene tu hospedaje?"
          value={formData.bathRoomCount}
          onIncrement={onIncrementBathRoomCount}
          onDecrement={
            formData.bathRoomCount > 1 ? onDecrementBathRoomCount : null
          }
        />
      </div>
    </div>
  );
};
