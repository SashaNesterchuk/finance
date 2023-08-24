import { createRef, useEffect } from "react";
import Chart from "chart.js/auto";

export default function CChart() {
  const ref = createRef<any>();
  useEffect(() => {
    const ctx = ref.current.getContext("2d");
    const t = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Accepted", "Pending", "Rejected"],
        datasets: [
          {
            data: [70, 10, 6],
            borderColor: ["#3cba9f", "#ffa500", "#c45850"],
            backgroundColor: [
              "rgb(60,186,159,0.1)",
              "rgb(255,165,0,0.1)",
              "rgb(196,88,80,0.1)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });
  }, [ref]);
  return (
    <>
      {/* Pie chart */}
      <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">
        Pie Chart
      </h1>
      <div className="w-[1100px]h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl pb-2">
          <canvas id="myChart" ref={ref}></canvas>
        </div>
      </div>
    </>
  );
}
