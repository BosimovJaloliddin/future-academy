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
            {navbar.map(({ id, path, icon, title, isPrivate }) => {
              return (
                !isPrivate && (
                  <NavItem
                    key={id}
                    onClick={() => navigate(path)}
                    $active={active(path)}
                    className="nav-item"
                  >
                    {icon && icon}
                    {title}
                  </NavItem>
                )
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
