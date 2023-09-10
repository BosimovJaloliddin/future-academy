import { styled } from "styled-components";

const Container = styled.div`
  margin-top: 116px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color-title);
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Num = styled.h1`
  letter-spacing: 12px;
  span {
    font-size: 120px;
    font-weight: 800;
    margin: 42px 0 0 0;
    color: #ffffff;
  }
  .box-one {
    text-shadow: 0 0 10px #f7d24d;
  }
  .box-two {
    text-shadow: 0 0 10px #4dcaf7;
  }
  .box-there {
    text-shadow: 0 0 10px #4e67cb;
  }
`;
const NumInfo = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color-title);
`;

export { Container, Title, Wrapper, Content, Num, NumInfo };
