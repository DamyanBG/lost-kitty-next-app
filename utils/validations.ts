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

export const userLoginSchema = toFormikValidationSchema(
    z.object({
        password: z.string().min(8).max(255),
        email: z.string().email(),
    })
)

export const addCatSchema = toFormikValidationSchema(
    z.object({
        cat_name: z.string().min(2).max(255),
        microchip: z.string().max(255),
        passport_id: z.string().min(8).max(255),
    })
);
