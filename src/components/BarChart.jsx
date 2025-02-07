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

function BarChart() {
    return (
        <div style={{ width: "100%", height: 300 }}> {/* Assure que le parent a une largeur définie */}
            <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={data}>
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" stroke="transparent" tick={{ fill: "#000" }} />
                    <YAxis stroke="transparent" tick={{ fill: "#000" }} />
                    <Tooltip />
                    <Bar dataKey="Poids" fill="#000000" />
                    <Bar dataKey="Calories" fill="#FF0000" />
                </RechartsBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChart;
