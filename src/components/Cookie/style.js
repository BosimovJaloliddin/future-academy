import { styled } from "styled-components";

const WrapCookie = styled.div`
  display: flex;
  flex-direction: column;
  gap: -100px;
`;
const CookieMessage = styled.div`
  position: relative;

  width: ${({ $wM }) => ($wM ? `${$wM}px` : "80px")};
  height: ${({ $hM }) => ($hM ? `${$hM}px` : "180px")};
`;
const CookieStyle = styled.img`
  position: relative;
  left: -30px;
  width: ${({ $wC }) => ($wC ? `${$wC}px` : "160px")};
  height: ${({ $hC }) => ($hC ? `${$hC}px` : "190px")};
  z-index: 3;
`;
const Message = styled.img``;
const Info = styled.div`
  width: ${({ $wM }) => ($wM ? `${$wM - 30}px` : "80px")};
  height: ${({ $hM }) => ($hM ? `${$hM - 30}px` : "180px")};

  position: absolute;
  top: 0;
  left: 0;
  padding-top: 20px;
  padding-left: 20px;

  display: flex;
  flex-direction: column;
  gap: 12px;
  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export { WrapCookie, CookieMessage, CookieStyle, Message, Info };
