import React from "react";
import styles from "./Recovery.module.css";
import logo from "../../assets/logo.svg";
type Props = {};

const Recovery = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.Registr_block}>
        <div className={styles.Regist_block_line}>
          <img src={logo} alt="" className={styles.image_logo} />
          <h3>Введите почту, и мы вышлем ссылку для восстановления доступа </h3>
        </div>
        <div className={styles.input_block}>
          <h4>Электронная почта </h4>
          <input
            type="text"
            className={styles.input}
            placeholder="example@gmail.com"
          />
        </div>

        <div className={styles.input_block}>
          <button className={styles.button_block}>Войти</button>
        </div>

        <p className={styles.changes}>Я помню пароль</p>
      </div>
    </div>
  );
};

export default Recovery;
