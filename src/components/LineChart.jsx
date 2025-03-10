import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Rectangle } from "recharts";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';

const CustomCursor = (props) => {
  const { points, width = 40, height, offset = 0, chartWidth } = props;
  const { x } = points[0];
  
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)"
      x={x - (width / 2) + offset}
      y={0}
      // Étend le rectangle du point actuel jusqu'à la fin du graphique
      width={chartWidth - x + (width / 2) - offset}
      height={height + 30}
    />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  ),
  width: PropTypes.number,
  height: PropTypes.number,
  offset: PropTypes.number,
  chartWidth: PropTypes.number
};

const CustomizedTooltip = ({ active = false, payload = [] }) => {
  if (active && payload && payload.length) {
    return (
      <CustomTooltip>
        {payload[0]?.value} min
      </CustomTooltip>
    );
  }
  return null;
};

CustomizedTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number
    })
  )
};

const SessionDurationChart = ({ data }) => {
  if (!data) return null;
  
  const chartRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);
  
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
  
  // Ici, data doit être un tableau d'objets avec au moins les clés "day" et "Duration"
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
            domain={['dataMin - 10', 'dataMax + 10']}
          />
          <Tooltip 
            content={<CustomizedTooltip />}
            cursor={<CustomCursor width={30} offset={1} chartWidth={chartWidth} />}
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

const ChartContainer = styled.div`
  background-color: #FF0000;
  border-radius: 5px;
  width: 100%;
  height: 260px;
  position: relative;
`;

const CustomTooltip = styled.div`
  background-color: white;
  padding: 10px;
  font-size: 12px;
  color: black;
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