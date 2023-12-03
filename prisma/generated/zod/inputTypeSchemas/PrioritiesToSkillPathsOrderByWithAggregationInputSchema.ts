import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrioritiesToSkillPathsCountOrderByAggregateInputSchema } from './PrioritiesToSkillPathsCountOrderByAggregateInputSchema';
import { PrioritiesToSkillPathsAvgOrderByAggregateInputSchema } from './PrioritiesToSkillPathsAvgOrderByAggregateInputSchema';
import { PrioritiesToSkillPathsMaxOrderByAggregateInputSchema } from './PrioritiesToSkillPathsMaxOrderByAggregateInputSchema';
import { PrioritiesToSkillPathsMinOrderByAggregateInputSchema } from './PrioritiesToSkillPathsMinOrderByAggregateInputSchema';
import { PrioritiesToSkillPathsSumOrderByAggregateInputSchema } from './PrioritiesToSkillPathsSumOrderByAggregateInputSchema';

export const PrioritiesToSkillPathsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsOrderByWithAggregationInput> = z.object({
  skillPathId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PrioritiesToSkillPathsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrioritiesToSkillPathsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrioritiesToSkillPathsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrioritiesToSkillPathsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrioritiesToSkillPathsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrioritiesToSkillPathsOrderByWithAggregationInputSchema;
