import "../StudentsAuth/studentsAuth.scss";
import logo from "../../assets/logo.svg";
import "./studentsProfile.scss";

type Props = {};

const StudentsProfile = (props: Props) => {
  return (
    <div className="container">
      <div className="registr__block profile__block">
        <div className="registr__block-line profile__logo">
          <img src={logo} alt="" className="image__logo" />
          <div className="profile__avatar">
            <img src="" alt="" />
          </div>
        </div>

        <div className="profile__data">
          <h4>Derick</h4>
          <p>пользовательское имя</p>
          <h4>Бердибеков Нуржигит Алтынбекович</h4>
          <p>ф.и.о</p>
          <h4>СОШ 102</h4>
          <p>Данные школы</p>
        </div>
      </div>
    </div>
  );
};

export default StudentsProfile;
