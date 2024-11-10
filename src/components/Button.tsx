type ButtonProps = {
  children: string;
  type: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        padding: '10px 45px',
        border: ' 1px solid black',
        borderRadius: '5px',
        backgroundColor: 'white',
        fontSize: '16px',
        display: 'flex',
        margin: 'auto',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
