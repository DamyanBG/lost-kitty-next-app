import { ReadOnlyInputProps } from "@/types/interfaces";

const ReadOnlyInput = ({ value, iconClassName }: ReadOnlyInputProps) => (
    <article className="input-field">
        <input type="text" value={value} readOnly />
        <i className={iconClassName} />
    </article>
);

export default ReadOnlyInput;
