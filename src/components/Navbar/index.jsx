import { Logo, Nav, NavItems, NavItem, Icon, Bg } from "./style.js";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Bg>
        <Nav className="container">
          <Logo onClick={() => navigate("/home")}>
            <Icon.Logo />
          </Logo>
          <NavItems className="nav-items">
            <NavItem
              onClick={() => navigate("/all_course")}
              className="nav-item"
            >
              Все курсы
            </NavItem>
            <NavItem className="nav-item">Мероприятия</NavItem>
            <NavItem className="nav-item">Базы знаний</NavItem>
            <NavItem className="nav-item">Базы знаний</NavItem>
            <NavItem className="nav-item">
              <Icon.Location />
              Нижний Новгород
            </NavItem>
            <NavItem className="nav-item">
              <Icon.Login />8 800 950-33-98
            </NavItem>
            <NavItem className="nav-item">Войти</NavItem>
          </NavItems>
        </Nav>
      </Bg>
      <Outlet />
    </>
  );
};

export default Navbar;
