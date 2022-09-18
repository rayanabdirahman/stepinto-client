import { StateCreator } from "zustand";

export interface ISessionSlice {
  session: {
    user: any;
    accessToken: any;
  };
}

type SetState = StateCreator<
  ISessionSlice,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  ISessionSlice
>;

const createSessionSlice: SetState = (set, get) => ({
  session: {
    user: null,
    accessToken: null,
  },
});

export default createSessionSlice;
