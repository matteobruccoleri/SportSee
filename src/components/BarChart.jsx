import React from "react";
import { 
  BarChart as RechartsBarChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  Bar, 
  ResponsiveContainer 
} from "recharts";
import styled from "styled-components";

const data = [
  { day: "1", Poids: 70, Calories: 240 },
  { day: "2", Poids: 71, Calories: 260 },
  { day: "3", Poids: 69, Calories: 380 },
  { day: "4", Poids: 70, Calories: 220 },
  { day: "5", Poids: 71, Calories: 240 },
  { day: "6", Poids: 70, Calories: 240 },
  { day: "7", Poids: 71, Calories: 260 },
  { day: "8", Poids: 69, Calories: 380 },
  { day: "9", Poids: 70, Calories: 220 },
  { day: "10", Poids: 71, Calories: 240 },
];

// Calcul des valeurs min et max du poids
const minPoids = Math.min(...data.map(d => d.Poids));
const maxPoids = Math.ceil(Math.max(...data.map(d => d.Poids)));


const BarChartWrapper = styled.div`
    background-color: #FBFBFB;
    width: max-content;
    padding: 10px;
    width: 100%;
    height: 300px;
    border-radius: 5px;
`;

function BarChart() {
    return (
        <BarChartWrapper style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={data}>
                <Legend layout="horizontal" verticalAlign="top" align="end" wrapperStyle={{ top: -10, left: 0, right: 0 }}/>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} /> {/* Supprime les barres verticales */}
                    <XAxis dataKey="day" stroke="transparent" tick={{ fill: "#000" }} />
                    <YAxis 
                        domain={[minPoids, maxPoids]}
                        orientation="right" 
                        stroke="transparent" 
                        tick={{ fill: "#000" }}
                    />
                    <Tooltip 
                        contentStyle={{ backgroundColor: "red", color: "white", padding: "10px" }}
                        itemStyle={{ color: "white" }}
                    />
                    <Bar dataKey="Poids" fill="#000000" barSize={6} radius={[100, 100, 0, 0]}/>
                    <Bar dataKey="Calories" fill="#FF0000" barSize={6} radius={[100, 100, 0, 0]}/>
                </RechartsBarChart>
            </ResponsiveContainer>
        </BarChartWrapper>
    );
}

export default BarChart;
