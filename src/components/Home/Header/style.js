import { styled } from "styled-components";
import Img from "../../../assets/image/header-img.png";

const HeaderImg = styled.div`
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  max-width: 100%;
`;
const Contents = styled.div`
  display: flex;
`;
const Content = styled.div`
  flex: 1;
  padding: 126px 60px 175px 0;
  h1 {
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    color: #00093c;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
  }
  p {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #00093c;
    margin-top: 41px;
  }
`;

export { HeaderImg, Contents, Content };
