import { Transaction } from "@/app/module";

export const fetchTransactions = async (): Promise<Array<Transaction>> => {
  const response = await fetch("http://localhost:3000/api/transactions", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();

  return result;
};
