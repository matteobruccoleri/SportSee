// components/Nutrients.jsx
import styled from "styled-components";
import PropTypes from "prop-types";

import IconApple from "../assets/icons/apple.svg";
import IconChicken from "../assets/icons/chicken.svg";
import IconEnergy from "../assets/icons/energy.svg";
import IconCheeseburger from "../assets/icons/cheeseburger.svg";

const StyledNutrientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
`;

const StyledNutrientWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 30px;
  border-radius: 10px;
  background-color: #fbfbfb;
  width: 100%;
`;

const StyledNutrientText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

const NutrientIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${(props) => props.$bgColor};
  border-radius: 6px;
`;

function Nutrients({ data }) {
  // Création d'un tableau de nutriments avec leurs valeurs et paramètres
  const nutrients = [
    {
      label: "Calories",
      value: data.calorieCount,
      unit: "kCal",
      icon: IconEnergy,
      bgColor: "#ffe8e8",
    },
    {
      label: "Glucides",
      value: data.carbohydrateCount,
      unit: "g",
      icon: IconChicken,
      bgColor: "#4AB8FF1A",
    },
    {
      label: "Protéines",
      value: data.proteinCount,
      unit: "g",
      icon: IconApple,
      bgColor: "#fff8e2",
    },
    {
      label: "Lipides",
      value: data.lipidCount,
      unit: "g",
      icon: IconCheeseburger,
      bgColor: "#FD51811A",
    },
  ];

  return (
    <StyledNutrientsWrapper>
      {nutrients.map((nutrient, index) => (
        <StyledNutrientWrapper key={index}>
          <NutrientIconWrapper $bgColor={nutrient.bgColor}>
            <img src={nutrient.icon} alt={`icon ${nutrient.label}`} />
          </NutrientIconWrapper>
          <StyledNutrientText>
            <p>
              {nutrient.value}
              {nutrient.unit}
            </p>
            <p>{nutrient.label}</p>
          </StyledNutrientText>
        </StyledNutrientWrapper>
      ))}
    </StyledNutrientsWrapper>
  );
}

Nutrients.propTypes = {
  data: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Nutrients;
