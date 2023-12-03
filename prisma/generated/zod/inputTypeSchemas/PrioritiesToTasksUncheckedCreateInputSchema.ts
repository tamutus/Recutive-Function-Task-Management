import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToTasksUncheckedCreateInputSchema: z.ZodType<Prisma.PrioritiesToTasksUncheckedCreateInput> = z.object({
  priorityId: z.number().int(),
  taskId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToTasksUncheckedCreateInputSchema;
