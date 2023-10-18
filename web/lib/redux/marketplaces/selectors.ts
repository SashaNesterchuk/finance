/* Instruments */
import type { ReduxState } from "@/lib/redux";

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMarketplaces = (state: ReduxState) =>
  state.marketplaces.allMarketplaces;

export const selectMarketplacesByMonthAndYear = (state: ReduxState) =>
  state.marketplaces.marketplaceByMonthAndYear;

export const selectTransactionsStatus = (state: ReduxState) =>
  state.marketplaces.status;
