import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToPrivateTagsCreateManyPriorityInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsCreateManyPriorityInput> = z.object({
  tagId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToPrivateTagsCreateManyPriorityInputSchema;
