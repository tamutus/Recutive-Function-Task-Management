import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.PrioritiesToProjectsUncheckedCreateWithoutProjectInput> = z.object({
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToProjectsUncheckedCreateWithoutProjectInputSchema;
