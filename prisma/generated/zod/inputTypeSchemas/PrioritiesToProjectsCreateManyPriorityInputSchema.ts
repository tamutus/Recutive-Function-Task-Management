import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToProjectsCreateManyPriorityInputSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateManyPriorityInput> = z.object({
  projectId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToProjectsCreateManyPriorityInputSchema;
