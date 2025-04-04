import styled from "styled-components";
import Logo from "../assets/logo/logo_sportsee.svg";

function Header() {
  return (
    <StyledHeader>
      <StyledLogo>
        <img src={Logo} alt="SportSee" height={60} />
      </StyledLogo>
        <Nav>
            <Ul>
                <Li>
                    <a>Accueil</a>
                </Li>
                <Li>
                    <a>Profil</a>
                </Li>
                <Li>
                    <a>Réglage</a>
                </Li>
                <Li>
                    <a>Communauté</a>
                </Li>
            </Ul>            
        </Nav>
    </StyledHeader>
  )
}

/* styled components */
const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #020203;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StyledLogo = styled.h1`
  all: unset;
  line-height: 0;
`;

const Nav = styled.nav`
    background-color: #000;
    width: max-content;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-top: auto;
    width: 80%;
`;

const Li = styled.li`
  padding: 10px;
  color: #fff;
`;

export default Header;