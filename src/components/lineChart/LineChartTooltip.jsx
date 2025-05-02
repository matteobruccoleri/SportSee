import PropTypes from 'prop-types';
import styled from "styled-components";

function LineChartTooltip({ active = false, payload = [] }) {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        {payload[0]?.value} min
      </TooltipContainer>
    );
  }
  return null;
}

LineChartTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number
    })
  )
};

const TooltipContainer = styled.div`
  background-color: white;
  padding: 10px;
  font-size: 12px;
  color: black;
`;

export default LineChartTooltip;