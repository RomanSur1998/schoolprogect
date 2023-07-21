import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/circum_search.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={styles.header_nav}>
        <h5>Главная </h5>
        <h5>Курсы </h5>
        <h5>Расписание</h5>
        <h5>Регистрация </h5>
      </div>
      <div className={styles.header_search}>
        <h5>Рус</h5>
        <img src={search} alt="" />
      </div>
    </div>
  );
};

export default Header;
