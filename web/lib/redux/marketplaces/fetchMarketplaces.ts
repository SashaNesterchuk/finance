import { Marketplace } from "@/app/module";

export const fetchMarketplaces = async (): Promise<Array<Marketplace>> => {
  const response = await fetch("http://localhost:3000/api/marketplaces", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();

  return result;
};

export const getMarketplacesByYearAndMonthAsync = async (
  month: string,
  year: string
): Promise<Array<Marketplace>> => {
  const response = await fetch(
    `http://localhost:3000/api/marketplaces/${month}/${year}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const result = await response.json();

  return result;
};
