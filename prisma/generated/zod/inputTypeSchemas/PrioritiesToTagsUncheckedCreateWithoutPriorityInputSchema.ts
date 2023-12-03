import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTagsUncheckedCreateWithoutPriorityInput> = z.object({
  tagId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema;
