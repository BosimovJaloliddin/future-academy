import { styled, css } from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as wkontakt } from "../../assets/icons/wkontakt.svg";
import { ReactComponent as telegram } from "../../assets/icons/telegram.svg";

const Bg = styled.div`
  background-color: #00093c;
  padding: 70px 0 56px 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5%;
`;
const Content = styled.div`
  flex: 0 0 ${({ $f }) => ($f ? `${$f}%` : "20%")};

  display: ${({ $fx }) => $fx && $fx};
  flex-direction: ${({ $fd }) => $fd && $fd};
  align-items: ${({ $ai }) => ($ai ? $ai : "center")};
  gap: ${({ $gap }) => $gap && `${$gap}px`};
  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
`;
const Title = styled.h4`
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color-white);

  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
`;
const Subtitle = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color-white);

  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
`;

const Icon = styled.div``;
Icon.Logo = styled(logo)`
  margin-top: 100px;
  path {
    fill: var(--white);
  }
`;

const iconStyle = css`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  padding: 4px;

  &:hover {
    box-shadow: 0 0 4px var(--white);
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

export { Bg, Wrapper, Content, Title, Subtitle, Icon };
