import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.PrioritiesToTasksUncheckedCreateWithoutTaskInput> = z.object({
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToTasksUncheckedCreateWithoutTaskInputSchema;
