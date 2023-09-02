import { FunctionComponent } from "react";

export interface TemplateItem {
  name: string;
  count: number;
}

export interface Template {
  id: string;
  name: string;
  items: Array<TemplateItem>;
}

export interface BudgetType {
  name: string;
  icon: FunctionComponent;
}

export interface Budget {
  amount: number;
  budgetType: BudgetType;
}
