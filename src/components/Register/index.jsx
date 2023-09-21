import { Container, NavTab, WrapTabs } from "./style";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Cookie from "../Cookie";
import Footer from "../Footer";

// const onChange = (key) => {
//   console.log(key);
// };
const items = [
  {
    key: "1",
    label: <NavTab>Вход</NavTab>,
    children: <SignIn />,
  },
  {
    key: "2",
    label: <NavTab>Регистрация</NavTab>,
    children: <SignUp />,
  },
];

const Register = () => {
  return (
    <>
      <Container>
        <Cookie
          data={{
            wTop: 230,
            wLeft: 30,
            widthC: 168,
            heightC: 188,
            widthM: 360,
            heightM: 130,
            title: false,
            subtitle:
              "Войдите в систему или зарегистрируйтесь, если у вас ещё нет аккаунта",
            comment: "",
            top: -70,
            left: 10,
          }}
        />
        <WrapTabs size="large" centered defaultActiveKey="1" items={items} />
      </Container>
      <Footer />
    </>
  );
};

export default Register;
