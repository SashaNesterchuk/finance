/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import {
  fetchTransactionsAsync,
  fetchTransactionsByYearAndMonthAsync,
} from "./thunks";
import { Transaction } from "@/app/module";

const initialState: TransactionsSliceState = {
  allTransactions: undefined,
  transactionByMonthAndYear: undefined,
  status: "idle",
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransactionsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.allTransactions = action.payload;
      })
      .addCase(
        fetchTransactionsByYearAndMonthAsync.fulfilled,
        (state, action) => {
          state.transactionByMonthAndYear = action.payload;
        }
      );
  },
});

/* Types */
export interface TransactionsSliceState {
  allTransactions?: Array<Transaction>;
  transactionByMonthAndYear?: Array<Transaction>;
  status: "idle" | "loading" | "failed";
}
