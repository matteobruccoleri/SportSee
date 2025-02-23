import styled from "styled-components";

import IconApple from "../assets/icons/apple.svg";
import IconChicken from "../assets/icons/chicken.svg";
import IconEnergy from "../assets/icons/energy.svg";
import IconCheeseburger from "../assets/icons/cheeseburger.svg";

const StyledNutrientsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const StyledNutrientWrapper = styled.div`
    flex: 1 0 0;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    padding: 30px;
    border-radius: 10px;
    background-color:#FBFBFB;
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

function Nutrients() {
  return (
    <StyledNutrientsWrapper>
        <StyledNutrientWrapper>
          <NutrientIconWrapper $bgColor="#ffe8e8">
            <img src={IconEnergy} alt="icon fire" />
          </NutrientIconWrapper>
            <StyledNutrientText>
              <p>365g</p>
              <p>Calories</p>
            </StyledNutrientText>
        </StyledNutrientWrapper>
        <StyledNutrientWrapper>
        <NutrientIconWrapper $bgColor="#4AB8FF1A">
        <img src={IconChicken} alt="icon chicken" />
        </NutrientIconWrapper>
            <StyledNutrientText>
              <p>365g</p>
              <p>Glucides</p>
            </StyledNutrientText>
        </StyledNutrientWrapper>
        <StyledNutrientWrapper>
        <NutrientIconWrapper $bgColor="#fff8e2">     
            <img src={IconApple} alt="apple" />
        </NutrientIconWrapper>
            <StyledNutrientText>
              <p>365g</p>
              <p>Protéines</p>
            </StyledNutrientText>
        </StyledNutrientWrapper>
        <StyledNutrientWrapper>
          <NutrientIconWrapper $bgColor="#FD51811A">
              <img src={IconCheeseburger} alt="icon cheeseburger" />
          </NutrientIconWrapper>
            <StyledNutrientText>
              <p>365g</p>
              <p>Lipides</p>
            </StyledNutrientText>
        </StyledNutrientWrapper>

    </StyledNutrientsWrapper>
  )
}
export default Nutrients;