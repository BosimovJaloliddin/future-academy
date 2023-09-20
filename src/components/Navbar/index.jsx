import { Logo, Nav, NavItems, NavItem, Icon, Bg } from "./style.js";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
            {navbar.map((v) => {
              return (
                <NavItem
                  key={v.id}
                  onClick={() => navigate(v.path)}
                  $active={active(v.path)}
                  className="nav-item"
                >
                  {v.icon && v.icon}
                  {v.title}
                </NavItem>
              );
            })}
          </NavItems>
        </Nav>
      </Bg>
      <Outlet />
    </>
  );
};

export default Navbar;
