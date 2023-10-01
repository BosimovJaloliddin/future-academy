import Cookie from "../../Cookie";
import { Container, Content, Icon, Subtitle, Title, Wrapper } from "./style";

const ZoomTitle = () => {
  return (
    <Container className="container">
      <Wrapper $f={30}>
        <Cookie
          data={{
            wTop: 60,
            wLeft: -10,
            widthC: 168,
            heightC: 188,
            widthM: 360,
            heightM: 130,
            title: false,
            subtitle: "Текст, призывающий записатьсяна мероприятие",
            comment: "",
            top: -70,
            left: 10,
          }}
        />
      </Wrapper>
      <Wrapper $f={22}>
        <Content>
          <Icon.X />
          <Title>Заголовок</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
            elit, egestas ut feugiat id, laoreet volutpat risus. Cras
            condimentum, ligula eget
          </Subtitle>
        </Content>
      </Wrapper>
      <Wrapper $f={22}>
        <Icon.X />
        <Title>Заголовок</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
          elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum,
          ligula eget
        </Subtitle>
      </Wrapper>
      <Wrapper $f={22}>
        <Icon.X />
        <Title>Заголовок</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
          elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum,
          ligula eget
        </Subtitle>
      </Wrapper>
    </Container>
  );
};

export default ZoomTitle;
