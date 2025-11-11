import { create } from "zustand";

interface IrrigationTimeState {
    duration: number;
    setDuration: (newDuration: number) => void;
}

export const useIrrigationTimeStore = create<IrrigationTimeState>((set) => ({
    duration: 5,
    setDuration: (newDuration) => {
        set({ duration: newDuration });
    },
}));
