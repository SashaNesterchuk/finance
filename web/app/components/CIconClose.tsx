import { MouseEventHandler } from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  onClick: MouseEventHandler<SVGElement>;
}

export default function CIconClose(props: Props) {
  return (
    <IoClose
      className="top-4 right-4 hover:text-red-500 cursor-pointer text-2xl"
      onClick={props.onClick}
    />
  );
}
