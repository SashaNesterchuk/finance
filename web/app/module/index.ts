import { FunctionComponent } from "react";

export interface Template {
  id: string;
  name: string;
  items: Array<Budget>;
}

export type CreateTemplate = Omit<Template, "id">;

export interface BudgetType {
  name: string;
  icon: FunctionComponent;
}

export interface Budget {
  amount: number;
  budgetType: BudgetType;
}

export interface Transaction {
  date: Date;
  amount: string;
  currency: "PLN";
  transactionPlace: string;
}
