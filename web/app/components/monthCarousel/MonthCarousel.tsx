import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import CButton from "../CButton";
import { useState } from "react";
import { monthNames } from "@/app/use/useMonths";
import MonthDropdown from "./MonthDropdown";

export default function MonthCarousel() {
  const [month, setMonth] = useState(new Date().getMonth());

  const handleClick = (nav: string) => {
    if (nav === "prev") {
      setMonth((current) =>
        current - 1 < 0 ? monthNames.length - 1 : current - 1
      );
    } else {
      setMonth((current) =>
        current + 1 > monthNames.length - 1 ? 0 : current + 1
      );
    }
  };

  const handleClickOnMonth = () => {};

  return (
    <div className="flex gap-20 items-center">
      <CButton circle onClick={() => handleClick("prev")}>
        <MdOutlineArrowBackIosNew />
      </CButton>
      <MonthDropdown month={month} />
      <CButton circle onClick={() => handleClick("next")}>
        <MdOutlineArrowForwardIos />
      </CButton>
    </div>
  );
}
