import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../consts/constant";
import { useSelector } from "react-redux";
import { StateInteface } from "../../store/RegistrReducer";

export async function handleRegistr(registationrForm: any) {
  const responase = await axios.post(
    `${API}/auth/registration`,
    registationrForm
  );
  try {
  } catch (error) {
    console.log("error", error);
  } finally {
  }
}
