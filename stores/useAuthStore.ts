import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  email: string;
};

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (userData: User) => set({ isAuthenticated: true, user: userData }),
      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    { name: "auth-store" }
  )
);
