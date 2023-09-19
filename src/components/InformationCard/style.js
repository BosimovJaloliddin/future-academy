import { styled } from "styled-components";
import { ReactComponent as home } from "../../assets/icons/big-home.svg";

const Container = styled.div`
  max-width: 430px;
  max-height: 230px;
  padding: 27px 31px 38px 30px;
  border: 0;
  border-radius: 20px;
  background-color: ${({ $bg }) => $bg && $bg};
  box-shadow: 0 0 5px ${({ $bg }) => $bg && $bg};
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 18px ${({ $bg }) => $bg && $bg};
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-top: ${({ $gap }) => $gap && `${$gap}px`};
`;
const CardName = styled.span`
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: #4f4f4f;
`;
const Title = styled.h2`
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
  color: #00093c;
`;
const Subtitle = styled.p`
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: #4f4f4f;
  margin-top: 12px;
`;
const CourseMonth = styled.span`
  display: block;
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  margin-top: 25px;
`;

const Icon = styled.div``;
Icon.Home = styled(home)`
  width: 26.04px;
  height: 42px;
`;

export { Container, Wrapper, Title, Subtitle, Icon, CardName, CourseMonth };
