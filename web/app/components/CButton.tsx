import { MouseEventHandler, ReactNode } from "react";

export interface Props {
  text?: string;
  children?: ReactNode;
  onClick: MouseEventHandler;
}

export default function CButton(props: Props) {
  return (
    <button className="rounded px-4 py-2 bg-sky-500" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
