// components/RadarChart.jsx
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import PropTypes from "prop-types";

const IntensityRadarChart = ({ data }) => {
  if (!data) return null;

  const { kind, data: performanceData } = data;
  // Transformation des données pour le radar chart
  const radarData = performanceData.map(item => ({
    metric: kind[item.kind],
    value: item.value,
  }));

  return (
    <RadarChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={radarData}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis 
            dataKey="metric" 
            tick={{ fill: "#fff", fontSize: 14 }} 
          />
          <PolarRadiusAxis tick={false} domain={[0, 100]} axisLine={false} />
          <Radar name="Performance" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </RadarChartWrapper>
  );
};

IntensityRadarChart.propTypes = {
  data: PropTypes.shape({
    kind: PropTypes.object.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const RadarChartWrapper = styled.div`
  background-color: #282D30;
  width: 100%;
  height: 260px;
  border-radius: 5px;
  padding: 10px;
`;

export default IntensityRadarChart;
