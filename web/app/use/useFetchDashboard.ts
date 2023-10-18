import { useEffect } from "react";
import {
  fetchTransactionsByYearAndMonthAsync,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import {
  fetchBudgetByMonthAndYearAsync,
  selectActiveMonth,
} from "@/lib/redux/budget";
import { fetchMarketplacesAsync } from "@/lib/redux/marketplaces";
import { fetchTypesAsync } from "@/lib/redux/types";

export default function useFetchDashboard() {
  const month = useSelector(selectActiveMonth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarketplacesAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTypesAsync());
  }, [dispatch]);

  useEffect(() => {
    const correctMonth = month.getMonth() + 1;

    dispatch(
      fetchTransactionsByYearAndMonthAsync({
        month: correctMonth.toString(),
        year: "2023",
      })
    );

    dispatch(
      fetchBudgetByMonthAndYearAsync({
        month: correctMonth.toString(),
        year: "2023",
      })
    );
  }, [month, dispatch]);
}
