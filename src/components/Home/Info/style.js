import { css, styled } from "styled-components";
import { ReactComponent as arrow } from "../../../assets/icons/arrow-right.svg";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
`;

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  border-radius: 20px;
`;

const ContentOne = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span 4;
  background-color: var(--bg-color-c5ddff);
  ${style}

  @media (max-width:992px) {
    grid-column: 1 / span 4;
    grid-row: 1 / span 2;
  }
`;
const ContentTwo = styled.div`
  grid-column: 3 / span 1;
  grid-row: 1 / span 2;
  background-color: var(--bg-color-b8efcf);
  ${style}

  @media (max-width:992px) {
    grid-column: 1 / span 2;
    grid-row: 3 / span 1;
  }
`;
const ContentThere = styled.div`
  grid-column: 4 / span 1;
  grid-row: 1 / span 2;
  background-color: grey;
  background-color: var(--bg-color-ffeef6);
  ${style}

  @media (max-width:992px) {
    grid-column: 3 / span 2;
    grid-row: 3 / span 1;
  }
`;
const ContentFour = styled.div`
  grid-column: 3 / span 2;
  grid-row: 3 / span 2;
  background-color: coral;
  background-color: var(--bg-color-ffe38e);
  ${style}

  @media (max-width:992px) {
    grid-column: 1 / span 4;
    grid-row: 4 / span 1;
  }
`;

const Img = styled.img`
  width: ${({ $size }) => $size && `${$size}px`};
  height: ${({ $size }) => $size && `${$size}px`};
`;
const Title = styled.h3`
  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--text-color-title);

  margin-top: ${({ $mt }) => ($mt ? `${$mt}px` : "0")};
`;
const Subtitle = styled.p`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  padding: 0 40px;
  color: var(--text-color-subtitle);
  margin-top: ${({ $mt }) => ($mt ? `${$mt}px` : "0")};
`;

const Btn = styled.button`
  width: 222px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 2px solid #00093c;
  background-color: var(--bg-color-c5ddff);
  margin-top: 48px;

  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #00093c;

  cursor: pointer;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.96);
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ $fd }) => $fd && $fd};
  padding: ${({ $pad }) => $pad && "24px"};
`;

const Icon = styled.div``;

Icon.Arrow = styled(arrow)``;

export {
  Wrapper,
  ContentOne,
  ContentTwo,
  ContentThere,
  ContentFour,
  Img,
  Title,
  Subtitle,
  Btn,
  Icon,
  Box,
};
