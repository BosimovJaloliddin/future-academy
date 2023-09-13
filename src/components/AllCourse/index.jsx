import Category from "../Category";
import { Container, Content, Title, Wrapper } from "./style";

const AllCourse = () => {
  return (
    <Container className="container">
      <Title>Все программы обучения</Title>
      <Wrapper $fx="flex" $mt={55}>
        <Content $f={25}>1</Content>
        <Content $f={72}>
          <Category />
        </Content>
      </Wrapper>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default AllCourse;
