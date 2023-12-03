import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToProjectsCreateManyProjectInputSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateManyProjectInput> = z.object({
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToProjectsCreateManyProjectInputSchema;
