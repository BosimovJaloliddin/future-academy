import { useRef } from "react";
import { login } from "../../mock.js/login";
import Button from "../Button";
import { Container, Icon, Input, Subtitle, Wrapper } from "./style";

const SignIn = () => {
  const getLogin = () => {
    let res = login.find(({ login, password }) => {
      return (
        login.toLocaleLowerCase() ===
          logRef.current.value.toLocaleLowerCase() &&
        password === Number(pasRef.current.value)
      );
    });
    if (res) {
      localStorage.setItem("token", true);
      window.location.href = "/chats";
    } else {
      localStorage.setItem("token", false);
      alert("Login yoki parol xato!");
    }
  };
  const logRef = useRef();
  const pasRef = useRef();

  return (
    <>
      <Container>
        <Wrapper $mt={50} $fd="column" $gap={20}>
          <Input ref={logRef} name="login" type="text" placeholder="login" />
          <Input
            ref={pasRef}
            name="password"
            type="password"
            placeholder="password"
          />
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
          <Button
            type="button"
            onClick={getLogin}
            data={{ type: "coral", title: "Войти", width: "180px" }}
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default SignIn;
