import { ChangeEventHandler } from "react";

export interface UserRegisterForm {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface FormGroup {
    labelText: string,
    fieldValue: string,
    fieldName: string,
    onChange: ChangeEventHandler,
}