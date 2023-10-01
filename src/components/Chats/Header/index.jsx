import Button from "../../Button";

import {
  Bg,
  BgImg,
  Container,
  Contents,
  HeaderInfo,
  NowRegister,
  Subtitle,
  Title,
  Wrapper,
} from "./style";

const Header = () => {
  return (
    <Bg>
      <Container className="container">
        <Wrapper $pt={39} $pb={30}>
          <Title>Название мероприятия</Title>
          <Subtitle>Подпись к названию</Subtitle>
          <Contents>
            <HeaderInfo>
              Узнайте самые востребованные профессии, на которые более 113 тысяч
              вакансий
            </HeaderInfo>
            <HeaderInfo>Выберите подходящую именно для вас</HeaderInfo>
            <HeaderInfo>
              Сделайте первые шаги к возможности выйти на доход более 100 тысяч
              рублей
            </HeaderInfo>
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
        <BgImg></BgImg>
      </Container>
    </Bg>
  );
};

export default Header;
