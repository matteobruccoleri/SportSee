//import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import styled from "styled-components";

const LineChartWrapper = styled.div`
  background-color: #FF0000;
  width: max-content;
  padding: 10px;
  width: 100%;
  height: 300px;
  border-radius: 5px;
`;



const data = [
  { day: "L", Duration: 30 },
  { day: "M", Duration: 40 },
  { day: "M", Duration: 50 },
  { day: "J", Duration: 45 },
  { day: "V", Duration: 60 },
];

const SessionDurationChart = () => (
  <LineChartWrapper>
    <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data}>
    <XAxis dataKey="day" stroke="transparent" tick={{ fill: "#FFFFFF" }}/>
      <YAxis hide={true}/>
      <Tooltip />
      <Line type="monotone" dataKey="Duration" stroke="#FFF" />
    </LineChart>
    </ResponsiveContainer>
  </LineChartWrapper>
);

export default SessionDurationChart;
