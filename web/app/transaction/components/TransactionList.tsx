import { Transaction } from "@/app/module";
import TransactionItem from "./TransactionItem";
import useTransition from "../hooks/useTransaction";

interface Props {
  transactions: Array<Transaction> | undefined;
}

export default function TransactionList(props: Props) {
  const { transactionsByDate, transactionsAmountInDate } = useTransition({
    transactions: props.transactions,
  });

  return (
    <div className="flex flex-col gap-4">
      {transactionsByDate &&
        transactionsByDate?.map((el) => (
          <div className="flex flex-col gap-1" key={el[0].toString()}>
            <div className="flex gap-4 bg-slate-100 p-2 rounded-md">
              <div>
                {new Date(el[0]).toLocaleDateString("en", {
                  weekday: "long",
                  day: "numeric",
                })}
              </div>
              <div>number: {el[1].length}</div>
              <div className="text-red-500">
                -{transactionsAmountInDate[el[0].toString()]}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {el[1].map((transaction, index) => (
                <TransactionItem key={index} transaction={transaction} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
