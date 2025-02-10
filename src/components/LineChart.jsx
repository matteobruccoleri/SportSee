import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Rectangle } from "recharts";
import styled from "styled-components";
import PropTypes from 'prop-types';

const data = [
  { day: "L", Duration: 30 },
  { day: "M", Duration: 40 },
  { day: "M", Duration: 50 },
  { day: "J", Duration: 45 },
  { day: "V", Duration: 60 },
  { day: "S", Duration: 55 },
  { day: "D", Duration: 65 }
];

const LineChartWrapper = styled.div`
  background-color: #FF0000;
  padding: 30px 20px;
  width: 100%;
  height: 300px;
  border-radius: 5px;
  position: relative;
`;



const CustomTooltip = styled.div`
  background-color: white;
  padding: 10px;
  font-size: 12px;
  color: black;
`;

const CustomCursor = (props) => {
  const { points, width, height } = props;
  const { x } = points[0];
  
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)"
      x={x}
      y={0}
      width={width}
      height={height}
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
  height: PropTypes.number
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

const SessionDurationChart = () => (
  <LineChartWrapper>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart 
        data={data}
        margin={{ top: 0, right: 10, bottom: 10, left: 10 }}
      >
        <XAxis 
          dataKey="day" 
          stroke="transparent"
          tick={{ fill: "rgba(255, 255, 255, 0.6)" }}
          tickLine={false}
          axisLine={false}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis 
          hide={true}
          domain={['dataMin - 10', 'dataMax + 10']}
        />
        <Tooltip 
          content={<CustomizedTooltip />}
          cursor={<CustomCursor />}
        />
        <Legend 
          verticalAlign="top"
          align="left"
          content={() => (
            <div style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '15px',
              fontWeight: 500,
              position: 'absolute',
              top: '15px',
              left: '34px',
              width: '150px',
              lineHeight: 1.5
            }}>
              Durée moyenne des sessions
            </div>
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
  </LineChartWrapper>
);

export default SessionDurationChart;