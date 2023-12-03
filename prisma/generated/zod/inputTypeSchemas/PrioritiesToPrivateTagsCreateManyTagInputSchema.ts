import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToPrivateTagsCreateManyTagInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsCreateManyTagInput> = z.object({
  priorityId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrioritiesToPrivateTagsCreateManyTagInputSchema;
