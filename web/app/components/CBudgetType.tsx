import React from "react";
import { budgets } from "../mock/budgets";
import { BudgetType } from "../module";

export default function CBudgetType() {
  return (
    <div>
      {budgets.map((el: BudgetType) => (
        <div className="flex" key={el.name}>
          <div>{el.name}</div>
          <div>{React.createElement(el.icon)}</div>
        </div>
      ))}
    </div>
  );
}
