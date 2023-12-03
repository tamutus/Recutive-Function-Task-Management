import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTaskTemplatesCreateManyPersonInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCreateManyPersonInput> = z.object({
  taskId: z.number().int()
}).strict();

export default PersonsToTaskTemplatesCreateManyPersonInputSchema;
