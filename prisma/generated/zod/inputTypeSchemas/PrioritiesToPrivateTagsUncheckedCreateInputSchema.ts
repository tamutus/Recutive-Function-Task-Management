import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToPrivateTagsUncheckedCreateInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUncheckedCreateInput> = z.object({
  tagId: z.number().int(),
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToPrivateTagsUncheckedCreateInputSchema;