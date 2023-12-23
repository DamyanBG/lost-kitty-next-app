import { ChangeEventHandler, Dispatch, ReactNode, SetStateAction } from "react";
import { Token } from "./types";
import { CatStatus } from "./enums";

export interface UserRegisterForm {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: string,
    confirmPassword: string,
}

export interface UserRegisterPost {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone_number: string,
}

export interface FormGroupProps {
    labelText: string,
    fieldValue: string,
    fieldName: string,
    onChange: ChangeEventHandler,
}

export interface UserLoginForm {
    email: string,
    password: string
}

export interface TokenObj {
    token: string
}

export interface ContextProvider {
    children: ReactNode
}

export interface AuthContextValue {
    token: Token,
    setToken: Dispatch<SetStateAction<Token>>
}

export interface AddCatForm {
    cat_name: string,
    microchip: string,
    passport_id: string,
    status: CatStatus,
    photos: Array<string>,
}

export interface CatResponse {
    cat_name: string,
    microchip: string,
    passport_id: string,
    status: CatStatus,
    id: number,
    owner_id: number,
    photos_urls: Array<string>
}

export interface InputFieldProps {
    value: string,
    name: string,
    onChange: ChangeEventHandler,
    placeholder: string,
    iconClassName: string,
    type?: string
}
