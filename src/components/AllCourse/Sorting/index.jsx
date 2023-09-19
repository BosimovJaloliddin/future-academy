import { useState } from "react";
import { Container, Title, Item, Items, InputRange, Subtitle } from "./style";

const Sorting = () => {
  const [level, setLevel] = useState(6);
  const getLevel = (e) => {
    setLevel(e.target.value);
  };
  return (
    <Container>
      <Items>
        <Title>Уровень сложности</Title>
        <Item>
          <input type="radio" name="level" id="junior" />
          <label htmlFor="junior">Новичок</label>
        </Item>

        <Item>
          <input type="radio" name="level" id="middle" />
          <label htmlFor="middle">Пользователь</label>
        </Item>

        <Item>
          <input type="radio" name="level" id="senior" />
          <label htmlFor="senior">Профессионал</label>
        </Item>

        <Item>
          <input type="radio" name="level" id="professor" />
          <label htmlFor="professor">Читер</label>
        </Item>
      </Items>

      <Items>
        <Title>Тип обучения</Title>
        <Item>
          <input type="radio" name="type" id="all" />
          <label htmlFor="all">Любой</label>
        </Item>

        <Item>
          <input type="radio" name="type" id="category" />
          <label htmlFor="category">Профессия</label>
        </Item>

        <Item>
          <input type="radio" name="type" id="course" />
          <label htmlFor="course">Курс</label>
        </Item>
      </Items>

      <Items>
        <Title>Длительность</Title>
        <Subtitle>
          {level == 1 ? "1 месяцев" : `от 1 до ${level} месяцев`}
        </Subtitle>
        <Item>
          <InputRange
            onChange={getLevel}
            type="range"
            id="range"
            name="range"
            min="1"
            max="24"
            value={level}
            step="1"
          />
        </Item>
      </Items>
    </Container>
  );
};

export default Sorting;
