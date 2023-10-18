import CDropdown, { Item } from "@/app/components/CDropdown";
import { Type } from "@/app/module";
import { useMemo } from "react";

interface Props {
  types: Array<Type>;
}

export default function TypesDropdown(props: Props) {
  const typeItemsDropDown: Array<Item> = useMemo(
    () =>
      props.types.map((el) => ({
        name: el.name,
      })),
    [props.types]
  );

  const handleClick = (value: Array<Item>) => {};

  return (
    <CDropdown
      values={typeItemsDropDown}
      items={typeItemsDropDown}
      onClick={handleClick}
    ></CDropdown>
  );
}
