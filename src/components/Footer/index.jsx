import { Bg, Content, Icon, Subtitle, Title, Wrapper } from "./style";

const Footer = () => {
  return (
    <Bg>
      <Wrapper className="container">
        <Content $f={20}>
          <Icon.Logo />
          <Title $mt={43}>8 800 950-33-98 </Title>
          <Subtitle $mt={12}>г. Москва, ул. Ленина, д. 50</Subtitle>
          <Subtitle $mt={12}>info@hodfutureacademy.ru</Subtitle>
          <Content $mt={37} $fx="flex" $gap={20}>
            <a href="https://t.me/bosimovjaloliddin">
              <Icon.Facebook />
            </a>
            <a href="https://youtu.be/M4WZc87uas8?si=9j4pNn5UFGjmEuzQ">
              <Icon.Youtube />
            </a>
            <a href="https://instagram.com">
              <Icon.Instagram />
            </a>
            <a href="https://google.com">
              <Icon.Wkontakt />
            </a>
            <a href="https://t.me/bosimovjaloliddin">
              <Icon.Telegram />
            </a>
          </Content>
          <Subtitle $mt={29}>© ХОД, Future Academy</Subtitle>
        </Content>
        <Content $f={15} $fx="flex" $fd="column" $ai="flex-start" $gap={12}>
          <Title>Детям</Title>
          <Subtitle $mt={16}>Робототехника </Subtitle>
          <Subtitle>Создание игр</Subtitle>
          <Subtitle>Программирование </Subtitle>
          <Subtitle>Мультимедиа </Subtitle>
          <Subtitle>Soft skills </Subtitle>
          <Subtitle>Шахматы </Subtitle>
          <Subtitle>Создание игр</Subtitle>
          <Subtitle>Программирование</Subtitle>
          <Subtitle>Мультимедиа</Subtitle>
          <Subtitle>Программирование</Subtitle>
        </Content>
        <Content $f={20} $fx="flex" $fd="column" $ai="flex-start" $gap={12}>
          <Title>Подросткам</Title>
          <Subtitle $mt={16}>Web-разработка </Subtitle>
          <Subtitle>Прикладное программирование</Subtitle>
          <Subtitle>Графическое моделирование </Subtitle>
          <Subtitle>Game Development</Subtitle>
          <Subtitle>Soft skills </Subtitle>
          <Subtitle>Разработчик мобильных приложений</Subtitle>
          <Subtitle>Блогинг </Subtitle>
          <Subtitle>Создание игр</Subtitle>
          <Subtitle>Программирование</Subtitle>
          <Subtitle>Мультимедиа</Subtitle>
        </Content>
        <Content $f={20} $fx="flex" $fd="column" $ai="flex-start" $gap={12}>
          <Title>Взрослым</Title>
          <Subtitle $mt={16}>Разработчик игр на Unity </Subtitle>
          <Subtitle>Разработка ПО</Subtitle>
          <Subtitle>Графический </Subtitle>
          <Subtitle>Мультимедиа </Subtitle>
          <Subtitle>Soft skills </Subtitle>
          <Subtitle>Java-разработчик </Subtitle>
          <Subtitle>Интернет Маркетинг</Subtitle>
          <Subtitle>Программирование</Subtitle>
          <Subtitle>IOS-разработчик</Subtitle>
          <Subtitle>Python–разработчик</Subtitle>
        </Content>
        <Content $f={15} $fx="flex" $fd="column" $ai="flex-start" $gap={12}>
          <Title>Информация</Title>
          <Subtitle $mt={16}>Об академии </Subtitle>
          <Subtitle>Мероприятия </Subtitle>
          <Subtitle>Новости </Subtitle>
          <Subtitle>База знаний </Subtitle>
          <Subtitle>База знаний</Subtitle>
          <Subtitle>Карьера</Subtitle>
          <Subtitle>Контакты</Subtitle>
        </Content>
      </Wrapper>
    </Bg>
  );
};

export default Footer;
