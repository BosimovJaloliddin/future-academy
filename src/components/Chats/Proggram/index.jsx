import {
  Container,
  Collaps,
  Title,
  Content,
  Info,
  Wrapper,
  WrapperInfo,
} from "./style";

const Proggram = () => {
  const onCollaps = ({ target }) => {
    target.nextElementSibling.classList.toggle("collaps-active");
  };
  return (
    <Container className="container">
      <h1 className="title">Программа мероприятия</h1>
      <p className="subtitle" style={{ marginTop: "16px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit,
        egestas ut feugiat id, laoreet volutpat risus.
      </p>
      <Collaps>
        <Wrapper $mt={16}>
          <Content onClick={onCollaps}>
            <Title>День первый</Title>
          </Content>
          <WrapperInfo>
            <Info>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              dignissim, neque sit amet aliquam cursus, ante urna porta mauris,
              eget venenatis risus turpis ac nisl. Aenean blandit, nulla
              tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor
              mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui.
              Phasellus pellentesque vitae leo in dapibus. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis
              dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu
              sem id sem.
            </Info>
          </WrapperInfo>
        </Wrapper>
        <Wrapper>
          <Content onClick={onCollaps}>
            <Title>День первый</Title>
          </Content>
          <WrapperInfo>
            <Info>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              dignissim, neque sit amet aliquam cursus, ante urna porta mauris,
              eget venenatis risus turpis ac nisl. Aenean blandit, nulla
              tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor
              mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui.
              Phasellus pellentesque vitae leo in dapibus. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Suspendisse id aliquam Quisque id imperdiet metus, non
              semper dui. Phasellus pellentesque vitae leo in dapibus. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Suspendisse id aliquamnunc. Sed dignissim,
              nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet
              placerat arcu sem id sem.
            </Info>
          </WrapperInfo>
        </Wrapper>
        <Wrapper>
          <Content onClick={onCollaps}>
            <Title>День первый</Title>
          </Content>
          <WrapperInfo>
            <Info>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              dignissim, neque sit amet aliquam cursus, ante urna porta mauris,
              eget venenatis risus turpis ac nisl. Aenean blandit, nulla
              tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor
              mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui.
              Phasellus pellentesque vitae leo in dapibus. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis
              dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu
              sem id sem.
            </Info>
          </WrapperInfo>
        </Wrapper>
      </Collaps>
    </Container>
  );
};

export default Proggram;
