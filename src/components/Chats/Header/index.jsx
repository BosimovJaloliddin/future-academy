import Button from "../../Button";
// import headerImg from "../../../assets/image/chat-header-img.png";

import {
  Bg,
  BgImg,
  Container,
  Contents,
  HeaderInfo,
  //   Img,
  NowRegister,
  Subtitle,
  Title,
  Wrapper,
} from "./style";

const Header = () => {
  return (
    <Bg>
      <Container className="container">
        <Wrapper $f={53} $pt={39} $pb={30}>
          <Title>Название мероприятия</Title>
          <Subtitle>Подпись к названию</Subtitle>
          <Contents>
            <HeaderInfo>1</HeaderInfo>
            <HeaderInfo>2</HeaderInfo>
            <HeaderInfo>3</HeaderInfo>
          </Contents>
          <NowRegister>Запишись сейчас</NowRegister>
          <Button
            data={{
              type: "coral",
              title: "Записаться на интенсив",
              width: 286,
            }}
          />
        </Wrapper>
        <BgImg $f={45}></BgImg>
      </Container>
    </Bg>
  );
};

export default Header;
