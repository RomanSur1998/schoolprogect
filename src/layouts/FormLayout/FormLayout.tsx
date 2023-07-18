import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const FormLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default FormLayout;
