import React, { useState, FunctionComponent, SyntheticEvent } from "react";
import { IoClose } from "react-icons/io5";
import { useOutsideClick } from "../use/useOutsideClick";
import { inputClasses } from "./inputs/utils";

export interface Item {
  name: string;
  icon?: FunctionComponent;
}

interface Props {
  values: Array<Item>;
  items: Array<Item>;
  onClick: (value: Array<Item>) => void;
  single?: boolean;
}

export default function CDropdown(props: Props) {
  const [isActive, setIsActive] = useState(false);
  const { ref } = useOutsideClick(() => setIsActive(false));

  const handleClickInput = () => {
    setIsActive((current) => !current);
  };

  const handleClickItem = (item: Item) => {
    if (props.single) {
      props.onClick([item]);
      return;
    }
    props.onClick([...props.values, item]);
  };

  const correctItems = () => {
    return props.items.filter(
      (el) => !props.values.some((val) => val.name === el.name)
    );
  };

  const handleClickClose = (e: SyntheticEvent, item: Item) => {
    e.stopPropagation();
    e.preventDefault();
    props.onClick(props.values.filter((el) => el.name !== item.name));
  };

  return (
    <div className="relative">
      <div ref={ref} className={inputClasses} onClick={handleClickInput}>
        <div className="flex flex-wrap gap-3">
          {props.values.map((value: Item) => (
            <div
              className="flex gap-1 items-center bg-sky-100 rounded-md p-2"
              key={value.name}
            >
              {value.icon && (
                <div className="text-lg">{React.createElement(value.icon)}</div>
              )}
              <div>{value.name}</div>
              <IoClose
                className="cursor-pointer hover:bg-red-500 rounded-lg hover:text-white"
                onClick={(e: SyntheticEvent) => handleClickClose(e, value)}
              />
            </div>
          ))}
        </div>
      </div>
      {isActive && (
        <div
          className="absolute mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 overflow-y-auto h-72 z-10"
        >
          {correctItems().map((el: Item) => (
            <div
              className="flex gap-4 items-center hover:bg-sky-100 p-2 rounded-md"
              key={el.name}
              onClick={() => handleClickItem(el)}
            >
              {el.icon && (
                <div className="text-lg">{React.createElement(el.icon)}</div>
              )}
              <div>{el.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
