import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToTagsTagIdPriorityIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrioritiesToTagsTagIdPriorityIdCompoundUniqueInput> = z.object({
  tagId: z.number(),
  priorityId: z.number()
}).strict();

export default PrioritiesToTagsTagIdPriorityIdCompoundUniqueInputSchema;
