import { styled } from "styled-components";
import { ReactComponent as star } from "../../assets/icons/star.svg";
import { ReactComponent as arrow } from "../../assets/icons/arrow-right.svg";

const Bg = styled.div`
  background-color: #00093c;
  padding: 62px 0;
  margin-top: 100px;
`;
const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--text-color-white);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 4rem;
`;
const BoxSlider = styled.div`
  flex: 0 0 88%;
  max-width: 88%;
  overflow: hidden;
`;

const SliderItems = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.6s ease;

  gap: 2%;

  transform: ${({ $size }) =>
    $size ? `translateX(${$size}%)` : "translateX(0%)"};
`;
const SliderItem = styled.div`
  flex: 0 0 23%;
  max-width: 23%;

  display: flex;
  flex-direction: ${({ $fd }) => $fd && $fd};

  padding: 20px;
  border-radius: 20px;
  background-color: var(--text-color-white);
  color: black;
`;
const Btn = styled.button`
  flex: 0 0 5%;
  max-width: 3%;

  height: 40px;
  background-color: #ffffff;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 8px #ffffff;
  }
`;

const Content = styled.div`
  display: ${({ $fx }) => $fx && $fx};
  flex-direction: ${({ $fd }) => $fd && $fd};
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : "6px")};
  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
`;
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  border: 3px solid #00093c;
`;
const UserInfo = styled.h6`
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color-title);
  margin: 0;
`;
const UserCours = styled.p`
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color-subtitle);

  margin-top: 6px;
`;
const UserComment = styled.p`
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  margin-top: 8px;
  color: var(--text-color-title);
`;

const Icon = styled.div``;
Icon.Star = styled(star)`
  width: 22px;
  height: 22px;
`;
Icon.Arrow = styled(arrow)`
  width: 12px;
  height: 12px;
  transform: ${({ $rotate }) => $rotate && `rotate(180deg)`};
  path {
    fill: #222222;
  }
`;

export {
  Bg,
  Title,
  Wrapper,
  BoxSlider,
  SliderItems,
  SliderItem,
  Btn,
  Content,
  UserImg,
  UserInfo,
  UserCours,
  UserComment,
  Icon,
};
