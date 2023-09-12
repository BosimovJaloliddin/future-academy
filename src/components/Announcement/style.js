import { styled } from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow-right.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5%;
  padding: 28px 40px;
  background-color: #f7bc75;
  border-radius: 20px;
`;
const Content = styled.div`
  flex: 0 0 ${({ fx }) => (fx ? `${fx}%` : "30%")};
  max-width: ${({ fx }) => (fx ? `${fx}%` : "30%")};
  max-width: ${({ fx }) => (fx ? `${fx}%` : "30%")};
  display: flex;
  flex-direction: column;
`;
const Number = styled.h1`
  font-size: 100px;
  font-weight: 700;
  color: var(--text-color-title);
  letter-spacing: 4px;
  margin: 0;
`;
const Month = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: var(--text-color-title);
  margin: 0;
`;
const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color-title);
`;
const Subtitle = styled.p`
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color-subtitle);
  margin-top: 29px;
`;
const Btn = styled.button`
  max-width: 222px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 2px solid var(--text-color-title);
  background-color: #f7bc75;

  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color-title);

  cursor: pointer;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.96);
  }
`;

const Icon = styled.div``;

Icon.Arrow = styled(arrow)``;

export { Wrapper, Content, Number, Month, Title, Subtitle, Btn, Icon };
