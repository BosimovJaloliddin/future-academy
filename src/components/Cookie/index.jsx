import CookieImg from "../../assets/icons/cookie.png";
import CookieInfoImg from "../../assets/icons/cookie-info.png";
import { CookieMessage, WrapCookie, Message, CookieStyle, Info } from "./style";

const Cookie = (prop) => {
  const { widthC, heightC, widthM, heightM } = prop.data;
  return (
    <WrapCookie>
      <CookieMessage>
        <Message $wM={widthM} $hM={heightM} src={CookieInfoImg} alt="cookie" />
        <Info $wM={widthM} $hM={heightM}>
          <span>
            <b>Кем вы хотите стать?</b>
          </span>
          <span>Пора найти себя и выбрать подходящий курс :</span>
          <span>Удачи!</span>
        </Info>
      </CookieMessage>
      <CookieStyle $wC={widthC} $hC={heightC} src={CookieImg} alt="cookie" />
    </WrapCookie>
  );
};

export default Cookie;
