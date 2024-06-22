import { z } from "zod";

export const CreateTransactionSchema = z.object({
    amount: z.coerce.number().positive().multipleOf(0.01),
});