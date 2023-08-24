"use client";
import { useState, useMemo } from "react";
import Item from "../components/item";
import CNumber from "../components/inputs/CNumber";
import CChart from "../components/charts/CChart";

interface Item {
  name: string;
  count: number;
}

export default function Dashboard() {
  const [items, setItems] = useState<Array<Item>>([]);
  const [sum, setSum] = useState<number | undefined>();

  const renderItem = () => {
    return items.map((item: Item) => (
      <Item key={item.name} item={item} disabled={true} />
    ));
  };

  const handleSave = (tmp: Item) => {
    setItems((items) => [...items, tmp as Item]);
  };

  const finalSum = useMemo(
    () => (sum || 0) - items.reduce((acc, it) => acc + it.count, 0),
    [items, sum]
  );

  return (
    <div>
      {renderItem()}
      <div>
        <div className="flex">
          <Item handleSave={handleSave} />
        </div>
      </div>

      <div className="flex">
        <CNumber
          label="All"
          value={sum || ""}
          onChange={(e) => setSum(Number(e.target.value))}
        />
      </div>
      {/* <CChart /> */}

      <div className="flex">
        <div>sum</div>
        <div>{finalSum}</div>
      </div>
    </div>
  );
}
