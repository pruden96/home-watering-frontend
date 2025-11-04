import { create } from "zustand";

interface SideMenuState {
    displayMenu: boolean;
    toggleMenu: () => void;
}

export const useSideMenu = create<SideMenuState>((set) => ({
    displayMenu: false,
    toggleMenu: () => set((state) => ({ displayMenu: !state.displayMenu })),
}));
