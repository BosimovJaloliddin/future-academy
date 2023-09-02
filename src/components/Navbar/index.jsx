import { Wrapper, Logo, Nav, NavItems, NavItem, Icon } from "./style.js";

const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo>
          <a href="#">Logo</a>
        </Logo>
        <NavItems className="nav-items">
          <NavItem className="nav-item">
            <a href="#">Все курсы</a>
          </NavItem>
          <NavItem className="nav-item">
            <a href="#">Мероприятия</a>
          </NavItem>
          <NavItem className="nav-item">
            <a href="#">Базы знаний</a>
          </NavItem>
          <NavItem className="nav-item">
            <a href="#">Базы знаний</a>
          </NavItem>
          <NavItem className="nav-item">
            <Icon.Location />
            <a href="#">Нижний Новгород</a>
          </NavItem>
          <NavItem className="nav-item">
            <Icon.Login />
            <a href="#">8 800 950-33-98 </a>
          </NavItem>
          <NavItem className="nav-item">
            <a href="#">Войти</a>
          </NavItem>
        </NavItems>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
