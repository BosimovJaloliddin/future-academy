import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar.jsx";
import {
  Logo,
  Nav,
  NavItems,
  NavItem,
  Icon,
  Bg,
  Menu,
  MenuItems,
  MenuItem,
} from "./style.js";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setMenu] = useState("none");
  const active = (title) => {
    return location.pathname === title ? true : false;
  };

  const onMenu = () => {
    menu === "none" ? setMenu("block") : setMenu("none");
  };

  return (
    <>
      <Bg>
        <Nav className="container">
          <Logo onClick={() => navigate("/home")}>
            <Icon.Logo />
          </Logo>
          <NavItems className="nav-items">
            {navbar.map(({ id, path, title, hidden }) => {
              return (
                !hidden && (
                  <NavItem key={id} $active={active(path)} className="nav-item">
                    <NavLink to={path}>{title}</NavLink>
                  </NavItem>
                )
              );
            })}
            <NavItem className="nav-item">
              <Icon.Location /> Нижний Новгород
            </NavItem>
            <NavItem className="nav-item">8 800 950-33-98</NavItem>

            <NavItem
              onClick={() => navigate("/login")}
              $active={active("/login")}
              className="nav-item"
            >
              <Icon.User />
              <NavLink>Войти</NavLink>
            </NavItem>
          </NavItems>
          <Icon.Bar onClick={onMenu} />
        </Nav>
        <Menu $dis={menu}>
          <MenuItems>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
            <MenuItem>4</MenuItem>
            <MenuItem>5</MenuItem>
          </MenuItems>
        </Menu>
      </Bg>
      <Outlet />
    </>
  );
};

export default Navbar;
