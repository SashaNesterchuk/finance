import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import CButton from "../CButton";

export default function MonthCarousel() {
  const handleClick = (nav: string) => {};
  return (
    <div className="flex gap-20 items-center">
      <CButton circle onClick={() => handleClick("prev")}>
        <MdOutlineArrowBackIosNew />
      </CButton>
      <div>August 2023</div>
      <CButton circle onClick={() => handleClick("next")}>
        <MdOutlineArrowForwardIos />
      </CButton>
    </div>
  );
}
