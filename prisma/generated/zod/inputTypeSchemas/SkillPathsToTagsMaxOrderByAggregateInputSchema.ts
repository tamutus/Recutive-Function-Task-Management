import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillPathsToTagsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SkillPathsToTagsMaxOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillPathsToTagsMaxOrderByAggregateInputSchema;