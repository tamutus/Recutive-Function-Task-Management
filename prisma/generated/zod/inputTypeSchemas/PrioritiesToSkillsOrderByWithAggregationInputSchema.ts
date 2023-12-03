import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrioritiesToSkillsCountOrderByAggregateInputSchema } from './PrioritiesToSkillsCountOrderByAggregateInputSchema';
import { PrioritiesToSkillsAvgOrderByAggregateInputSchema } from './PrioritiesToSkillsAvgOrderByAggregateInputSchema';
import { PrioritiesToSkillsMaxOrderByAggregateInputSchema } from './PrioritiesToSkillsMaxOrderByAggregateInputSchema';
import { PrioritiesToSkillsMinOrderByAggregateInputSchema } from './PrioritiesToSkillsMinOrderByAggregateInputSchema';
import { PrioritiesToSkillsSumOrderByAggregateInputSchema } from './PrioritiesToSkillsSumOrderByAggregateInputSchema';

export const PrioritiesToSkillsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrioritiesToSkillsOrderByWithAggregationInput> = z.object({
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PrioritiesToSkillsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrioritiesToSkillsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrioritiesToSkillsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrioritiesToSkillsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrioritiesToSkillsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrioritiesToSkillsOrderByWithAggregationInputSchema;
