import { styled } from "styled-components";
import { Tabs } from "antd";

const Container = styled.div`
  max-width: 960px;
  position: relative;
  padding-top: 85px;
  margin: auto;
`;
const WrapTabs = styled(Tabs)`
  width: 100%;
  padding-left: 310px;
`;
const NavTab = styled.h4`
  width: 280px;
  height: 20px;
  text-align: center;
`;

export { Container, WrapTabs, NavTab };
