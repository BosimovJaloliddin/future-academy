import { Logo, Nav, NavItems, NavItem, Icon, Bg } from "./style.js";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar.jsx";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const active = (title) => {
    return location.pathname === title ? true : false;
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
        </Nav>
      </Bg>
      <Outlet />
    </>
  );
};

export default Navbar;
