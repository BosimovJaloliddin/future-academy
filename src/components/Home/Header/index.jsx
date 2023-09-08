import { HeaderImg, Contents, Content } from "./style.js";

const Header = () => {
  return (
    <HeaderImg>
      <Contents className="container">
        <Content $bg="true">
          <h1>Образовательная платформа</h1>
          <h1>ХОД Future Academy</h1>
          <p>Актуальные знания для новичков и профессионалов</p>
        </Content>
        <Content></Content>
      </Contents>
    </HeaderImg>
  );
};

export default Header;
