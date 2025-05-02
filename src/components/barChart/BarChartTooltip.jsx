import PropTypes from "prop-types";
import styled from "styled-components";

function CustomTooltip({ active = false, payload = [] }) {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}kCal</p>
      </TooltipContainer>
    );
  }
  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
};

const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background-color: #E60000;
  padding: 20px 10px;
  color: white;
  font-size: 12px;
`;

export default CustomTooltip;