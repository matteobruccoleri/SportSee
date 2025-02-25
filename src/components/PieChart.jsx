// components/PieChart.jsx
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import PropTypes from "prop-types";

const PieChartWrapper = styled.div`
  background-color: #FBFBFB;
  padding: 30px;
  width: 100%;
  height: 260px;
  border-radius: 5px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 2;
  color: #20253A;
`;

const ScoreLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  background-color: white;
  width: 95px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ScoreValue = styled.p`
  font-size: 26px;
  font-weight: 700;
  margin: 0;
  color: #282D30;
`;

const ScoreText = styled.p`
  font-size: 16px;
  color: #74798C;
  margin: 0;
  line-height: 1.3;
  font-weight: 700;
`;

const ScorePieChart = ({ score }) => {
  if (score === undefined) return null;
  const percentage = score * 100;
  const scoreData = [
    { name: "Complété", value: percentage },
    { name: "Restant", value: 100 - percentage }
  ];
  const colors = ["#FF0000", "#FBFBFB"];

  return (
    <PieChartWrapper>
      <Title>Score</Title>
      <ScoreLabel>
        <ScoreValue>{percentage}%</ScoreValue>
        <ScoreText>de votre<br />objectif</ScoreText>
      </ScoreLabel>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* Cercle blanc de fond */}
          <Pie
            data={[{ value: 100 }]}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={70}
            fill="#FFFFFF"
          />
          {/* Graphique principal */}
          <Pie
            data={scoreData}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={450}
            innerRadius={70}
            outerRadius={80}
            dataKey="value"
            cornerRadius={10}
          >
            {scoreData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={colors[index]}
                strokeWidth={0}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </PieChartWrapper>
  );
};

ScorePieChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScorePieChart;
