import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillsToTagsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SkillsToTagsAvgOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillsToTagsAvgOrderByAggregateInputSchema;
