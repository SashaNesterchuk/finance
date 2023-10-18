/* Instruments */
import type { ReduxState } from "@/lib/redux";
import { getTransactionByMonthAndYear } from "./fetchTransactions";

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTransactions = (state: ReduxState) =>
  state.transactions.allTransactions;

export const selectTransactionsByMonthAndYear = (state: ReduxState) =>
  state.transactions.transactionByMonthAndYear;

export const selectTransactionsAllAmount = (state: ReduxState) =>
  state.transactions.transactionByMonthAndYear?.reduce(
    (acc, it) =>
      Number(it.amount) < 0 ? acc + Math.abs(Number(it.amount)) : acc,
    0
  );

export const selectTransactionsStatus = (state: ReduxState) =>
  state.transactions.status;
