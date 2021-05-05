import { RegisterTypes } from "./idf";

export type ReducerActionType = {
  type?: string;
  payload?: RegisterTypes;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Dispacth<A, D> = ({ type: A, payload: D }) => void;

export type DispatchType = {
  dispatch?: Dispacth<string, any>;
};
