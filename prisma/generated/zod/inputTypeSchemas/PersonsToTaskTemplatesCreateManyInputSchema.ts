import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTaskTemplatesCreateManyInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCreateManyInput> = z.object({
  personId: z.number().int(),
  taskId: z.number().int()
}).strict();

export default PersonsToTaskTemplatesCreateManyInputSchema;
