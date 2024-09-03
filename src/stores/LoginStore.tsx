import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type LoginStore = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

export const useLoginStore = create<LoginStore, [["zustand/persist", unknown]]>(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false }),
    }),
    {
      name: "login-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
