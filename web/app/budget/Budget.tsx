import { budgets } from "../mock/budgets";
import { Budget } from "../module";
import BudgetItemEdit from "./components/BudgetItemEdit";

export default function Budget() {
  return (
    <div className="flex flex-col gap-2">
      {budgets.map((el: Budget) => (
        <BudgetItemEdit key={el.budgetType.name} budget={el} />
      ))}
    </div>
  );
}
