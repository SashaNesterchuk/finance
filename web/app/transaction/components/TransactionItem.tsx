import { Transaction } from "@/app/module";
import RootLayout from "../../dashboard/layout";

interface Props {
  transaction: Transaction;
}

export default function TransactionItem(props: Props) {
  return (
    <div className="flex gap-4 p-2 bg-sky-100 rounded-md justify-between">
      <div>{props.transaction.row_name}</div>
      {Number(props.transaction.amount) > 0 ? (
        <div className="text-green-500">{props.transaction.amount}</div>
      ) : (
        <div className="text-red-500">{props.transaction.amount}</div>
      )}
    </div>
  );
}
