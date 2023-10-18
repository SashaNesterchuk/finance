/* Instruments */
import { templateSlice } from "./templates";
import { transactionsSlice } from "./transactions";
import { budgetSlice } from "./budget";
import { marketplacesSlice } from "./marketplaces";
import { typesSlice } from "./types";

export const reducer = {
  template: templateSlice.reducer,
  transactions: transactionsSlice.reducer,
  budgets: budgetSlice.reducer,
  marketplaces: marketplacesSlice.reducer,
  types: typesSlice.reducer,
};
