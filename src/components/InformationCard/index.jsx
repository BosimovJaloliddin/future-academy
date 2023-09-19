import {
  CardName,
  Container,
  CourseMonth,
  Icon,
  Subtitle,
  Title,
  Wrapper,
} from "./style";

const InformationCard = (prop) => {
  return (
    <Container $bg={prop?.bg}>
      <CardName>Программа</CardName>
      <Wrapper $gap={16}>
        <Icon.Home />
        <Title>«Разработка мобильных приложений»</Title>
      </Wrapper>
      <Subtitle>
        Разработчик мобильных приложений создаёт приложения, которыми люди
        ежедневно пользуются на смартфонах, умных часах и планшетах.{" "}
      </Subtitle>
      <CourseMonth>24 месяца</CourseMonth>
    </Container>
  );
};

export default InformationCard;
