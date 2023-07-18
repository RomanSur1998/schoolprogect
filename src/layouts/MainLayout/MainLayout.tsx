import React, { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
