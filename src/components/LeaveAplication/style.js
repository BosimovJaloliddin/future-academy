import { styled } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  top: 40px;
  display: flex;
  align-items: center;
  gap: 5%;

  margin-top: 100px;
  padding: 40px 40px 40px 0;
  border-radius: 20px;
  background-color: var(--white);
`;
const Content = styled.div`
  position: relative;
  flex: 0 0 ${({ $f }) => $f && `${$f}%`};
  max-width: ${({ $f }) => $f && `${$f}%`};

  display: ${({ $fx }) => $fx && $fx};
  flex-direction: ${({ $fd }) => $fd && $fd};
  gap: ${({ $gap }) => $gap && `${$gap}%`};
  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
`;
const Input = styled.input`
  flex: 0 0 ${({ $f }) => $f && `${$f}%`};
  max-width: ${({ $f }) => $f && `${$f}%`};
  height: 50px;
  padding: 15px;
  border: 0;
  border-radius: 6px;
  background-color: #e6e7ec;
  outline: none;

  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;
const Info = styled.p`
  flex: 0 0 ${({ $f }) => $f && `${$f}%`};
  font-family: "Montserrat";
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
`;

export { Wrapper, Content, Input, Info };
