import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTasksUncheckedCreateWithoutPriorityInput> = z.object({
  taskId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToTasksUncheckedCreateWithoutPriorityInputSchema;
