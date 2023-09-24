import { Btn } from "./style";

const Button = (prop) => {
  const {
    data: { type, title, width },
    onClick,
  } = prop;
  return (
    <>
      <Btn onClick={onClick} type="button" $btn={type} $w={width}>
        {title}
      </Btn>
    </>
  );
};

export default Button;
