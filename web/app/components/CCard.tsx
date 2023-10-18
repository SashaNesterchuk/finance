import { ReactNode } from "react";

interface Props {
  col?: string;
  children: ReactNode;
}

export default function CCard(props: Props) {
  return (
    <div
      className={`overflow-scroll rounded-md p-6 bg-white drop-shadow-md ${
        "col-span-" + props.col || 1
      }`}
    >
      {props.children}
    </div>
  );
}
