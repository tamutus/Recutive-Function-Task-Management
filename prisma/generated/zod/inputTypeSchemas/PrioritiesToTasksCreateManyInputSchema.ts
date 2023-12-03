import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToTasksCreateManyInputSchema: z.ZodType<Prisma.PrioritiesToTasksCreateManyInput> = z.object({
  priorityId: z.number().int(),
  taskId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToTasksCreateManyInputSchema;
