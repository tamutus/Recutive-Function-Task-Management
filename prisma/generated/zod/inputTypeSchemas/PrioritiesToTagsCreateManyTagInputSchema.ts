import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToTagsCreateManyTagInputSchema: z.ZodType<Prisma.PrioritiesToTagsCreateManyTagInput> = z.object({
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToTagsCreateManyTagInputSchema;
