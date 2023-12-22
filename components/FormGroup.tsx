import { FormGroupProps } from "../types/interfaces"

const FormGroup = ({
    labelText,
    fieldValue,
    fieldName,
    onChange
}: FormGroupProps) => {
    return (
        <article className="form-group">
            <label htmlFor="">{labelText}</label>
            <input
                type="text"
                name={fieldName}
                value={fieldValue}
                onChange={onChange}
            />
        </article>
    )
}

export default FormGroup
