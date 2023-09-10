/* Instruments */
import { templateSlice } from "./templates";
import { transactionsSlice } from "./transactions";

export const reducer = {
  template: templateSlice.reducer,
  transactions: transactionsSlice.reducer,
};
