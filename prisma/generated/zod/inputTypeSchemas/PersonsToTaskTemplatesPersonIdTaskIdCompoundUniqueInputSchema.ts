import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTaskTemplatesPersonIdTaskIdCompoundUniqueInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesPersonIdTaskIdCompoundUniqueInput> = z.object({
  personId: z.number(),
  taskId: z.number()
}).strict();

export default PersonsToTaskTemplatesPersonIdTaskIdCompoundUniqueInputSchema;
