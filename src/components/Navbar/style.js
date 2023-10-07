import { styled } from "styled-components";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as user } from "../../assets/icons/nav-user.svg";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { ReactComponent as bar } from "../../assets/icons/bar.svg";

const Bg = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  background-color: #00093c;
  max-height: 90px;
  z-index: 10;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
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

  @media (max-width: 992px) {
    display: none;
  }
`;
const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;

  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${({ $active }) => ($active ? "red" : "var(--text-color-white)")};
  line-height: 17px;
  letter-spacing: 0em;
  text-decoration: none;
  cursor: pointer;

  a {
    color: ${({ $active }) => ($active ? "red" : "var(--text-color-white)")};
    line-height: 17px;
    letter-spacing: 0em;
    text-decoration: none;
  }
`;

const Menu = styled.div`
  display: ${({ $dis }) => $dis && $dis};
  position: fixed;
  right: 0;
  width: 40%;
  background-color: red;

  @media (max-width: 478px) {
    width: 100%;
    height: 100%;
  }
`;
const MenuItems = styled.div``;
const MenuItem = styled.div``;

const Icon = styled.div``;

Icon.Location = styled(location)`
  path {
    fill: #ffffff;
  }
`;
Icon.User = styled(user)``;
Icon.Bar = styled(bar)``;
Icon.Logo = styled(logo)`
  width: 80px;
  height: 60px;
  path {
    fill: #ffffff;
  }
`;

export { Bg, Nav, Logo, NavItems, NavItem, Menu, MenuItems, MenuItem, Icon };
