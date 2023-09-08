import {
  MainTabs,
  BtnItems,
  InfoItem,
  TabIcon,
  TabInfo,
  TabSubtitle,
  TabTitle,
  TabWrap,
  Wrapper,
} from "./style";
import Child from "../../../assets/icons/children-14.png";
import Adults from "../../../assets/icons/children-100.png";
import Teenager from "../../../assets/icons/children -16.png";
import Button from "../../Button/index";
import Cookie from "../../Cookie";

const Category = () => {
  const data = [
    {
      id: 1,
      subtitle: "8 — 14 лет",
      title: "Дети",
      img: Child,
      status: (
        <BtnItems>
          <Button data={{ type: "dark", title: "Робототехника" }} />
          <Button data={{ type: "dark", title: "Создание игр" }} />
          <Button data={{ type: "dark", title: "Web-разработка" }} />
          <Button data={{ type: "dark", title: "Создание игр" }} />
          <Button data={{ type: "dark", title: "Мультимедиа" }} />
          <Button data={{ type: "dark", title: "Шахматы" }} />
          <Button data={{ type: "dark", title: "3D-моделирование и дизайн" }} />
          <Button data={{ type: "dark", title: "Английский язык" }} />
          <Button data={{ type: "dark", title: "Блогинг " }} />
          <Button data={{ type: "dark", title: "3D-моделирование и дизайн" }} />
          <Button data={{ type: "dark", title: "Soft skills " }} />
        </BtnItems>
      ),
    },
    {
      id: 2,
      subtitle: "14 — 18 лет",
      title: "Подростки",
      img: Adults,
      status: (
        <BtnItems>
          <Button data={{ type: "dark", title: "Робототехника" }} />
          <Button data={{ type: "dark", title: "Создание игр" }} />
          <Button data={{ type: "dark", title: "Web-разработка" }} />
          <Button data={{ type: "dark", title: "Мультимедиа" }} />
          <Button data={{ type: "dark", title: "Шахматы" }} />
          <Button data={{ type: "dark", title: "3D-моделирование и дизайн" }} />
          <Button data={{ type: "dark", title: "Английский язык" }} />
          <Button data={{ type: "dark", title: "Блогинг " }} />
          <Button data={{ type: "dark", title: "Soft skills " }} />
        </BtnItems>
      ),
    },
    {
      id: 3,
      subtitle: "18 +",
      title: "Взрослые",
      img: Teenager,
      status: (
        <BtnItems>
          <Button data={{ type: "dark", title: "Робототехника" }} />
          <Button data={{ type: "dark", title: "Создание игр" }} />
          <Button data={{ type: "dark", title: "Web-разработка" }} />
          <Button data={{ type: "dark", title: "Робототехника" }} />
          <Button data={{ type: "dark", title: "Мультимедиа" }} />
          <Button data={{ type: "dark", title: "Шахматы" }} />
          <Button data={{ type: "dark", title: "3D-моделирование и дизайн" }} />
          <Button data={{ type: "dark", title: "Английский язык" }} />
          <Button data={{ type: "dark", title: "Soft skills " }} />
          <Button data={{ type: "dark", title: "Блогинг " }} />
          <Button data={{ type: "dark", title: "Soft skills " }} />
          <Button data={{ type: "dark", title: "Soft skills " }} />
        </BtnItems>
      ),
    },
  ];
  return (
    <Wrapper className="container">
      <InfoItem>
        <Cookie
          data={{ widthC: 168, heightC: 188, widthM: 260, heightM: 190 }}
        />
      </InfoItem>
      <MainTabs
        defaultActiveKey="tab1"
        items={data?.map((v) => {
          return {
            label: (
              <TabWrap>
                <TabIcon>
                  <img src={v.img} alt="child" />
                </TabIcon>
                <TabInfo>
                  <TabTitle>{v.title}</TabTitle>
                  <TabSubtitle>{v.subtitle}</TabSubtitle>
                </TabInfo>
              </TabWrap>
            ),
            key: v.id,
            children: v.status,
          };
        })}
      />
    </Wrapper>
  );
};

export default Category;
