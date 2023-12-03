import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToProjectsCreateManyInputSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateManyInput> = z.object({
  projectId: z.number().int(),
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToProjectsCreateManyInputSchema;
