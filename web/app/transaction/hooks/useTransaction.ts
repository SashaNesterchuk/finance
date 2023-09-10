import { transactions } from "@/app/mock/budgets";
import { Transaction } from "@/app/module";
import { useMemo } from "react";

interface Props {
  transactions: Array<Transaction> | undefined;
}

export default function useTransition(props: Props) {
  const transactionsByDate = useMemo(() => {
    if (!props.transactions) {
      return undefined;
    }

    const sorted: Map<Date, Array<Transaction>> = new Map();

    props.transactions.forEach((item: Transaction) => {
      if (sorted.has(item.date)) {
        const tmpSort = sorted.get(item.date);
        sorted.set(item.date, [...(tmpSort || []), item]);
      } else {
        sorted.set(item.date, [item]);
      }
    });

    return sorted;
  }, [props.transactions]);

  const transactionSortedByDateArray = useMemo(
    () => Array.from(transactionsByDate || []),
    [transactionsByDate]
  );

  const transactionsAmountInDate = useMemo(() => {
    const result: any = {};
    transactionsByDate?.forEach((value, key) => {
      result[key.toString()] = value
        .filter((el) => Number(el.amount) < 0)
        .reduce((acc, it) => (acc += Math.abs(Number(it.amount))), 0);
    });

    return result;
  }, [transactionsByDate]);

  return {
    transactionsByDate: transactionSortedByDateArray,
    transactionsAmountInDate,
  };
}
