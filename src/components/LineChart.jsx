import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { day: "L", Duration: 30 },
  { day: "M", Duration: 40 },
  { day: "M", Duration: 50 },
  { day: "J", Duration: 45 },
  { day: "V", Duration: 60 },
];

const SessionDurationChart = () => (
  <LineChart width={300} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="day" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="Duration" stroke="#FF0000" />
  </LineChart>
);

export default SessionDurationChart;
