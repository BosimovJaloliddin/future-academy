import { styled } from "styled-components";
const Container = styled.div`
  margin-top: 100px;
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding: 24px 0;
  border-bottom: 1px solid #e0e0e0;
`;
const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  label {
    font-family: "Montserrat";
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-color-subtitle);
    cursor: pointer;
  }
`;
const Title = styled.h3`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color-title);
`;
const Subtitle = styled.div`
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color-subtitle);
`;
const InputRange = styled.input`
  width: 200px;
  height: 2px;
  color: red;

  background: black;
`;

export { Container, Items, Item, Title, Subtitle, InputRange };
