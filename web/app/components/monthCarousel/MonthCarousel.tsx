import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import CButton from "../CButton";
import { useEffect, useState } from "react";
import { monthNames } from "@/app/use/useMonths";
import MonthDropdown from "./MonthDropdown";
import {
  fetchTransactionsByYearAndMonthAsync,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import { selectActiveMonth } from "@/lib/redux/budget";
import { budgetSlice } from "../../../lib/redux/budget/budgetSlice";

export default function MonthCarousel() {
  const month = useSelector(selectActiveMonth);
  const dispatch = useDispatch();

  const handleClick = (nav: string) => {
    if (nav === "prev") {
      dispatch(budgetSlice.actions.decrementMonth());
    } else {
      dispatch(budgetSlice.actions.incrementMonth());
    }
  };

  // useEffect(() => {
  //   const correctMonth = month.getMonth() + 1;
  //   dispatch(
  //     fetchTransactionsByYearAndMonthAsync({
  //       month: correctMonth.toString(),
  //       year: "2023",
  //     })
  //   );
  // }, [month, dispatch]);

  const handleClickOnMonth = () => {};

  return (
    <div className="flex gap-20 items-center">
      <CButton circle onClick={() => handleClick("prev")}>
        <MdOutlineArrowBackIosNew />
      </CButton>
      <MonthDropdown month={month.getMonth()} />
      <CButton circle onClick={() => handleClick("next")}>
        <MdOutlineArrowForwardIos />
      </CButton>
    </div>
  );
}
