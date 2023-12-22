import axios from "axios";
import {
    UserLoginForm,
    UserRegisterPost,
} from "../../types/interfaces";
import {
    USER_LOGIN_URL,
    USER_REGISTER_URL,
} from "../../utils/urls";

export const postUser = async (userData: UserRegisterPost) => {
    console.log(userData);
    const response = await axios.post(USER_REGISTER_URL, userData);
    console.log(response);
};

export const loginUser = async (
    userCredentials: UserLoginForm
): Promise<string> => {
    const response = await axios.post(USER_LOGIN_URL, userCredentials);
    const { token } = response.data;
    return token;
};


