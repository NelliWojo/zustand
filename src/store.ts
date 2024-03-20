import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0, // initial state
  increment: () => {
    // set({ count: 1 });
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    // set({ count: -1 });
    set((state) => ({ count: state.count - 1 }));
  },
}));
