import { InfoItem, Wrapper, WrapTabs } from "./style";
import Cookie from "../../Cookie";
import Category from "../../Category";

const HomeCategory = () => {
  return (
    <Wrapper className="container">
      <InfoItem>
        <Cookie
          data={{
            widthC: 168,
            heightC: 188,
            widthM: 260,
            heightM: 190,
            title: "Кем вы хотите стать? ",
            subtitle: "Пора найти себя и выбрать подходящий курс :)",
            comment: "Удачи!",
            top: -130,
            left: 20,
          }}
        />
      </InfoItem>
      <WrapTabs>
        <Category />
      </WrapTabs>
    </Wrapper>
  );
};

export default HomeCategory;
