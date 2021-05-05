import { ReducerActionType } from "../types/globals";

export class UnreachableCaseError extends Error {
  constructor(val: ReducerActionType) {
    super(`Unreachable case: ${JSON.stringify(val)}`);
  }
}
