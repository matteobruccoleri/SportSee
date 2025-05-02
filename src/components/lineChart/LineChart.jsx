import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';
import LineChartTooltip from './LineChartTooltip';
import LineChartCursor from './LineChartCursor';

const SessionDurationChart = ({ data }) => {
  // Déclarez tous vos hooks AVANT toute condition
  const chartRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);
  
  // Vérifier si les données sont disponibles
  const hasData = data && Array.isArray(data) && data.length > 0;
  
  useEffect(() => {
    if (chartRef.current) {
      // Obtenir la largeur du conteneur du graphique
      const updateChartWidth = () => {
        const width = chartRef.current.getBoundingClientRect().width;
        setChartWidth(width);
      };
      
      updateChartWidth();
      window.addEventListener('resize', updateChartWidth);
      
      return () => {
        window.removeEventListener('resize', updateChartWidth);
      };
    }
  }, []);
  
  // Rendu conditionnel après la déclaration de tous les hooks
  if (!hasData) {
    return <div>Aucune donnée disponible</div>;
  }
  
  return (
    <ChartContainer ref={chartRef}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <XAxis 
            dataKey="day" 
            stroke="transparent"
            tick={{ fill: "rgba(255, 255, 255, 0.6)" }}
            tickLine={false}
            axisLine={false}
            padding={{ left: 10, right: 10 }}
            interval={0}
          />
          <YAxis 
            hide={true}
            domain={['dataMin - 30', 'dataMax + 30']}
          />
          <Tooltip 
            content={<LineChartTooltip />}
            cursor={<LineChartCursor width={30} offset={1} chartWidth={chartWidth} />}
          />
          <Legend 
            verticalAlign="top"
            align="left"
            content={() => (
              <LegendText>
                Durée moyenne des sessions
              </LegendText>
            )}
          />
          <Line 
            type="natural" 
            dataKey="Duration" 
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.4)",
              strokeWidth: 10,
              r: 4,
              fill: "#FFFFFF"
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

SessionDurationChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      Duration: PropTypes.number.isRequired,
    })
  )
};

/* styled components */
const ChartContainer = styled.div`
  background-color: #FF0000;
  border-radius: 5px;
  width: 100%;
  height: 260px;
  position: relative;
`;

const LegendText = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 150px;
  line-height: 1.5;
`;

export default SessionDurationChart;