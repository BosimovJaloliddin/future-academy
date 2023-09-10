import {
  Content,
  Month,
  Number,
  Subtitle,
  Title,
  Wrapper,
  Btn,
  Icon,
} from "./style";

const Announcement = () => {
  return (
    <div className="container">
      <Wrapper>
        <Content fx={10}>
          <Number>25</Number>
          <Month>нояабря</Month>
        </Content>
        <Content fx={60}>
          <Title>День открытых дверей </Title>
          <Subtitle>
            Приглашаем всех желающих на бесплатную экскурсию в мир
            востребованных профессий и полезных навыков
          </Subtitle>
        </Content>
        <Content fx={20}>
          <Btn>
            Записаться <Icon.Arrow />
          </Btn>
        </Content>
      </Wrapper>
    </div>
  );
};

export default Announcement;
