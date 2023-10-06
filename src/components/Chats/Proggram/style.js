import { styled } from "styled-components";

const Container = styled.div`
  margin-top: 120px;
`;
const Collaps = styled.div``;
const Wrapper = styled.div`
  margin-bottom: 20px;
  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 17px 30px;
  border-radius: 6px;
  background-color: #ffffff;
  cursor: pointer;
`;
const Title = styled.h4`
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
const WrapperInfo = styled.div`
  overflow-y: hidden;
  height: 0;
  transition: all 1s ease;
`;
const Info = styled.p`
  height: 100%;
  background-color: #ffffff;
  padding: 17px 30px;

  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
const Icon = styled.div``;

export { Container, Collaps, Wrapper, Content, Title, WrapperInfo, Info, Icon };
