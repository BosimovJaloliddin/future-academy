import { useEffect, useState } from "react";
import { comments } from "../../mock.js/comment";
import {
  Bg,
  BoxSlider,
  Btn,
  Content,
  Icon,
  SliderItem,
  SliderItems,
  Title,
  UserComment,
  UserCours,
  UserImg,
  UserInfo,
  Wrapper,
} from "./style";
import userImg from "../../assets/image/no-user.jpg";

const Comment = () => {
  const [data, setData] = useState();
  const [size, setSize] = useState(0);
  useEffect(() => {
    setData(comments);
  }, []);

  const getSize = (value) => {
    if (value === "left" && ((data?.length - 4) / 2) * 25 > size) {
      setSize(size + 25);
    } else if (value === "right" && ((-data?.length + 4) / 2) * 25 < size) {
      setSize(size - 25);
    }
  };
  return (
    <Bg>
      <Title>Отзывы наших студентов</Title>
      <Wrapper className="container">
        <Btn onClick={() => getSize("left")}>
          <Icon.Arrow $rotate="true" />
        </Btn>
        <BoxSlider>
          <SliderItems $size={size}>
            {data?.map((v) => (
              <SliderItem key={v.id} $fd="column">
                <Content $fx="flex" $gap={10}>
                  <UserImg src={v.urlImg || userImg} />
                  <Content $fx="flex" $fd="column">
                    <UserInfo>{v.name || "No user name"}</UserInfo>
                    <UserCours>{v.course || "No name course"}</UserCours>
                  </Content>
                </Content>
                <Content>
                  <UserComment>{v.comment || "No comment"}</UserComment>
                </Content>
                <Content $fx="flex" $mt={24}>
                  <Icon.Star />
                  <span>4,87 / 5</span>
                </Content>
              </SliderItem>
            ))}
          </SliderItems>
        </BoxSlider>
        <Btn onClick={() => getSize("right")}>
          <Icon.Arrow />
        </Btn>
      </Wrapper>
    </Bg>
  );
};

export default Comment;
