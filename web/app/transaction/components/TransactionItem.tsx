import { Transaction } from "@/app/module";

interface Props {
  transaction: Transaction;
}

export default function TransactionItem(props: Props) {
  return (
    <div className="flex gap-4 p-2 bg-sky-100 rounded-md">
      <div>{props.transaction.transactionPlace}</div>
      {Number(props.transaction.amount) > 0 ? (
        <div className="text-green-500">{props.transaction.amount}</div>
      ) : (
        <div className="text-red-500">{props.transaction.amount}</div>
      )}
      <div>{props.transaction.date.toString()}</div>
    </div>
  );
}
