import { styled } from "styled-components";

const WrapCookie = styled.div`
  display: flex;
  flex-direction: column;
  gap: -100px;
  position: absolute;
  top: ${({ $wTop }) => $wTop && `${$wTop}px`};
  left: ${({ $wLeft }) => $wLeft && `${$wLeft}px`};
`;
const CookieMessage = styled.div`
  position: relative;
`;
const CookieStyle = styled.img`
  position: relative;
  left: -30px;
  width: ${({ $wC }) => ($wC ? `${$wC}px` : "160px")};
  height: ${({ $hC }) => ($hC ? `${$hC}px` : "190px")};
  z-index: 3;
`;
const Message = styled.img`
  position: absolute;
  top: ${({ $top }) => ($top ? `${$top}px` : "0")};
  left: ${({ $left }) => ($left ? `${$left}px` : "0")};
  width: ${({ $wM }) => ($wM ? `${$wM - 30}px` : "80px")};
  height: ${({ $hM }) => ($hM ? `${$hM - 30}px` : "180px")};
`;
const Info = styled.div`
  width: ${({ $wM }) => ($wM ? `${$wM - 30}px` : "80px")};
  height: ${({ $hM }) => ($hM ? `${$hM - 30}px` : "180px")};

  position: absolute;
  top: ${({ $top }) => ($top ? `${$top}px` : "0")};
  left: ${({ $left }) => ($left ? `${$left}px` : "0")};
  padding-top: 10px;
  padding-left: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export { WrapCookie, CookieMessage, CookieStyle, Message, Info };
