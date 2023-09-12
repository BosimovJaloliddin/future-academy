import { Content, Info, Input, Wrapper } from "./style";
import Cookie from "../Cookie";
import Button from "../Button";

const LeaveAplication = () => {
  return (
    <div className="container">
      <Wrapper>
        <Content $f={55}>
          <Cookie
            data={{
              wTop: -90,
              wLeft: 0,
              widthC: 270,
              heightC: 290,
              widthM: 389,
              heightM: 190,
              title: "Помочь с выбором?",
              subtitle:
                "Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы и подберут подходящий вариант обучения.",
              comment: "",
              top: 0,
              left: 260,
            }}
          />
        </Content>
        <Content $f={40} $fx="flex" $fd="column">
          <Input $f={100} type={"text"} placeholder="Ваше имя" />
          <Content $mt={20} $fx="flex" $gap={4}>
            <Input $f={48} type={"text"} placeholder="Ваш телефон" />
            <Input $f={48} type={"text"} placeholder="Ваш e-mail" />
          </Content>
          <Content $mt={18} $fx="flex" $f={100} $gap={4}>
            <Info $f={48}>
              Нажимая на кнопку, я соглашаюсь на обработку персональных данных и
              с правилами пользования Платформой
            </Info>
            <Content $f={48}>
              <Button
                data={{ type: "coral", title: "Отправить", width: "100%" }}
              />
            </Content>
          </Content>
        </Content>
      </Wrapper>
    </div>
  );
};

export default LeaveAplication;
