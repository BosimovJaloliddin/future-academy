import { css, styled } from "styled-components";
import { ReactComponent as book } from "../../../assets/icons/book.svg";
import { ReactComponent as setting } from "../../../assets/icons/lesson-setting.svg";
import { ReactComponent as lesson } from "../../../assets/icons/lesson.svg";
import { ReactComponent as user } from "../../../assets/icons/user.svg";

const Wrapper = styled.div`
  margin-top: 85px;
`;
const Title = styled.h1`
  text-align: center;
`;
const ContentItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3%;
  margin-top: 60px;
`;
const Content = styled.div`
  flex: 0 0 23%;
  max-width: 23%;
`;
const Subtitle = styled.p`
  margin-top: 19px;
`;
const Icon = styled.div``;

const iconStyle = css`
  width: 60px;
  height: 60px;
`;

Icon.Book = styled(book)`
  ${iconStyle}
`;
Icon.Setting = styled(setting)`
  ${iconStyle}
`;
Icon.Lesson = styled(lesson)`
  ${iconStyle}
`;
Icon.User = styled(user)`
  ${iconStyle}
`;

export { Wrapper, Title, ContentItems, Content, Subtitle, Icon };
