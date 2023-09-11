import { Content, ContentItems, Icon, Subtitle, Title, Wrapper } from "./style";

const CourseInfo = () => {
  return (
    <Wrapper className="container">
      <Title className="title">Добро пожаловать в Академию будущего ХОД</Title>
      <ContentItems>
        <Content>
          <Icon.Setting />
          <Subtitle className="subtitle">
            Передовой подход к образовательному процессу
          </Subtitle>
        </Content>
        <Content>
          <Icon.Book />
          <Subtitle className="subtitle">
            Непрерывное усовершенствование и пополнение базы курсов
          </Subtitle>
        </Content>
        <Content>
          <Icon.Lesson />
          <Subtitle className="subtitle">
            Только практикующие преподаватели
          </Subtitle>
        </Content>
        <Content>
          <Icon.User />
          <Subtitle className="subtitle">
            Сопровождение на всех этапах. От начала обучения до трудоустройства
          </Subtitle>
        </Content>
      </ContentItems>
    </Wrapper>
  );
};

export default CourseInfo;
