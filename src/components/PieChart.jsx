import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const scoreData = [{ name: "Complété", value: 12 }, { name: "Restant", value: 88 }];
const colors = ["#FF0000", "#E0E0E0"];

const ScorePieChart = () => (
  <PieChart width={300} height={300}>
    <Pie
      data={scoreData}
      cx="50%"
      cy="50%"
      innerRadius={70}
      outerRadius={100}
      fill="#FF0000"
      dataKey="value"
    >
      {scoreData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default ScorePieChart;
