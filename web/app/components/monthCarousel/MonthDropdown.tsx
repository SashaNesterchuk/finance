import { monthNames } from "@/app/use/useMonths";
import { useCallback, useMemo, useState } from "react";

interface Props {
  month: number;
}

export default function MonthDropdown(props: Props) {
  const [isActive, setIsActive] = useState(false);
  const isMonthActive = useCallback(
    (index: number) => index === props.month,
    [props.month]
  );

  return (
    <div className="relative">
      <div onClick={() => setIsActive(true)}>{monthNames[props.month]}</div>
      {isActive && (
        <div className="absolute p-4 bg-slate-100 grid grid-cols-3f rounded-md translate-x-m-50 left-2/4 gap-4">
          {monthNames.map((el, index) => (
            <div
              className={`rounded-md border-2 p-4 ${
                isMonthActive(index) && "bg-sky-500"
              }`}
              key={el}
            >
              {el}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
