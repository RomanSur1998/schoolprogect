import React from "react";
import styles from "./CallOrder.module.css";

type Props = {};

const CallOdrer = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.call_container}>
        <div>
          <h3>Заявка на обратный звонок</h3>
          <p>
            Оставьте заявку на бесплатную консультаци мы обязательно свяжемся с
            тобой
          </p>
        </div>
        <div className={styles.call_from}>
          <input
            type="text"
            placeholder="Ваше имя"
            className={styles.input_form}
          />
          <input type="text" placeholder="+996" className={styles.input_form} />
          <div>
            <input type="radio" />
            <p>
              Нажимая кнопку “Отредактировать ”, я даю согласие на обработку
              своих отходов
            </p>
          </div>

          <button>Отравить </button>
        </div>
      </div>
    </div>
  );
};

export default CallOdrer;
