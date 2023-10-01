import { styled } from "styled-components";
import headerImg from "../../../assets/image/chat-header-img.png";

const Bg = styled.div`
  background-color: red;
`;
const Container = styled.div`
  width: 100%;
  max-height: 480px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2%;
`;
const Wrapper = styled.div`
  flex: 0 0 ${({ $f }) => $f && `${$f}%`};
  max-width: ${({ $f }) => $f && `${$f}%`};
  padding-bottom: ${({ $pb }) => $pb && `${$pb}px`};
  padding-top: ${({ $pt }) => $pt && `${$pt}px`};
`;
const Contents = styled.div`
  margin-top: 60px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const BgImg = styled.div`
  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 100%;
  height: 480px;
`;
const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 42px;
  font-weight: 700;
  line-height: 51px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;
const Subtitle = styled.h4`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  margin-top: 11px;
`;
const HeaderInfo = styled.p`
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;
const NowRegister = styled.div`
  font-family: "Montserrat";
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  margin-top: 40px;
  margin-bottom: 34px;
`;

export {
  Bg,
  Container,
  Wrapper,
  Contents,
  Img,
  BgImg,
  Title,
  Subtitle,
  HeaderInfo,
  NowRegister,
};
