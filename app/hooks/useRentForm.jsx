import { create } from "zustand";

const initialData = {
  category: "",
  location: null,
  guestCount: 1,
  roomCount: 1,
  bathRoomCount: 1,
  imageSrc: null,
  price: 1,
  title: "",
  description: "",
};

export const useRentForm = create((set) => ({
  formData: initialData,
  currentStep: 1,

  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  setCurrentStep: (step) => set({ currentStep: step }),
  resetFormData: () => set({ formData: initialData }),
  onIncrementStep: () =>
    set((state) => ({ currentStep: state.currentStep + 1 })),
  onDecrementStep: () =>
    set((state) => ({ currentStep: state.currentStep - 1 })),
  onIncrementGuestCount: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        guestCount: state.formData.guestCount + 1,
      },
    })),
  onDecrementGuestCount: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        guestCount: state.formData.guestCount - 1,
      },
    })),
  onIncrementRoomCount: () =>
    set((state) => ({
      formData: { ...state.formData, roomCount: state.formData.roomCount + 1 },
    })),
  onDecrementRoomCount: () =>
    set((state) => ({
      formData: { ...state.formData, roomCount: state.formData.roomCount - 1 },
    })),
  onIncrementBathRoomCount: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        bathRoomCount: state.formData.bathRoomCount + 1,
      },
    })),
  onDecrementBathRoomCount: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        bathRoomCount: state.formData.bathRoomCount - 1,
      },
    })),
  onResetRentForm: () => set({ formData: initialData, currentStep: 1 }),
}));
