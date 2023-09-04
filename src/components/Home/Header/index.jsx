import { HeaderImg, Wrapper, Contents, Content } from "./style.js";

const Header = () => {
  return (
    <Wrapper>
      <HeaderImg>
        <Contents className="container">
          <Content bg="true">
            <h1>Образовательная платформа</h1>
            <h1>ХОД Future Academy</h1>
            <p>Актуальные знания для новичков и профессионалов</p>
          </Content>
          <Content></Content>
        </Contents>
      </HeaderImg>
    </Wrapper>
  );
};

export default Header;
