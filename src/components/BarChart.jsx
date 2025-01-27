import React from "react";
import { BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const data = [
  { day: "1", Poids: 70, Calories: 240 },
  { day: "2", Poids: 71, Calories: 260 },
  { day: "3", Poids: 69, Calories: 380 },
  { day: "4", Poids: 70, Calories: 220 },
  { day: "5", Poids: 71, Calories: 240 },
];

function BarChart() {
    return (
        <RechartsBarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Poids" fill="#000000" />
            <Bar dataKey="Calories" fill="#FF0000" />
        </RechartsBarChart>
    );
}

export default BarChart;
