import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToTagsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToTagsUncheckedCreateWithoutTagInput> = z.object({
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToTagsUncheckedCreateWithoutTagInputSchema;
