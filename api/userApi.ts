import axios from "axios";
import { ProfileInfo, UserLoginForm, UserRegisterPost } from "../types/interfaces";
import { USER_LOGIN_URL, USER_REGISTER_URL, USER_URL } from "../utils/urls";
import { Token } from "@/types/types";

export const postUser = async (userData: UserRegisterPost) => {
    const response = await axios.post(USER_REGISTER_URL, userData);
};

export const loginUser = async (
    userCredentials: UserLoginForm
): Promise<string> => {
    const response = await axios.post(USER_LOGIN_URL, userCredentials);
    const { token } = response.data;
    return token;
};

export const getUserInfo = async (token: Token): Promise<ProfileInfo> => {
    const response = await axios.get<ProfileInfo>(USER_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const userInfo = response.data;
    return userInfo;
};
