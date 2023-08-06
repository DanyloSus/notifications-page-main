import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CountState {
  num: number;
  decrease: () => void;
  toZero: () => void;
}

const useCountState = create<CountState>()(
  devtools((set) => ({
    num: 3,
    decrease: () => {
      set((state) => ({ num: state.num - 1 }));
    },
    toZero: () => {
      set(() => ({ num: 0 }));
    },
  }))
);

export default useCountState;
