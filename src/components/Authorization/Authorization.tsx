import React from "react";
import styles from "../Authorization/Authorization.module.css";
import logo from "../../assets/logo.svg";
import google from "../../assets/grommet-icons_google.svg";

type Props = {};

const Authorization = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.Registr_block}>
        <div className={styles.Regist_block_line}>
          <img src={logo} alt="" className={styles.image_logo} />
          <h3>Вход в аккаунт </h3>
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
          <div className={styles.password_block}>
            <h4>Пароль</h4>
            <a>Забыли пароль</a>
          </div>

          <input
            type="text"
            className={styles.input}
            placeholder="Введите пароль  "
          />
        </div>
        <div className={styles.input_block}>
          <button className={styles.button_block}>Войти</button>
        </div>

        <p className={styles.changes}>или войдите через</p>

        <div className={styles.input_google}>
          <img src={google} alt="" />
          <p>Войти через Google</p>
        </div>
        <div>
          <p className={styles.log_in}>
            У вас еще нет аккаунта ? <span>Зарегестрируйтесь</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
