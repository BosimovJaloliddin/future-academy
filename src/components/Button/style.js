import { styled } from "styled-components";

const getColor = ({ $btn }) => {
  return {
    dark: "#00093C",
    coral: "#ffffff",
    blue: "#00093C",
    black: "#00093C",
  }[$btn];
};
const getBg = (props) => {
  return {
    dark: "#ffffff",
    coral: "#F7941D",
    blue: "none",
    black: "none",
  }[props.$btn];
};
const getBorder = ({ $btn }) => {
  return {
    dark: " 1px solid #00093c",
    coral: "1px solid #F7941D",
    blue: "1px solid #00093C",
    black: "1px solid #00093C",
  }[$btn];
};
const hoverColor = ({ $btn }) => {
  return {
    dark: "#000000",
    coral: "#ffffff",
    blue: "#ffffff",
    black: "#ffffff",
  }[$btn];
};
const hoverBg = ({ $btn }) => {
  return {
    coral: "#FFAE4D",
    blue: "#27AAE1",
    black: "#000000",
  }[$btn];
};
const hoverBorder = ({ $btn }) => {
  return {
    dark: " 1px solid #00093c",
    coral: "1px solid #FFAE4D",
    blue: "1px solid #27AAE1",
    black: "1px solid #000000",
  }[$btn];
};
const activeBg = ({ $btn }) => {
  return {
    dark: "#00093c",
  }[$btn];
};
const Btn = styled.button`
  display: inline-block;
  width: ${({ $w }) => $w && $w};

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  padding: 15px 19px;

  background-color: ${getBg};
  color: ${getColor};
  border: ${getBorder};
  border-radius: 5px;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${hoverColor};
    background-color: ${hoverBg};
    border: ${hoverBorder};
    box-shadow: ${({ $btn }) =>
      $btn == "dark" && `0 0 12px rgba(39, 170, 225, 0.8 )`};
  }

  &:active {
    transform: scale(0.96);
    background-color: ${activeBg};
    color: var(--text-color-white);
  }
`;

export { Btn };
