import { Container, Content, Num, NumInfo, Title, Wrapper } from "./style";

const Statisticas = () => {
  return (
    <Container className="container">
      <Title>
        Актуальные знания от признанных экспертов рынка <br /> для новичков и
        практикующих специалистов.
      </Title>
      <Wrapper>
        <Content>
          <Num>
            <span className="box-one">6</span>
            <span className="box-two">0</span>
            <span className="box-there">0</span>
          </Num>
          <NumInfo>Курсов</NumInfo>
        </Content>
        <Content>
          <Num>
            <span className="box-one">8</span>
            <span className="box-two">2</span>
          </Num>
          <NumInfo>
            Ведущих <br /> преподавателей
          </NumInfo>
        </Content>
        <Content>
          <Num>
            <span className="box-one">1</span>
            <span className="box-two">47</span>
            <span className="box-there">95</span>
          </Num>
          <NumInfo>Выпускников</NumInfo>
        </Content>
      </Wrapper>
    </Container>
  );
};
export default Statisticas;
