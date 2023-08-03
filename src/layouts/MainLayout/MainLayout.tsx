import React, { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CallOdrer from "../../components/Call_order/CallOdrer";
import styles from "./MainLayout.module.css";

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Header />
        </div>
        <div>{children}</div>
        <CallOdrer />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
