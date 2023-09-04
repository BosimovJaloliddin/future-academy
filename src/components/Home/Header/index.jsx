import { HeaderImg, Wrapper, Contents, Content } from "./style.js";
import Img from "../../../assets/image/header-img.png";

const Header = () => {
  return (
    <Wrapper>
      <HeaderImg src={Img} />
      <Contents className="container">
        <Content>2</Content>
        <Content>1</Content>
      </Contents>
    </Wrapper>
  );
};

export default Header;
