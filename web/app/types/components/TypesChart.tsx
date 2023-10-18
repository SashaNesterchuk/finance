import CBarChart from "@/app/components/charts/CBarChart";
import { Marketplace, Transaction, Type } from "@/app/module";
import { transactions } from "../../mock/budgets";
import { useCallback, useMemo } from "react";

interface Props {
  types: Array<Type>;
  transactions: Array<Transaction>;
  marketplaces: Array<Marketplace>;
}

export default function TypesChart(props: Props) {
  const findMarketplaceById = useCallback(
    (id: string | null | undefined) =>
      props.marketplaces.find((el) => el.id === id),
    [props.marketplaces]
  );

  const findTypeById = useCallback(
    (id: string | null | undefined) => props.types.find((el) => el.id === id),
    [props.types]
  );

  const transactionsTypes = useMemo(
    () =>
      props.transactions
        .filter((el) => el.TypeId || el.marketplaceId)
        .map((el) =>
          el.TypeId
            ? { ...findTypeById(el.TypeId), transaction: el }
            : {
                ...findTypeById(findMarketplaceById(el.marketplaceId)?.TypeId),
                transaction: el,
              }
        ),
    [props, findTypeById, findMarketplaceById]
  );

  const typesLabels = useMemo(
    () => props.types.map((el) => el.name),
    [props.types]
  );

  const typesData = useMemo(
    () =>
      props.types.map(
        (el) => transactionsTypes.filter((it) => it?.id === el.id).length
      ),
    [props.types, transactionsTypes]
  );
  const typesMoneyData = useMemo(
    () =>
      props.types.map((el) =>
        transactionsTypes
          .filter((it) => it?.id === el.id)
          .reduce((acc, it) => acc + Number(it.transaction.amount), 0)
      ),
    [props.types, transactionsTypes]
  );

  return (
    <div>
      <CBarChart labels={typesLabels} data={typesData} />
      <CBarChart labels={typesLabels} data={typesMoneyData} />{" "}
    </div>
  );
}
