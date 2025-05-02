import PropTypes from 'prop-types';
import { Rectangle } from "recharts";

const LineChartCursor = (props) => {
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

LineChartCursor.propTypes = {
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

export default LineChartCursor;