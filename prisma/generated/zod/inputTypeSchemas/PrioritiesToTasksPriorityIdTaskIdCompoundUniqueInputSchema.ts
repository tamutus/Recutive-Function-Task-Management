import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToTasksPriorityIdTaskIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrioritiesToTasksPriorityIdTaskIdCompoundUniqueInput> = z.object({
  priorityId: z.number(),
  taskId: z.number()
}).strict();

export default PrioritiesToTasksPriorityIdTaskIdCompoundUniqueInputSchema;
