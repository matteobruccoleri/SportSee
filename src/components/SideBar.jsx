import styled from "styled-components";

import IconYoga from "../assets/icons/yoga.svg";
import IconNageurs from "../assets/icons/nageur.svg";
import IconCycliste from "../assets/icons/cycliste.svg";
import IconAlteres from "../assets/icons/alteres.svg";

function Sidebar() {
  return (
      <Nav>
        <Ul>
          <Li>
            <img src={IconYoga} alt="Yoga" />
          </Li>
          <Li>
            <img src={IconNageurs} alt="Swim" width={36} />
          </Li>
          <Li>
            <img src={IconCycliste} alt="Cycle" />
          </Li>
          <Li>
            <img src={IconAlteres} alt="Dumbbel" />
          </Li>
        </Ul>
        <Copyright>Copyright, SportSee 2020</Copyright>
      </Nav>
  )
}

const Nav = styled.nav`
    background-color: #000;
    width: max-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: auto;
`;

const Li = styled.li`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
`;

const Copyright = styled.p`
  color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  transform: rotate(-180deg);
  writing-mode: vertical-rl;
  margin-top: auto;
`;

export default Sidebar;