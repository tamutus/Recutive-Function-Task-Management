import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToTasksCreateManyPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTasksCreateManyPriorityInput> = z.object({
  taskId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToTasksCreateManyPriorityInputSchema;
