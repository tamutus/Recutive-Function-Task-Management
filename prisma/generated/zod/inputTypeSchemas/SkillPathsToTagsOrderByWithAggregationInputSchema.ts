import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SkillPathsToTagsCountOrderByAggregateInputSchema } from './SkillPathsToTagsCountOrderByAggregateInputSchema';
import { SkillPathsToTagsAvgOrderByAggregateInputSchema } from './SkillPathsToTagsAvgOrderByAggregateInputSchema';
import { SkillPathsToTagsMaxOrderByAggregateInputSchema } from './SkillPathsToTagsMaxOrderByAggregateInputSchema';
import { SkillPathsToTagsMinOrderByAggregateInputSchema } from './SkillPathsToTagsMinOrderByAggregateInputSchema';
import { SkillPathsToTagsSumOrderByAggregateInputSchema } from './SkillPathsToTagsSumOrderByAggregateInputSchema';

export const SkillPathsToTagsOrderByWithAggregationInputSchema: z.ZodType<Prisma.SkillPathsToTagsOrderByWithAggregationInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SkillPathsToTagsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SkillPathsToTagsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SkillPathsToTagsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SkillPathsToTagsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SkillPathsToTagsSumOrderByAggregateInputSchema).optional()
}).strict();

export default SkillPathsToTagsOrderByWithAggregationInputSchema;
