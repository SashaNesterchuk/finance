import { createElement } from "react";
import { Budget } from "@/app/module";
import { TbCurrencyZloty } from "react-icons/tb";

interface Props {
  budget: Budget;
}

export default function BudgetItemEdit(props: Props) {
  return (
    <div className="grid items-center grid-cols-2 border-2 border-sky-500 rounded-md p-4">
      <div className="flex items-center">
        {props.budget.amount}
        <TbCurrencyZloty />
      </div>
      <div className="flex gap-2 items-center">
        <div>{createElement(props.budget.budgetType.icon)}</div>
        <div>{props.budget.budgetType.name}</div>
      </div>
    </div>
  );
}
