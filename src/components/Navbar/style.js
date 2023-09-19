import { styled } from "styled-components";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as contact } from "../../assets/icons/contact.svg";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

const Bg = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  background-color: #00093c;
  max-height: 110px;
  z-index: 10;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px 40px;
`;
const Logo = styled.div`
  flex: 0 0 10%;
  max-width: 10%;
  text-align: left;
  cursor: pointer;
  a {
    font-size: 32px;
    font-weight: 800;
    text-decoration: none;
    color: var(--text-color-title);
  }
`;
const NavItems = styled.ul`
  flex: 0 0 90%;
  max-width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;
const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;

  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color-white);
  line-height: 17px;
  letter-spacing: 0em;
  text-decoration: none;
  cursor: pointer;
`;

const Icon = styled.div``;

Icon.Location = styled(location)`
  path {
    fill: #ffffff;
  }
`;
Icon.Login = styled(contact)`
  path {
    fill: #ffffff;
  }
`;
Icon.Logo = styled(logo)`
  path {
    fill: #ffffff;
  }
`;

export { Bg, Nav, Logo, NavItems, NavItem, Icon };