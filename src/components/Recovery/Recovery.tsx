import React from "react";
import styles from "./Recovery.module.css";
import logo from "../../assets/logo.svg";
import FormLayout from "../../layouts/FormLayout/FormLayout";
import { useDispatch } from "react-redux";
import { RecoveryAction } from "../../Action/ActionRecovery";
import { useSelector } from "react-redux";
type Props = {};

const Recovery = (props: Props) => {
  const dispach = useDispatch();
  const recovery = useSelector((state: any) => state.recovery);
  console.log("recovery", recovery);

  const handleRecovry = (event: string) => {
    dispach(RecoveryAction(event));
  };
  return (
    <FormLayout>
      <div className={styles.container}>
        <div className={styles.Registr_block}>
          <div className={styles.Regist_block_line}>
            <img src={logo} alt="" className={styles.image_logo} />
            <h3>
              Введите почту, и мы вышлем ссылку для восстановления доступа{" "}
            </h3>
          </div>
          <div className={styles.input_block}>
            <h4>Электронная почта </h4>
            <input
              type="text"
              className={styles.input}
              placeholder="example@gmail.com"
              onChange={(e) => {
                handleRecovry(e.target.value);
              }}
            />
          </div>

          <div className={styles.input_block}>
            <button className={styles.button_block}>Войти</button>
          </div>

          <p className={styles.changes}>Я помню пароль</p>
        </div>
      </div>
    </FormLayout>
  );
};

export default Recovery;
