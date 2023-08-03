import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import CallOdrer from "../Call_order/CallOdrer";
import styles from "./MainPage.module.css";
import FilterBlock from "../FilterBlock/FilterBlock";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div>
          <h3>Курсы</h3>
        </div>
        <div className={styles.content_container}>
          <div className={styles.left_block}>
            <FilterBlock />
          </div>
          <div className={styles.right_block}></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MainPage;
