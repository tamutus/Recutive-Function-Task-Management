import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTaskTemplatesUncheckedCreateInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUncheckedCreateInput> = z.object({
  personId: z.number().int(),
  taskId: z.number().int()
}).strict();

export default PersonsToTaskTemplatesUncheckedCreateInputSchema;
