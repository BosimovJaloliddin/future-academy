import { styled } from "styled-components";
import { Tabs } from "antd";

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
`;

const BtnItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-top: 41px;
`;

const MainTabs = styled(Tabs)`
  flex: 0 0 70%;
  max-width: 70%;
`;
const TabWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  margin-left: 24px;
`;
const TabIcon = styled.div`
  flex: 0 0 40%;
  max-width: 40%;

  img {
    width: 100%;
  }
`;
const TabInfo = styled.div`
  flex: 0 0 50%;
  max-width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TabTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
`;
const TabSubtitle = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #4f4f4f;
`;

export {
  MainTabs,
  BtnItems,
  InfoItem,
  Wrapper,
  TabWrap,
  TabIcon,
  TabInfo,
  TabTitle,
  TabSubtitle,
};
