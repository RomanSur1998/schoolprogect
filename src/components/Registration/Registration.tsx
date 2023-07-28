import React from "react";
import styles from "../Registration/Registration.module.css";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import { StateInteface } from "../../store/RegistrReducer";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import {
  ChangeEmail,
  ChangeName,
  ChangePassword,
  ChangeSecondName,
  ConfirmPassword,
} from "../../Action/ActionRegistr";
import FormLayout from "../../layouts/FormLayout/FormLayout";
import { handleRegistr } from "../../function/RegistrFunction/Registr";
type Props = {};

const Registration = (props: Props) => {
  const dispatch = useDispatch();
  const registr = useSelector((state: StateInteface) => state.registr);

  console.log("registr", registr);

  // const handleNameChange = (event: string) => {
  //   dispatch(ChangeName(event));
  // };
  // const handleSecondNameChange = (event: string) => {
  //   dispatch(ChangeSecondName(event));
  // };
  const handleEmailChange = (event: string) => {
    dispatch(ChangeEmail(event));
  };
  const handlePasswordChange = (event: string) => {
    dispatch(ChangePassword(event));
  };
  const handleConfirmPassword = (event: string) => {
    dispatch(ConfirmPassword(event));
  };

  return (
    <FormLayout>
      <div className={styles.container}>
        <div className={styles.Registr_block}>
          <div className={styles.Regist_block_line}>
            <img src={logo} alt="" className={styles.image_logo} />
            <h3>Регистрация </h3>
          </div>

          {/* <div className={styles.input_block}>
            <h4>Имя</h4>
            <input
              type="text"
              placeholder="Ваше имя"
              className={styles.input}
              onChange={(e) => handleNameChange(e.target.value)}
            />
          </div> */}
          {/* <div className={styles.input_block}>
            <h4>Фамилия</h4>
            <input
              type="text"
              className={styles.input}
              placeholder="Ваша фамилия"
              onChange={(e) => handleSecondNameChange(e.target.value)}
            />
          </div> */}
          <div className={styles.input_block}>
            <h4>Электронная почта </h4>
            <input
              type="text"
              className={styles.input}
              placeholder="example@gmail.com"
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          </div>
          <div className={styles.input_block}>
            <h4>Пароль</h4>
            <input
              type="text"
              className={styles.input}
              placeholder="Придумайте пароль "
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Подтвердите пароль "
              onChange={(e) => handleConfirmPassword(e.target.value)}
            />
          </div>
          <div className={styles.input_block}>
            <button
              type="submit"
              className={styles.button_block}
              onClick={() => {
                handleRegistr(registr);
              }}
            >
              {" "}
              Продолжить
            </button>
          </div>

          <div>
            <p className={styles.personal}>
              Нажимая на кнопку, я соглашаюсь на обработку персональных данных
            </p>
          </div>
          <div>
            <p className={styles.log_in}>
              У вас уже есть аккаунт? <Link to="/auth"> Войти </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </FormLayout>
  );
};

export default Registration;
