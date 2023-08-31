"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { CInput, CNumber } from "./inputs";
import CButton from "./CButton";
import { TemplateItem } from "../module";

interface Props {
  item: TemplateItem;
  disabled?: boolean;
  handleSave?: Function;
}

export default function Item(props: Props) {
  const [tmp, setTmp] = useState<Partial<TemplateItem>>({});

  useEffect(() => {
    if (props.item) {
      setTmp(props.item);
    }
  }, [props.item, setTmp]);

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTmp({ ...tmp, name: e.target.value });
  };

  const countChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTmp({ ...tmp, count: Number(e.target.value) });
  };

  const handleSave = () => {
    if (tmp?.name && tmp?.count) {
      if (props.handleSave) {
        props.handleSave(tmp);
      }
      setTmp({});
    }
  };

  return (
    <div className="flex">
      <CInput
        value={tmp.name || ""}
        disabled={props.disabled}
        onChange={nameChangeHandler}
        label="name"
      />

      <CNumber
        value={tmp.count || ""}
        disabled={props.disabled}
        onChange={countChangeHandler}
        label="count"
      />

      {!props.disabled && <CButton onClick={handleSave}>Save</CButton>}
    </div>
  );
}
