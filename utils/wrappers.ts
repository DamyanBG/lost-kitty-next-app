import { WrapSubmitting } from "@/types/interfaces"

export const wrapSubmitting: WrapSubmitting = (
    setIsSubmitting,
    submittingFunc
) => {
    return async (args: any[]) => {
        setIsSubmitting(true)
        try {
            await submittingFunc(args)
        } catch (error) {
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }
}