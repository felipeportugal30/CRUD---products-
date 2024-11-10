type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return (
    <h1 style={{ fontSize: '', color: '', fontWeight: '' }}>{children}</h1>
  );
};

export default Title;
