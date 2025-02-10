//import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

import styled from "styled-components";

const RadarChartWrapper = styled.div`
  background-color: #000;
  width: max-content;
  padding: 10px;
  width: 100%;
  height: 300px;
  border-radius: 5px;
`;

const data = [
  { metric: "Cardio", value: 90 },
  { metric: "Force", value: 80 },
  { metric: "Vitesse", value: 70 },
  { metric: "Endurance", value: 95 },
  { metric: "Energie", value: 85 },
];

const IntensityRadarChart = () => (
  <RadarChartWrapper>
    <ResponsiveContainer width="100%" height="100%">
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="metric" />
      <PolarRadiusAxis />
      <Radar name="Intensité" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
    </RadarChart>
    </ResponsiveContainer>
  </RadarChartWrapper>
);

export default IntensityRadarChart;
