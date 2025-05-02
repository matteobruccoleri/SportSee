import { 
  BarChart as RechartsBarChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Bar, 
  ResponsiveContainer 
} from "recharts";
import styled from "styled-components";
import PropTypes from "prop-types";
import CustomTooltip from "./BarChartTooltip"; 

function BarChart({ data }) {
  if (!data) return null;
  
  const normalizedData = data.map((item, index) => ({
    day: (index + 1).toString(),
    dayOriginal: item.day, 
    Poids: item.kilogram || item.Poids,
    Calories: item.calories || item.Calories,
  }));

  const minPoids = Math.min(...normalizedData.map((d) => d.Poids));
  const maxPoids = Math.ceil(Math.max(...normalizedData.map((d) => d.Poids)));

  return (
    <BarChartWrapper>
      <Header>
        <Title>Activité quotidienne</Title>
        <CustomLegend>
          <LegendItem>
            <LegendDot color="#282D30" />
            Poids (kg)
          </LegendItem>
          <LegendItem>
            <LegendDot color="#E60000" />
            Calories brûlées (kCal)
          </LegendItem>
        </CustomLegend>
      </Header>
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={normalizedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barGap={8}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#DEDEDE"
            />
            <XAxis
              dataKey="day"
              stroke="transparent"
              tick={{ fill: "#9B9EAC" }}
              tickLine={false}
              dy={15}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="transparent"
              tick={{ fill: "#9B9EAC" }}
              tickLine={false}
              domain={[minPoids - 1, maxPoids + 1]}
              tickCount={3}
              dx={15}
            />
            <YAxis yAxisId="left" orientation="left" hide={true} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#C4C4C480" }} />
            <Bar
              yAxisId="right"
              dataKey="Poids"
              fill="#282D30"
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="Calories"
              fill="#E60000"
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </BarChartWrapper>
  );
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
};

/* styled components */
const BarChartWrapper = styled.div`
  background-color: #FBFBFB;
  padding: 20px 20px 40px;
  width: 100%;
  height: 260px;
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #20253A;
  margin: 0;
`;

const CustomLegend = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #74798C;
  font-size: 14px;
`;

const LegendDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
`;

export default BarChart;