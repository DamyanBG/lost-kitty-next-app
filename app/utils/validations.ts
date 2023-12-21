import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

export const userRegisterSchema = toFormikValidationSchema(
    z.object({
        firstName: z.string().min(2).max(255),
        lastName: z.string().min(2).max(255),
        password: z.string().min(8).max(255),
        email: z.string().email(),
    })
);
