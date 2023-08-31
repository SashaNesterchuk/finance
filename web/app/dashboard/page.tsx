"use client";
import { useState, useMemo } from "react";
import Item from "../components/item";
import CNumber from "../components/inputs/CNumber";
import CChart from "../components/charts/CChart";
import { TemplateItem } from "../module";
import CDate from "../components/inputs/CDate";
import CBudgetType from "../components/CBudgetType";
import CDropdown, { Item as DropdownItem } from "../components/CDropdown";
import { budgets } from "../mock/budgets";

export default function Dashboard() {
  const [items, setItems] = useState<Array<TemplateItem>>([]);
  const [sum, setSum] = useState<number | undefined>();
  const [dropDownValues, setDropDownValues] = useState<Array<DropdownItem>>([]);

  const renderItem = () => {
    return items.map((item: TemplateItem) => (
      <Item key={item.name} item={item} disabled={true} />
    ));
  };

  const handleSave = (tmp: TemplateItem) => {
    setItems((items) => [...items, tmp as TemplateItem]);
  };

  const finalSum = useMemo(
    () => (sum || 0) - items.reduce((acc, it) => acc + it.count, 0),
    [items, sum]
  );

  const handleDropDownClick = (item: Array<DropdownItem>) => {
    setDropDownValues(item);
  };

  return (
    <div>
      {renderItem()}
      <CDate value="asdf" onChange={() => {}} />
      <CDropdown
        items={budgets}
        values={dropDownValues}
        handleClick={handleDropDownClick}
      />
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
