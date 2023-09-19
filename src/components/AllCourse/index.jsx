import Category from "../Category";
import InformationCard from "../InformationCard";
import Sorting from "./Sorting";
import LeaveAplication from "../LeaveAplication";
import Footer from "../Footer";
import { Container, Content, Title, Wrapper } from "./style";

const AllCourse = () => {
  return (
    <>
      <Container className="container">
        <Title>Все программы обучения</Title>
        <Wrapper $fx="flex" $mt={55}>
          <Content $f={27}>
            <Sorting />
          </Content>
          <Content $f={70}>
            <Category />
            <Wrapper $fx="flex" $fw="wrap" $jc="flex-start" $mt={40}>
              {[
                "#C7EEFF",
                "#FFCE94",
                "#FFE38E",
                "#DDDDFF",
                "#B8EFCF",
                "#C7EEFF",
                "#C5DDFF",
                "#FFE9A8",
                "#FFEEF6",
                "#DDDDFF",
              ].map((bg, i) => {
                return (
                  <Content key={i} $f={48} $mb={20}>
                    <InformationCard bg={bg} />
                  </Content>
                );
              })}
            </Wrapper>
          </Content>
        </Wrapper>
      </Container>
      <LeaveAplication />
      <Footer />
    </>
  );
};

export default AllCourse;
