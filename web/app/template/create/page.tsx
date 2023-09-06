"use client";
import CButton from "@/app/components/CButton";
import { CInput } from "@/app/components/inputs";
import Item from "@/app/components/item";
import { Budget, CreateTemplate } from "@/app/module";
import { ChangeEvent, useState } from "react";

interface Props {}

const initialBudgetItem: Partial<Budget> = {
  amount: 0,
  budgetType: undefined,
};

export default function TemplateId(props: Props) {
  const [name, setName] = useState("");
  const [template, setTemplate] = useState<Partial<Budget>[]>([
    initialBudgetItem,
  ]);

  const handleCloseItem = (index: number) => {
    setTemplate((current) => current.filter((el, i) => i !== index));
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTemplateChange = (value: Partial<Budget>, index: number) => {
    setTemplate((current) =>
      current && current[index]
        ? current.map((el, i) => (i === index ? value : el))
        : []
    );
  };

  const handleNewBudgetItem = () => {
    setTemplate((current) => [...current, initialBudgetItem]);
  };

  return (
    <div className="flex flex-col gap-6">
      <CInput value={name} onChange={handleChangeName} placeholder="Title" />
      {template.map((el, index) => (
        <Item
          key={index}
          item={el}
          handleClose={() => handleCloseItem(index)}
          onTemplateChange={(value) => handleTemplateChange(value, index)}
          showClose={template.length > 1}
        />
      ))}
      <CButton onClick={handleNewBudgetItem}>New</CButton>
    </div>
  );
}
