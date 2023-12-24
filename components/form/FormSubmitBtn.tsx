import { FormSubmitBtnProps } from "@/types/interfaces"

const FormSubmitButton = ({
    text,
    disabled
}: FormSubmitBtnProps) => (
    <button
        type="submit"
        className="btn"
        disabled={disabled}
    >
        {text}
    </button>
)

export default FormSubmitButton
