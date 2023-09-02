import { styled } from "styled-components";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as contact } from "../../assets/icons/contact.svg";

const Wrapper = styled.div`
  /* display: flex; */
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
`;
const Logo = styled.div`
  flex: 0 0 15%;
  max-width: 15%;
  text-align: center;
  a {
    font-size: 32px;
    font-weight: 800;
    text-decoration: none;
    color: var(--text-color-title);
  }
`;
const NavItems = styled.ul`
  flex: 0 0 85%;
  max-width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;
const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  a {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-color-title);
    line-height: 17px;
    letter-spacing: 0em;
    text-decoration: none;
  }
`;

const Icon = styled.div``;

Icon.Location = styled(location)`
  /* color: red; */
`;
Icon.Login = styled(contact)`
  /* color: red; */
`;

export { Wrapper, Nav, Logo, NavItems, NavItem, Icon };
