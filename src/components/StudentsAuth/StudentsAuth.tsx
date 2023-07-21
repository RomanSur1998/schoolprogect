import "./studentsAuth.scss";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

type Props = {};

const StudentsAuth = (props: Props) => {
  return (
    <div className="container">
      <div className="registr__block">
        <div className="registr__block-line">
          <img src={logo} alt="" className="image__logo" />
          <h3>Вход в аккаунт </h3>
        </div>
        <div className="input__block">
          <h4>Имя</h4>
          <input type="text" className="input" placeholder="Ваше имя" />
        </div>

        <div className="input__block">
          <h4>Фамилия</h4>
          <input type="text" className="input" placeholder="Ваше фамилия  " />
        </div>

        <div className="input__block">
          <h4>Номер школы</h4>
          <input
            type="number"
            className="input"
            placeholder="Номер вашей школы  "
          />
        </div>

        <div className="input__block">
          <h4>Класс</h4>
          <input type="number" className="input" placeholder="Ваш класс  " />
        </div>

        <div className="input__block">
          <h4>Область</h4>
          <input type="text" className="input" placeholder="Ваш область  " />
        </div>

        <div className="input__block">
          <button className="button__block">Войти</button>
        </div>

        <p className="changes">
          Нажимая на кнопку, я соглашаюсь на обработку персональных данных
        </p>

        <div>
          <p className="log__in">
            вас уже есть аккаунт ?
            <NavLink to={"/studentsprofile"}>
              <span> Войти</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentsAuth;
