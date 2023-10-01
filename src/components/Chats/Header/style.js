import { styled } from "styled-components";
import headerImg from "../../../assets/image/chat-header-img.png";

const Bg = styled.div`
  background-color: #00093c;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2%;
`;
const Wrapper = styled.div`
  flex: 0 0 53%;
  max-width: 53%;
  padding-bottom: ${({ $pb }) => $pb && `${$pb}px`};
  padding-top: ${({ $pt }) => $pt && `${$pt}px`};
`;
const Contents = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2%;
  margin-top: 60px;
`;
const BgImg = styled.div`
  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;
  flex: 0 0 45%;
  max-width: 45%;
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
  flex: 0 0 30%;
  max-width: 30%;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  padding-top: 16px;
  border-top: 2px solid #27aae1;
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
  BgImg,
  Title,
  Subtitle,
  HeaderInfo,
  NowRegister,
};
