import { ISessionSlice } from "../slices/createSessionSlice";

export const getUser = (state: ISessionSlice) => state.session.user;
