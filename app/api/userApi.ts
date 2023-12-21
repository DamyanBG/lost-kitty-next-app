import axios from "axios";
import { UserRegisterForm } from "../types/interfaces";
import { USER_REGISTER_URL } from "../utils/urls";


export const postUser = async (userData: UserRegisterForm) => {
    console.log(userData)
    const response = await axios.post(USER_REGISTER_URL, userData);
    console.log(response)
}