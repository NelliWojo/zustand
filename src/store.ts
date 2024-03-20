import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0, // initial state
  increment: () => {
    // set({ count: 1 });
    set((state) => ({ count: state.count + 1 }));
  },
  incrementAsync: async () => {
    // const promise = await new Promise((resolve) => setTimeout(resolve, 1000));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    // set({ count: -1 });
    set((state) => ({ count: state.count - 1 }));
  },
}));
