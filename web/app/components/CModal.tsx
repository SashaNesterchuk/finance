import { ReactNode } from "react";
import { useOutsideClick } from "../use/useOutsideClick";
import CButton from "./CButton";
import { IoClose } from "react-icons/io5";
interface Props {
  isActive: boolean;
  handleClose: Function;
  children?: ReactNode;
  navigation?: boolean;
}

export default function CModal(props: Props) {
  return (
    props.isActive && (
      <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black/40">
        <div className="bg-white rounded-md p-10 relative">
          <div
            className="absolute top-4 right-4 hover:text-red-500 cursor-pointer text-2xl"
            onClick={() => props.handleClose()}
          >
            <IoClose />
          </div>
          <div>{props.children}</div>{" "}
          <div className="my-6 border-t-2 border-sky-500"></div>
          <div className="flex gap-4 justify-center">
            <CButton error onClick={() => {}}>
              Cancel
            </CButton>
            <CButton success onClick={() => {}}>
              Save
            </CButton>
          </div>
        </div>
      </div>
    )
  );
}
