import { SelectFieldProps } from "@/types/interfaces";

const SelectField = ({ name, value, onChange, iconClassName, children }: SelectFieldProps) => (
    <article className="input-field">
        <select name={name} value={value} onChange={onChange}>
            {children}
        </select>
        <i className={iconClassName} />
    </article>
);

export default SelectField;
