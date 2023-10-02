import { styled } from "styled-components";

const Container = styled.div`
  margin-top: 120px;
`;
const Collaps = styled.div``;
const Wrapper = styled.div`
  margin-bottom: 20px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 17px 30px;
  border-radius: 6px;
  background-color: red;
  cursor: pointer;
`;
const Title = styled.h4``;
const WrapperInfo = styled.div`
  overflow-y: hidden;
  height: 0;
  transition: all 2s ease;
`;
const Info = styled.p`
  height: 100%;
  background-color: #ffffff;
  padding: 17px 30px;
`;
const Icon = styled.div``;

export { Container, Collaps, Wrapper, Content, Title, WrapperInfo, Info, Icon };
