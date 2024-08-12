//tsx enable pass in var(txt) and f
interface Props {
  children: string;
  onClick: () => void;
}
const Button = ({ children, onClick }: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
