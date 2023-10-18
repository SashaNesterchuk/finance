import { createRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import colors from "@/app/mock/colors";

interface Props {
  data: Array<number>;
  labels: Array<string>;
}

export default function CBarChart(props: Props) {
  const ref = createRef<any>();
  const [chart, setChart] = useState<any>();
  useEffect(() => {
    const ctx = ref.current.getContext("2d");
    const t = new Chart(ctx, {
      type: "bar",
      data: {
        labels: props.labels,
        datasets: [
          {
            data: props.data,
            borderColor: colors.slice(0, props.labels.length),
            backgroundColor: colors.slice(0, props.labels.length),
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    return () => {
      t.destroy();
    };
  }, [ref, props, setChart]);
  return (
    <>
      <canvas id="myBarChart" ref={ref}></canvas>
    </>
  );
}
