import { Btn } from "./style";

const Button = (prop) => {
  const { type, title, width } = prop.data;
  return (
    <>
      <Btn $btn={type} $w={width}>
        {title}
      </Btn>
    </>
  );
};

export default Button;
