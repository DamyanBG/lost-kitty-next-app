import { InputFieldProps } from "@/types/interfaces"

const InputField = ({
    value,
    name,
    onChange,
    placeholder,
    iconClassName,
    type = "text"
}: InputFieldProps) => {
    return (
        <article className="input-field">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
            <i className={iconClassName} />
        </article>
    )
}

export default InputField