import { UserRegisterForm, UserRegisterPost as UserRegisterPostBody } from "../types/interfaces";

export const convertUserRegisterForm = (userInfo: UserRegisterForm): UserRegisterPostBody => ({
    first_name: userInfo.firstName,
    last_name: userInfo.lastName,
    email: userInfo.email,
    password: userInfo.password,
    phone_number: userInfo.phoneNumber,
})
