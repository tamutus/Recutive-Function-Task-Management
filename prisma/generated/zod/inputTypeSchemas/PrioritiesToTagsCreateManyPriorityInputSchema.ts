import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToTagsCreateManyPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTagsCreateManyPriorityInput> = z.object({
  tagId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToTagsCreateManyPriorityInputSchema;
