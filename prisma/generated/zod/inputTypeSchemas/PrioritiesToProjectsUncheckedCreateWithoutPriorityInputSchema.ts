import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUncheckedCreateWithoutPriorityInput> = z.object({
  projectId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToProjectsUncheckedCreateWithoutPriorityInputSchema;
