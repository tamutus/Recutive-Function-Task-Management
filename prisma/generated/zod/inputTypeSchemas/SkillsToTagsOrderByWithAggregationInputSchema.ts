import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SkillsToTagsCountOrderByAggregateInputSchema } from './SkillsToTagsCountOrderByAggregateInputSchema';
import { SkillsToTagsAvgOrderByAggregateInputSchema } from './SkillsToTagsAvgOrderByAggregateInputSchema';
import { SkillsToTagsMaxOrderByAggregateInputSchema } from './SkillsToTagsMaxOrderByAggregateInputSchema';
import { SkillsToTagsMinOrderByAggregateInputSchema } from './SkillsToTagsMinOrderByAggregateInputSchema';
import { SkillsToTagsSumOrderByAggregateInputSchema } from './SkillsToTagsSumOrderByAggregateInputSchema';

export const SkillsToTagsOrderByWithAggregationInputSchema: z.ZodType<Prisma.SkillsToTagsOrderByWithAggregationInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SkillsToTagsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SkillsToTagsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SkillsToTagsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SkillsToTagsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SkillsToTagsSumOrderByAggregateInputSchema).optional()
}).strict();

export default SkillsToTagsOrderByWithAggregationInputSchema;
