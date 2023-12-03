import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTaskTemplatesCreateManyTaskInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCreateManyTaskInput> = z.object({
  personId: z.number().int()
}).strict();

export default PersonsToTaskTemplatesCreateManyTaskInputSchema;
