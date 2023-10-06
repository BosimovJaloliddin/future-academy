import { styled } from "styled-components";

const Wrapper = styled.div`
  margin-top: 106px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;
const InfoItem = styled.div`
  position: relative;
  flex: 0 0 20%;
  max-width: 20%;

  @media (max-width: 1200px) {
    display: none;
  }
`;
const WrapTabs = styled.div`
  flex: 0 0 70%;
  max-width: 70%;
`;

export { InfoItem, Wrapper, WrapTabs };
