import { ChangeEventHandler, Dispatch, ReactNode, SetStateAction } from "react";
import { Token } from "./types";
import { CatStatus } from "./enums";

export interface UserRegisterForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    confirmPassword: string;
}

export interface UserRegisterPost {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
}

export interface FormGroupProps {
    labelText: string;
    fieldValue: string;
    fieldName: string;
    onChange: ChangeEventHandler;
}

export interface UserLoginForm {
    email: string;
    password: string;
}

export interface TokenObj {
    token: string;
}

export interface ContextProvider {
    children: ReactNode;
}

export interface AuthContextValue {
    token: Token;
    setToken: Dispatch<SetStateAction<Token>>;
}

export interface AddCatForm {
    cat_name: string;
    microchip: string;
    passport_id: string;
    status: CatStatus;
    photos: Array<string>;
    area: string;
}

export interface CatResponse {
    cat_name: string;
    microchip: string;
    passport_id: string;
    status: CatStatus;
    id: number;
    owner_id: number;
    photos_urls: Array<string>;
    area: string;
}

export interface InputFieldProps {
    value: string;
    name: string;
    onChange: ChangeEventHandler;
    placeholder: string;
    iconClassName: string;
    type?: string;
}

export interface SelectFieldProps {
    value: string;
    name: string;
    onChange: ChangeEventHandler;
    iconClassName: string;
    children: ReactNode;
}

export interface FormSubmitBtnProps {
    text: string;
    disabled?: boolean;
}

export interface SubmittingFunction {
    (...args: any[]): Promise<void>;
}

export interface WrapSubmitting {
    (
        setIsSubmitting: Dispatch<SetStateAction<boolean>>,
        submittingFunc: SubmittingFunction
    ): (...args: any[]) => Promise<void>;
}

export interface ReadOnlyInputProps {
    value: string;
    iconClassName: string;
}


export interface ProfileInfo {
    email: string,
    first_name: string,
    last_name: string,
    phone_number: string,
}

export interface SearchByFormValues {
    id: string,
    searchBy: string,
}

export interface SearchResult {
    id: string | undefined,
    message: string | undefined,
}

export interface CatCardProps {
    photoUrl: string,
    catName: string,
    microchip: string,
    passportId: string,
    catId: number,
}

export interface CatCardsContainerProps {
    page: number,
    getPaginatedCatsFunc: (offset: number, limit: number) => Promise<CatResponse[]>
}