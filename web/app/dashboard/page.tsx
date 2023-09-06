"use client";
import { useState } from "react";
import { TbCurrencyZloty } from "react-icons/tb";
import { BiPlus } from "react-icons/bi";
import MonthCarousel from "../components/monthCarousel/MonthCarousel";
import Budget from "../budget/Budget";
import CButton from "../components/CButton";
import CModal from "../components/CModal";
import TransactionModal from "../budget/TransactionModal";

export default function Dashboard() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dashboard">
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

      <section className="mt-20">
        <div className="grid grid-cols-3 gap-4">
          <div className="p-2 border-2 border-sky-300 rounded-md">
            <div className="text-center mb-4 text-2xl font-bold">
              Budget on August
            </div>

            <Budget />

            <div className="flex mt-6 justify-between font-bold text-lg px-2">
              <div className="text-red-500 flex items-center pl-2">
                5000
                <TbCurrencyZloty />
              </div>
              <div className="flex items-center">
                AMOUNT: 4000
                <TbCurrencyZloty />
              </div>
            </div>

            <div className="pl-4 mt-2 text-green-500 flex items-center font-bold text-lg">
              5000
              <TbCurrencyZloty />
              <span className="text-base font-normal">- Extra</span>
            </div>
          </div>

          <div className="col-span-2">
            <Budget />
          </div>
        </div>
      </section>
    </div>
  );
}
