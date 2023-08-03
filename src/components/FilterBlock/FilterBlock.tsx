import React from "react";
import styles from "./FilterBlock.module.css";
import search from "../../assets/circum_search.svg";

type Props = {};

const FilterBlock = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.search_container}>
        <div>
          <input type="text" placeholder="Поиск " />

          <img src={search} alt="" />
        </div>
        <button>Все направления</button>
        <button>Bekend</button>
        <button>Frontend</button>
        <button>Data Sience</button>
        <button>Профориентация </button>
        <button>Компьютреная грамотность </button>
      </div>
      <div className={styles.filter_container}>
        <div>
          <h5>Стоимость</h5>
          <div className={styles.filter_input}>
            <input type="checkbox" />
            <h6>Все</h6>
          </div>
          <div className={styles.filter_input}>
            <input type="checkbox" />
            <h6>Бесплатные</h6>
          </div>
          <div className={styles.filter_input}>
            <input type="checkbox" />
            <h6>Платные</h6>
          </div>
        </div>
        <div className={styles.filter_container}>
          <h5>Формат</h5>
          <div className={styles.filter_input}>
            <input type="checkbox" />
            <h6>Все</h6>
          </div>
          <div className={styles.filter_input}>
            <input type="checkbox" />
            <h6>Онлайн</h6>
          </div>
          <div className={styles.filter_input}>
            <input type="checkbox" />
            <h6>Оффлайн</h6>
          </div>
          <img src="" alt="" />
          <div className={styles.filter_input}>
            <h6>Сбросить фильтр</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
