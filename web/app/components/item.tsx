"use client";
import { useState, useEffect, ChangeEventHandler, ChangeEvent } from "react";
import { CNumber } from "./inputs";
import { Budget, BudgetType } from "../module";
import CIconClose from "./CIconClose";
import CDropdown, { Item } from "./CDropdown";
import { budgetTypes } from "../mock/budgets";

interface Props {
  item?: Partial<Budget>;
  showClose?: boolean;
  onTemplateChange: (value: Partial<Budget>) => void;
  handleClose?: Function;
}

export default function Item(props: Props) {
  const handleAmount = (event: ChangeEvent<HTMLInputElement>) => {
    const newTransaction = {
      ...props.item,
      amount: Number(event.target.value),
    };

    props.onTemplateChange(newTransaction);
  };

  const handleClose = () => {
    if (!props.handleClose) {
      return;
    }

    props.handleClose();
  };

  const handleDropdownClick = (value: Array<Item>) => {
    const newTransaction = {
      ...props.item,
      budgetType: value[0] as BudgetType,
    };
    props.onTemplateChange(newTransaction);
  };

  return (
    <div className="flex gap-4 items-center">
      <CDropdown
        single
        values={props.item?.budgetType ? [props.item.budgetType] : []}
        onClick={handleDropdownClick}
        items={budgetTypes}
      />
      <CNumber value={props.item?.amount || ""} onChange={handleAmount} />

      {props.showClose && <CIconClose onClick={handleClose} />}
    </div>
  );
}
