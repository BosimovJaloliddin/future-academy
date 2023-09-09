import { Btn } from "./style";

const Button = (prop) => {
  const { type, title } = prop.data;

  return (
    <>
      <Btn $btn={type}>{title}</Btn>
    </>
  );
};

export default Button;
