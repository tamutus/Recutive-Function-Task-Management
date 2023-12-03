import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInput> = z.object({
  tagId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema;
