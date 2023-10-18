/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { fetchTypesByYearAndMonthAsync, fetchTypesAsync } from "./thunks";
import { Type } from "@/app/module";

const initialState: TypesSliceState = {
  allTypes: undefined,
  typeByMonthAndYear: undefined,
  status: "idle",
};

export const typesSlice = createSlice({
  name: "types",
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
      .addCase(fetchTypesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTypesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.allTypes = action.payload;
      })
      .addCase(fetchTypesByYearAndMonthAsync.fulfilled, (state, action) => {
        state.typeByMonthAndYear = action.payload;
      });
  },
});

/* Types */
export interface TypesSliceState {
  allTypes?: Array<Type>;
  typeByMonthAndYear?: Array<Type>;
  status: "idle" | "loading" | "failed";
}