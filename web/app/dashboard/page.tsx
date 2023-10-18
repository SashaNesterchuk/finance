"use client";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import MonthCarousel from "../components/monthCarousel/MonthCarousel";
import Budget from "../budget/Budget";
import CButton from "../components/CButton";
import CModal from "../components/CModal";
import TransactionModal from "../budget/TransactionModal";
import { useSelector, selectTransactionsByMonthAndYear } from "@/lib/redux";
import TransactionList from "../transaction/components/TransactionList";
import CCard from "../components/CCard";
import useFetchDashboard from "../use/useFetchDashboard";
import MarketplaceChart from "../markeplace/components/MarketplaceChart";
import { selectMarketplaces } from "@/lib/redux/marketplaces";
import TypesChart from "../types/components/TypesChart";
import { selectTypes } from "@/lib/redux/types";

export default function Dashboard() {
  const [isActive, setIsActive] = useState(false);
  const transactions = useSelector(selectTransactionsByMonthAndYear);
  const marketplaces = useSelector(selectMarketplaces);
  const types = useSelector(selectTypes);
  useFetchDashboard();

  return (
    <div className="dashboard ">
      {/* Move to layout make global */}
      <CModal isActive={isActive} handleClose={() => setIsActive(false)}>
        <TransactionModal />
      </CModal>
      <div className="fixed bottom-10 right-10">
        <CButton
          onClick={() => {
            setIsActive(true);
          }}
          circle
        >
          <BiPlus />
        </CButton>
      </div>

      <section className="flex justify-center">
        <MonthCarousel />
      </section>

      <section className="mt-20 snap-mandatory snap-y grid gap-4">
        <div className="grid grid-cols-9 gap-4 snap-start h-screen">
          <CCard col="2">
            <Budget />
          </CCard>

          <CCard col="3">
            <TransactionList transactions={transactions} />
          </CCard>

          <CCard col="4">
            {!marketplaces || !transactions ? (
              <div>...Loading</div>
            ) : (
              <MarketplaceChart
                marketplaces={marketplaces}
                transactions={transactions}
              />
            )}
          </CCard>
        </div>

        <div className="grid grid-cols-5 gap-4 snap-start h-screen">
          <CCard col="2">
            {!marketplaces || !transactions || !types ? (
              <div>...Loading</div>
            ) : (
              <TypesChart
                marketplaces={marketplaces}
                transactions={transactions}
                types={types}
              />
            )}
          </CCard>

          <CCard col="2">test</CCard>
        </div>
      </section>
    </div>
  );
}
