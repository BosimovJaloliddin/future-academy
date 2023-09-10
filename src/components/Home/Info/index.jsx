import {
  Box,
  Btn,
  ContentFour,
  ContentOne,
  ContentThere,
  ContentTwo,
  Icon,
  Img,
  Subtitle,
  Title,
  Wrapper,
} from "./style";

import monitor from "../../../assets/icons/monitor.png";
import spaper from "../../../assets/icons/newspaper.png";
import diagram from "../../../assets/icons/diagram.png";
import figure from "../../../assets/icons/figure.png";

const Info = () => {
  return (
    <div className="container">
      <Wrapper $fx="true" $h={460}>
        <ContentOne>
          <Img $size={77} src={monitor} />
          <Title $mt={36}>Программы обучения</Title>
          <Subtitle $mt={41}>
            В списке наших курсов вы сможете найти профессию и занятие по душе,
            изучить новое и получить практические знания, которые помогут
            получить работу мечты.
          </Subtitle>
          <Btn>
            Записаться <Icon.Arrow />
          </Btn>
        </ContentOne>
        <ContentTwo>
          <Img $size={68} src={spaper} />
          <Title $mt={45}>Новости Академии</Title>
        </ContentTwo>
        <ContentThere>
          <Img $size={68} src={diagram} />
          <Title $mt={45}>Мир IT</Title>
        </ContentThere>
        <ContentFour>
          <Box $pad="true">
            <Img $size={97} src={figure} />
            <Box $fd="column">
              <Title>Программы обучения</Title>
              <Subtitle $mt={30}>
                В списке наших курсов вы сможете найти профессию и занятие по
                душе, изучить новое и получить практические знания, которые
                помогут получить работу мечты.
              </Subtitle>
            </Box>
          </Box>
        </ContentFour>
      </Wrapper>
    </div>
  );
};

export default Info;
