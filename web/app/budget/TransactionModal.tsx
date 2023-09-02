import { useState } from "react";
import CDropdown, { Item } from "../components/CDropdown";
import { CNumber } from "../components/inputs";
import { budgetTypes } from "../mock/budgets";
import CButton from "../components/CButton";

export default function TransactionModal() {
  const [list, setList] = useState([1, 2, 3]);
  const [transaction, setTransaction] = useState<Item>();
  const handleChange = () => {};
  return (
    <div>
      <div className="text-lg text-center mb-4 font-bold">Add Transaction</div>
      <div className="flex gap-4 flex-col">
        <div className="flex gap-4 flex-col overflow-y-auto h-72">
          {list.map((el) => (
            <div key={el} className="flex gap-4">
              <CDropdown
                single
                values={transaction ? [transaction] : []}
                handleClick={(tr: Array<Item>) => {
                  setTransaction(tr[0]);
                }}
                items={budgetTypes}
              />
              <CNumber value={2} onChange={handleChange} />
            </div>
          ))}
        </div>

        <div>
          <CButton
            onClick={() => {
              setList((cu) => [...cu, cu.length]);
            }}
          >
            Add new
          </CButton>
        </div>
      </div>
    </div>
  );
}
