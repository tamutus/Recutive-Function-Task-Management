import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToTasksCreateManyTaskInputSchema: z.ZodType<Prisma.PrioritiesToTasksCreateManyTaskInput> = z.object({
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToTasksCreateManyTaskInputSchema;
