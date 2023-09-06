"use client";
import Item from "@/app/components/item";
import { templates as mockTemplates } from "@/app/mock/template";
import { useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

export default function TemplateId(props: Props) {
  const [template, setTemplate] = useState(
    mockTemplates.find((el) => el.id === props.params.id)
  );

  const handleCloseItem = (index: number) => {
    setTemplate((current) =>
      current
        ? {
            ...current,
            items: current.items.filter((el, i) => i !== index),
          }
        : undefined
    );
  };

  const handleTemplateChange = () => {};

  return (
    <div>
      <div>{template?.name}</div>
      {template?.items.map((el, index) => (
        <Item
          key={el.budgetType.name}
          item={el}
          onTemplateChange={handleTemplateChange}
          handleClose={() => handleCloseItem(index)}
        />
      ))}
    </div>
  );
}
