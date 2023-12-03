import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUncheckedCreateWithoutTagInput> = z.object({
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema;
