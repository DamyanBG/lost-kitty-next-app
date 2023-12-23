const FormSubmitButton = ({
    text
}: { text: string }) => (
    <button
        type="submit"
        className="btn"
    >
        {text}
    </button>
)

export default FormSubmitButton
