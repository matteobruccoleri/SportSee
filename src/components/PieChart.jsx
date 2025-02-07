import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

import styled from "styled-components";

const scoreData = [{ name: "Complété", value: 12 }, { name: "Restant", value: 88 }];
const colors = ["#FF0000", "#E0E0E0"];

const PieChartWrapper = styled.div`
  background-color: #fbfbfb;
  width: max-content;
  padding: 10px;
  width: 100%;
  height: 300px;
  border-radius: 5px;
`;


const ScorePieChart = () => {

  return (
    <PieChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={scoreData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            fill="#FF0000"
            dataKey="value"
          >
            {scoreData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </PieChartWrapper>
  );
};

export default ScorePieChart;
