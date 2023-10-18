/* Instruments */
import type { ReduxState } from "@/lib/redux";

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBudgetByMonthAndYear = (state: ReduxState) =>
  state.budgets.budgetByMonthAndYear;

export const selectBudgetStatus = (state: ReduxState) => state.budgets.status;

export const selectActiveMonth = (state: ReduxState) => state.budgets.month;
