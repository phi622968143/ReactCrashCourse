import { ReactNode } from "react";

interface Props {
  children: ReactNode; //for html content
}
const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-secondary" role="alert">
      {children}
    </div>
  );
};

export default Alert;
