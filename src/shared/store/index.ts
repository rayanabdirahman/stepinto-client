import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import createSessionSlice, { ISessionSlice } from "./slices/createSessionSlice";

type IStore = ISessionSlice;

const useStore = create<IStore>()(
  devtools(
    persist((...a) => ({
      ...createSessionSlice(...a),
    }))
  )
);

export default useStore;
