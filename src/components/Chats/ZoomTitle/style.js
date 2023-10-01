import { styled } from "styled-components";
import { ReactComponent as x } from "../../../assets/icons/zoomX.svg";
import { ReactComponent as rotate } from "../../../assets/icons/zoomRotate.svg";
import { ReactComponent as triangle } from "../../../assets/icons/zoomTriangle.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2%;
  margin-top: 100px;
`;
const Wrapper = styled.div`
  position: relative;
  flex: 0 0 ${({ $f }) => $f && `${$f}%`};
  max-width: ${({ $f }) => $f && `${$f}%`};
`;
const Content = styled.div``;
const Title = styled.h2`
  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 17px;
  color: var(--text-color-title);
`;
const Subtitle = styled.p`
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 14px;
  color: var(--text-color-title);
`;

const Icon = styled.div``;
Icon.X = styled(x)``;
Icon.Rotate = styled(rotate)``;
Icon.Triangle = styled(triangle)``;

export { Container, Wrapper, Content, Title, Subtitle, Icon };
