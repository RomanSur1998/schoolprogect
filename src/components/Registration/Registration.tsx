import React from "react";
import styles from "../Registration/Registration.module.css";
import logo from "../../assets/logo.svg";
type Props = {};

const Registration = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.Registr_block}>
        <div className={styles.Regist_block_line}>
          <img src={logo} alt="" className={styles.image_logo} />
          <h3>Регистрация </h3>
        </div>
        <div className={styles.input_block}>
          <h4>Имя</h4>
          <input type="text" placeholder="Ваше имя" className={styles.input} />
        </div>
        <div className={styles.input_block}>
          <h4>Фамилия</h4>
          <input
            type="text"
            className={styles.input}
            placeholder="Ваша фамилия"
          />
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
          <h4>Пароль</h4>
          <input
            type="text"
            className={styles.input}
            placeholder="Придумайте пароль "
          />
        </div>
        <div className={styles.input_block}>
          <button className={styles.button_block}> Продолжить</button>
        </div>
        <div>
          <p className={styles.personal}>
            Нажимая на кнопку, я соглашаюсь на обработку персональных данных
          </p>
        </div>
        <div>
          <p className={styles.log_in}>У вас уже есть аккаунт? Войти</p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
