import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SkillsToSkillPathsCountOrderByAggregateInputSchema } from './SkillsToSkillPathsCountOrderByAggregateInputSchema';
import { SkillsToSkillPathsAvgOrderByAggregateInputSchema } from './SkillsToSkillPathsAvgOrderByAggregateInputSchema';
import { SkillsToSkillPathsMaxOrderByAggregateInputSchema } from './SkillsToSkillPathsMaxOrderByAggregateInputSchema';
import { SkillsToSkillPathsMinOrderByAggregateInputSchema } from './SkillsToSkillPathsMinOrderByAggregateInputSchema';
import { SkillsToSkillPathsSumOrderByAggregateInputSchema } from './SkillsToSkillPathsSumOrderByAggregateInputSchema';

export const SkillsToSkillPathsOrderByWithAggregationInputSchema: z.ZodType<Prisma.SkillsToSkillPathsOrderByWithAggregationInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  skillPathId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SkillsToSkillPathsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SkillsToSkillPathsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SkillsToSkillPathsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SkillsToSkillPathsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SkillsToSkillPathsSumOrderByAggregateInputSchema).optional()
}).strict();

export default SkillsToSkillPathsOrderByWithAggregationInputSchema;
