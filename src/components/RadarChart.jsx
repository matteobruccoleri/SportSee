import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

const data = [
  { metric: "Cardio", value: 90 },
  { metric: "Force", value: 80 },
  { metric: "Vitesse", value: 70 },
  { metric: "Endurance", value: 95 },
  { metric: "Energie", value: 85 },
];

const IntensityRadarChart = () => (
  <RadarChart cx={250} cy={150} outerRadius={120} width={500} height={300} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="metric" />
    <PolarRadiusAxis />
    <Radar name="Intensité" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
  </RadarChart>
);

export default IntensityRadarChart;
