import { selectTransactionsAllAmount, useSelector } from "@/lib/redux";
import { Budget } from "../module";
import { monthNames } from "../use/useMonths";
import {
  fetchBudgetByMonthAndYearAsync,
  selectActiveMonth,
  selectBudgetByMonthAndYear,
} from "@/lib/redux/budget";
import { TbCurrencyZloty } from "react-icons/tb";

export default function Budget() {
  const month = useSelector(selectActiveMonth);
  const transactionsAllAmount = useSelector(selectTransactionsAllAmount);
  const fetchBudgetByMonthAndYear = useSelector(selectBudgetByMonthAndYear);

  return (
    <div>
      <div className="text-center mb-4 text-2xl font-bold">
        Budget on {monthNames[month.getMonth()]}
      </div>

      <div className="flex flex-col gap-2">
        {/* {budgets.map((el: Budget) => (
          <BudgetItemEdit key={el.budgetType.name} budget={el} />
        ))} */}
      </div>

      <div className="flex mt-6 justify-between font-bold text-lg px-2">
        <div className="text-red-500 flex items-center pl-2">
          {transactionsAllAmount}
          <TbCurrencyZloty />
        </div>

        <div className="flex items-center">
          AMOUNT: 4000
          <TbCurrencyZloty />
        </div>
      </div>

      <div className="pl-4 mt-2 text-green-500 flex items-center font-bold text-lg">
        5000
        <TbCurrencyZloty />
        <span className="text-base font-normal">- Extra</span>
      </div>
    </div>
  );
}
