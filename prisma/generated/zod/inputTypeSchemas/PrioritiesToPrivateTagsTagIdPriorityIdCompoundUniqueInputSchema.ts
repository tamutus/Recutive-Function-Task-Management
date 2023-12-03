import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrioritiesToPrivateTagsTagIdPriorityIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsTagIdPriorityIdCompoundUniqueInput> = z.object({
  tagId: z.number(),
  priorityId: z.number()
}).strict();

export default PrioritiesToPrivateTagsTagIdPriorityIdCompoundUniqueInputSchema;
