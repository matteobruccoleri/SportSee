//import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

import styled from "styled-components";

const RadarChartWrapper = styled.div`
  background-color: #282D30;
  width: max-content;
  width: 100%;
  height: 260px;
  border-radius: 5px;
  padding: 10px;
`;

const data = [
  { metric: "Intensité", value: 60 },
  { metric: "Force", value: 80 },
  { metric: "Vitesse", value: 70 },
  { metric: "Endurance", value: 95 },
  { metric: "Cardio", value: 85 },
  { metric: "Energie", value: 60 },
];

const IntensityRadarChart = () => (
  <RadarChartWrapper>
    <ResponsiveContainer width="100%" height="100%">
    <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
    <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis 
          dataKey="metric" 
          tick={{ 
            fill: "#fff",  
            fontSize: 14 
          }} 
        />
        <PolarRadiusAxis 
          tick={false}
          domain={[0, 100]}
          axisLine={false}
        />
      <Radar name="Intensité" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
    </RadarChart>
    </ResponsiveContainer>
  </RadarChartWrapper>
);

export default IntensityRadarChart;
