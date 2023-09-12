import CookieImg from "../../assets/icons/cookie.png";
import CookieInfoImg from "../../assets/icons/cookie-info.png";
import { CookieMessage, WrapCookie, Message, CookieStyle, Info } from "./style";

const Cookie = (prop) => {
  const {
    wTop,
    wLeft,
    widthC,
    heightC,
    widthM,
    heightM,
    title,
    subtitle,
    comment,
    top,
    left,
  } = prop.data;
  console.log(wTop);
  return (
    <WrapCookie $wTop={wTop} $wLeft={wLeft}>
      <CookieMessage>
        <Message
          $top={top}
          $left={left}
          $wM={widthM}
          $hM={heightM}
          src={CookieInfoImg}
          alt="cookie"
        />
        <Info $top={top} $left={left} $wM={widthM} $hM={heightM}>
          <span>
            <b>{title}</b>
          </span>
          <span>{subtitle}</span>
          <span>{comment}</span>
        </Info>
      </CookieMessage>
      <CookieStyle $wC={widthC} $hC={heightC} src={CookieImg} alt="cookie" />
    </WrapCookie>
  );
};

export default Cookie;
