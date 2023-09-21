import { css, styled } from "styled-components";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as wkontakt } from "../../assets/icons/wkontakt.svg";
import { ReactComponent as telegram } from "../../assets/icons/telegram.svg";

const Container = styled.div`
  width: fit-content;
  padding-left: 100px;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ $fd }) => $fd && $fd};
  justify-content: ${({ $jc }) => $jc && $jc};
  gap: ${({ $gap }) => $gap && `${$gap}px`};
  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
  margin-bottom: ${({ $mb }) => $mb && `${$mb}px`};
`;
const Input = styled.input`
  width: 380px;
  height: 50px;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 400;
  padding-left: 19px;
  text-align: left;
  text-transform: capitalize;
  color: #4f4f4f;
  background-color: #dddfe6;
  border: 0;
  border-radius: 6px;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 7px #dddfe6;
  }
`;
const Subtitle = styled.p`
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 36px;
`;

const Icon = styled.div``;

const iconStyle = css`
  width: 28px;
  height: 28px;

  path {
    fill: #00093c;
  }

  &:hover {
    transform: scale(0.96);
  }
`;
Icon.Facebook = styled(facebook)`
  ${iconStyle}
`;
Icon.Youtube = styled(youtube)`
  ${iconStyle}
`;
Icon.Instagram = styled(instagram)`
  ${iconStyle}
`;
Icon.Wkontakt = styled(wkontakt)`
  ${iconStyle}
`;
Icon.Telegram = styled(telegram)`
  ${iconStyle}
`;

export { Container, Wrapper, Input, Subtitle, Icon };
