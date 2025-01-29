import styled from "styled-components";

import IconApple from "../assets/icons/apple.svg";
import IconChicken from "../assets/icons/chicken.svg";
import IconEnergy from "../assets/icons/energy.svg";
import IconCheeseburger from "../assets/icons/cheeseburger.svg";

const StyledNutrientsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
`;
const StyledNutrientWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fcfcfc;
`;
const StyledNutrientText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
`;
function Nutrients() {
  return (
    <StyledNutrientsWrapper>
        <StyledNutrientWrapper>
            <img src={IconEnergy} alt="icon fire" />
            <StyledNutrientText>
              <p>365g</p>
              <p>Calories</p>
            </StyledNutrientText>
        </StyledNutrientWrapper>
        <StyledNutrientWrapper>
            <img src={IconApple} alt="apple" />
            <StyledNutrientText>
              <p>365g</p>
              <p>Glucides</p>
            </StyledNutrientText>
        </StyledNutrientWrapper>
        <StyledNutrientWrapper>
            <img src={IconChicken} alt="icon chicken" />
            <StyledNutrientText>
              <p>365g</p>
              <p>Protéines</p>
            </StyledNutrientText>
        </StyledNutrientWrapper>
        <StyledNutrientWrapper>
            <img src={IconCheeseburger} alt="icon cheeseburger" />
            <StyledNutrientText>
              <p>365g</p>
              <p>Lipides</p>
            </StyledNutrientText>
        </StyledNutrientWrapper>

    </StyledNutrientsWrapper>
  )
}
export default Nutrients;