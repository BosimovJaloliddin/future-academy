import { styled } from "styled-components";

const Container = styled.div``;
const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color-title);

  margin-top: 38px;
`;
const Wrapper = styled.div`
  display: ${({ $fx }) => $fx && $fx};
  justify-content: space-between;
  gap: 3%;
  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
`;
const Content = styled.div`
  flex: 0 0 ${({ $f }) => ($f ? `${$f}%` : "40%")};
  max-width: ${({ $f }) => ($f ? `${$f}%` : "40%")};
`;

export { Container, Title, Wrapper, Content };
