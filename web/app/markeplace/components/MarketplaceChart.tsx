import CChart from "@/app/components/charts/CChart";
import { Marketplace, Transaction } from "@/app/module";
import { useCallback, useMemo } from "react";

interface Props {
  marketplaces: Array<Marketplace>;
  transactions: Array<Transaction>;
}

export default function MarketplaceChart(props: Props) {
  const allTransactionByMarketplace = useCallback(
    (id: string) => props.transactions.filter((el) => el.marketplaceId === id),
    [props.transactions]
  );

  const dataForChart = useMemo(
    () =>
      props.marketplaces.map(
        (el) => allTransactionByMarketplace(el.id).length || 0
      ),
    [props.marketplaces, allTransactionByMarketplace]
  );

  const labelsForChart = useMemo(
    () => props.marketplaces.map((el) => el.name),
    [props.marketplaces]
  );

  return <CChart data={dataForChart} labels={labelsForChart} />;
}
