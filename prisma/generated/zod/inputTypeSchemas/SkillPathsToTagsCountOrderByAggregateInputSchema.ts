import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillPathsToTagsCountOrderByAggregateInputSchema: z.ZodType<Prisma.SkillPathsToTagsCountOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillPathsToTagsCountOrderByAggregateInputSchema;
