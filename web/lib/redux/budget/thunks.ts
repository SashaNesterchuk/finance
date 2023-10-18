/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchBudgetByMonthAndYear } from "./fetchBudget";

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchBudgetByMonthAndYearAsync = createAppAsyncThunk(
  "budget/fetchBudgetByMonthAndYearAsync",
  async ({ month, year }: { month: string; year: string }) => {
    const response = await fetchBudgetByMonthAndYear(month, year);

    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);
