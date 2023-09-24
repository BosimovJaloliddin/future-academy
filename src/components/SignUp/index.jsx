import Button from "../Button";
import { Container, Icon, Input, Subtitle, Wrapper } from "./style";
const SignUp = () => {
  return (
    <>
      <Container>
        <Wrapper $mt={50} $fd="column" $gap={20}>
          <Input type="text" placeholder="name" />
          <Input type="text" placeholder="surname" />
          <Input type="text" placeholder="login" />
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="create password" />
        </Wrapper>
        <Subtitle>Войти с помощью соцсетей:</Subtitle>
        <Wrapper $mt={19} $fx="flex" $gap={30} $jc="center">
          <a href="https://t.me/bosimovjaloliddin">
            <Icon.Facebook />
          </a>
          <a href="https://youtu.be/M4WZc87uas8?si=9j4pNn5UFGjmEuzQ">
            <Icon.Youtube />
          </a>
          <a href="https://instagram.com">
            <Icon.Instagram />
          </a>
          <a href="https://google.com">
            <Icon.Wkontakt />
          </a>
          <a href="https://t.me/bosimovjaloliddin">
            <Icon.Telegram />
          </a>
        </Wrapper>
        <Wrapper $mt={32} $mb={100} $jc="center">
          <Button data={{ type: "coral", title: "Войти", width: "180px" }} />
        </Wrapper>
      </Container>
    </>
  );
};

export default SignUp;
