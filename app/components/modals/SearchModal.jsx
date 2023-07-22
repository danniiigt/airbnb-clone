"use client";

import { useSearchModal } from "@/app/hooks/useSearchModal";
import { useParams, useRouter } from "next/navigation";
import { Modal } from "./Modal";
import { useCallback, useState } from "react";
import { useMemo } from "react";
import { formatISO } from "date-fns";
import qs from "query-string";
import dynamic from "next/dynamic";
import { Heading } from "../Heading";
import { CountrySelect } from "../inputs/CountrySelect";
import { Calendar } from "../inputs/Calendar";
import { Counter } from "../inputs/Counter";

const steps = {
  ubicacion: 0,
  fecha: 1,
  info: 2,
};

export const SearchModal = () => {
  const router = useRouter();
  const params = useParams();
  const searchModal = useSearchModal();

  const [location, setLocation] = useState();
  const [step, setStep] = useState(steps.ubicacion);
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    [location]
  );

  const onBack = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    if (step !== steps.info) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    setStep(steps.ubicacion);
    searchModal.onClose();
    router.push(url);

    // CLEAR FORM
    setLocation(undefined);
    setGuestCount(1);
    setRoomCount(1);
    setBathroomCount(1);
    setDateRange({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
  }, [
    step,
    searchModal,
    location,
    router,
    guestCount,
    roomCount,
    bathroomCount,
    dateRange,
    onNext,
    params,
  ]);

  const actionLabel = useMemo(() => {
    if (step === steps.info) return "Buscar";

    return "Siguiente";
  }, [step]);

  const secondaryLabel = useMemo(() => {
    if (step === steps.ubicacion) return undefined;

    return "Volver";
  }, []);

  let bodyContent = (
    <div className="flex flex-col space-y-4">
      <Heading
        title="¿Dónde vas a viajar?"
        subtitle="Busca la ciudad o el país donde quieres viajar"
      />

      <CountrySelect
        value={location}
        onChange={(value) => {
          console.log(value);
          setLocation(value);
        }}
      />

      <Map center={location?.latlng} />
    </div>
  );

  if (step === steps.fecha) {
    bodyContent = (
      <div className="flex flex-col space-y-4">
        <Heading
          title="¿Cuándo quieres viajar?"
          subtitle="Busca la fecha que más te convenga"
        />

        <div className="border rounded-md p-1">
          <Calendar
            date={dateRange}
            onChange={(value) => setDateRange(value.selection)}
          />
        </div>
      </div>
    );
  }

  if (step === steps.info) {
    bodyContent = (
      <div className="flex flex-col space-y-6">
        <Heading
          title="Más información"
          subtitle="Encuentra tu alojamiento ideal"
        />

        <div className="space-y-6">
          <Counter
            title="Huéspedes"
            subtitle="¿Cuántas personas se hospedarán?"
            value={guestCount}
            onDecrement={() => {
              if (guestCount === 1) return;
              setGuestCount((prev) => prev - 1);
            }}
            onIncrement={() => setGuestCount((prev) => prev + 1)}
          />
          <Counter
            title="Habitaciones"
            subtitle="¿Cuántas habitaciones necesitas?"
            value={roomCount}
            onDecrement={() => {
              if (roomCount === 1) return;
              setRoomCount((prev) => prev - 1);
            }}
            onIncrement={() => setRoomCount((prev) => prev + 1)}
          />
          <Counter
            title="Baños"
            subtitle="¿Cuántos baños necesitas?"
            value={bathroomCount}
            onDecrement={() => {
              if (bathroomCount === 1) return;
              setBathroomCount((prev) => prev - 1);
            }}
            onIncrement={() => setBathroomCount((prev) => prev + 1)}
          />
        </div>
      </div>
    );
  }

  return (
    <Modal
      title="Filtros"
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={onSubmit}
      actionLabel={actionLabel}
      secondaryLabel={secondaryLabel}
      secondaryAction={step === steps.ubicacion ? undefined : onBack}
      onSecondary={onBack}
      body={bodyContent}
    />
  );
};
